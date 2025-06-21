"use client"
import NavBar from "@/app/components/NavBar";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectInfoSection from "@/app/components/ProjectInfoSection";
import ProjectSection from "@/app/components/ProjectSection";
import ProjectProblemSection from "@/app/components/ProjectProblemSection";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import BottomBorderTextHover from "@/app/components/BottomBorderTextHover";
import BackToTop from "@/app/components/BackToTopButton";
import BlurImage from "@/app/components/BlurImage";
import { client, urlFor } from "@/app/lib/sanity";
import { groq } from "next-sanity";

export default function Page({
    params
}: {
    params: any
}) {
    const router = useRouter();
    const [data, setData] = useState<any>();
    
    useLayoutEffect(() => {
        const fetchGraphicsProject = async () => {
            const query = groq`*[_type == "graphics" && lower(projectname) == lower($slug)][0]{
                title,
                mockup { asset->{ url } },
                wide_mockup { asset->{ url } },
                projectname,
                heading,
                description,
                link,
                duration,
                role,
                tags,
                roledescription,
                tools,
                order,
                content {
                    sections[]{
                        title,
                        text,
                        statement,
                        smallImage { asset->{ url } },
                        image { asset->{ url } },
                        largeImage { asset->{ url } },
                        wideImage { asset->{ url } },
                        list,
                        size,
                        botLine,
                        link,
                        linkText
                    }
                }
            }`
            
            try {
                const projectData = await client.fetch(query, { slug: params.project });
                if (projectData) {
                    setData(projectData);
                    console.log(projectData);
                } else {
                    router.push("/error");
                }
            } catch (error) {
                console.error("Error fetching graphics project data:", error);
                router.push("/error");
            }
        }
        
        fetchGraphicsProject();
    }, [params.project, router]);

    return (
      <main className="flex min-h-screen flex-col gap-12 items-center">
        <NavBar />
        <motion.div
          className="pt-12 md:pt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {data ? (
            <div>
              {data.wide_mockup ? (
                <BlurImage
                  src={urlFor(data.wide_mockup).width(3840).url()}
                  width={3840}
                  height={2160}
                  className="w-screen min-h-[30dvh] md:max-h-[80dvh] object-cover"
                  alt="Mockup"
                  priority
                />
              ) : (
                data.mockup && (
                  <BlurImage
                    src={urlFor(data.mockup).width(3840).url()}
                    width={3840}
                    height={2160}
                    className="w-screen min-h-[30dvh] md:max-h-[80dvh] object-contain"
                    alt="Mockup"
                    priority
                  />
                )
              )}
              <ProjectInfoSection data={data} header />

              {data.content && data.content.sections &&
                data.content.sections.map((section:any, index:number) => {
                  if (section.statement) {
                    return (
                        <ProjectProblemSection
                            key={section.title}
                            title={section.title}
                            paragraph={section.text}
                            statement={section.statement}
                        />
                    );
                  } else {
                    return (
                      <ProjectSection
                        key={section.title}
                        title={section.title}
                        paragraph={section.text}
                        projectname={data.projectname}
                        smallImage={section.smallImage}
                        image={section.image}
                        largeImage={section.largeImage}
                        wideImage={section.wideImage}
                        solution={section.list}
                        fullWidth={section.size === "screen"}
                        botLine={section.botLine}
                        link={section.link}
                        linkText={section.linkText}
                      />
                    );
                  }
                })}
            </div>
          ) : (
            <div className="h-[100dvh]"></div>
          )}
        </motion.div>
        <motion.section
          className="flex items-center justify-center"
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <BottomBorderTextHover href={"/#graphics"}>
            SEE MORE GRAPHICS{" "}
            <span className="font-bold text-2xl">
              <MdArrowOutward />
            </span>
          </BottomBorderTextHover>
        </motion.section>
        <BackToTop />
        <Footer />
      </main>
    );
}