"use client"

import { motion } from "framer-motion";
import ProjectInfoSection from "@/app/components/ProjectInfoSection";
import ProjectSection from "@/app/components/ProjectSection";
import ProjectProblemSection from "@/app/components/ProjectProblemSection";
import BottomBorderTextHover from "@/app/components/BottomBorderTextHover";
import BackToTop from "@/app/components/BackToTopButton";
import BlurImage from "@/app/components/BlurImage";
import { urlFor } from "@/app/lib/sanity";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectPageContent({ data }: { data: any }) {
    return (
        <>
            <motion.div
                className="pt-12 md:pt-14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
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
                        data.content.sections.map((section: any) => {
                            if (section.statement) {
                                return (<ProjectProblemSection key={section.title} title={section.title} paragraph={section.text} statement={section.statement} />);
                            } else {
                                return (<ProjectSection key={section.title} title={section.title} paragraph={section.text} projectname={data.projectname} smallImage={section.smallImage} image={section.image} largeImage={section.largeImage} wideImage={section.wideImage} solution={section.list} fullWidth={section.size === "screen"} botLine={section.botLine} link={section.link} linkText={section.linkText} />);
                            }
                        })}
                </div>
            </motion.div>
            <motion.section
                className="flex items-center justify-center"
                initial={{ x: -25, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <BottomBorderTextHover href={"/#projects"}>
                    SEE MORE PROJECTS{" "}
                    <span className="font-bold text-2xl">
                        <MdArrowOutward />
                    </span>
                </BottomBorderTextHover>
            </motion.section>
            <BackToTop />
        </>
    );
} 