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
            const project = await ProjectPull(params.project);
            if(project == false) {
                router.push("/error")
            }
            else {
                setData(project);
            }
        }
        SelectProject();

    }, [params.project, router]);

    return <main className="flex min-h-screen flex-col gap-12 items-center">
        <NavBar />
        <motion.div className="pt-8 md:pt-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            {data ?
                <div>
                    <BlurImage src={`/projects/${params.project}/wide_mockup.webp`} width={3840} height={2160} className="w-screen min-h-[30dvh] md:max-h-[75dvh] object-scale-down" alt="Mockup" priority />
                    <ProjectInfoSection data={data} header/>
                    {data.problem != undefined && <ProjectProblemSection title={"THE PROBLEM"} paragraph={data.problem} statement={data.statement} />}
                    {data.solution != undefined && <ProjectSection title={"THE SOLUTION"} paragraph={data.solution.aim} projectname={data.projectname} wideImage={data.solution.solutionimg} solution={data.solution} botLine={false} />}
                    {data.research != undefined && <ProjectSection title={"USER RESEARCH"} paragraph={data.research} projectname={data.projectname} image={data.researchimg} />}
                    {data.sitemap != undefined && <ProjectSection title={"SITE MAP"} projectname={data.projectname} smallImage={data.sitemap} fullWidth />}
                    {data.userjourney != undefined && <ProjectSection title={"USER JOURNEY"} projectname={data.projectname} largeImage={data.userjourney} />}
                    {data.wireframes != undefined && <ProjectSection title={"WIREFRAMES"} projectname={data.projectname} largeImage={data.wireframes} fullWidth />}
                    {data.prototypes != undefined && <ProjectSection title={"LOW FIDELITY PROTOTYPES"} projectname={data.projectname} largeImage={data.prototypes} fullWidth/>}
                    {data.features != undefined && <ProjectSection title={"FEATURES"} projectname={data.projectname} largeImage={data.features} />}
                    <ProjectSection title={"FINAL OUTCOME"} projectname={data.projectname} largeImage={data.outcomes} fullWidth />
                    <ProjectSection title={"FEEDBACK"} paragraph={[data.feedback]} />
                    <ProjectSection title={"CONCLUSION"} paragraph={[data.conclusion]} />
                </div>
                :
                <div className="h-[100dvh]">
                </div>
            }
        </motion.div>
        <motion.section className="flex items-center justify-center"
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            viewport={{ once: true }}
        >
            <BottomBorderTextHover href={"/#case"}>
                SEE MORE CASE STUDIES <span className="font-bold text-2xl"><MdArrowOutward /></span>
            </BottomBorderTextHover>
        </motion.section>
        <BackToTop />
        <Footer />
    </main>
}