"use client"
import NavBar from "@/app/components/NavBar";
import {ProjectPull} from "@/app/helper/projectList";
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

export default function Page({
    params
}: {
    params: any
}) {
    const router = useRouter();
    const [data, setData] = useState<any>();
    
    useLayoutEffect(() => {
        const SelectProject = async () => {
            const project = await ProjectPull(params.project, false);
            if(project == false) {
                router.push("/error")
            }
            else {
                setData(project);
            }
        }
        SelectProject();

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
              <BlurImage
                src={`/graphics/${params.project}${data.mockup}`}
                width={3840}
                height={2160}
                className="w-screen min-h-[30dvh] md:max-h-[80dvh] object-contain"
                alt="Mockup"
                priority
              />
              <ProjectInfoSection data={data} header />

              {data.content &&
                Object.keys(data.content).map((key, index) => {
                  return (
                    <ProjectSection
                      key={key}
                      title={key}
                      paragraph={data.content[key].text}
                      projectname={data.projectname}
                      smallImage={data.content[key].smallImage}
                      image={data.content[key].image}
                      largeImage={data.content[key].largeImage}
                      wideImage={data.content[key].wideImage}
                      solution={data.content[key].list}
                      fullWidth={data.content[key].size === "screen"}
                      botLine={data.content[key].botLine}
                      link={data.content[key].link}
                      linkText={data.content[key].linkText}
                      type="graphics"
                    />
                  );
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