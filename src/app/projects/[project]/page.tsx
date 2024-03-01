"use client"
import NavBar from "@/app/components/NavBar";

import Projects from "@/app/helper/projectList";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/app/components/Section";
import { motion } from "framer-motion"

export default function Page({
    params
}: {
    params: any
}) {
    const router = useRouter();
    const [data, setData] = useState<any>();
    function linearSearch(names: string[], projectName: string) {
        let found = false;
        let index = 0;
        for (let i = 0; i < names.length; i++ && !found) {
            if (projectName == names[i]) {
                index = i;
                found = true;
            }
        }
        if (!found) {
            router.push('/#case')
        }
        return index;
    }
    const ProjectPull = async (project: string) => {
        const projects = await Projects();
        let total = [];
        for (let i = 0; i < projects.length; i++) {
            total.push(projects[i].projectname);
        }
        let index = await linearSearch(total, project);
        setData(projects[index]);
    };
    useLayoutEffect(() => {
        // @ts-ignore
        ProjectPull(params.project);
    }, [])
    return <main className="flex min-h-screen flex-col gap-12 items-center">
        <NavBar />
        <motion.div className="pt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {data &&
                <div>
                    <Image src={`/projects/${params.project}/wide_mockup.webp`} width={1920} height={1080} className="w-screen max-h-[70dvh] object-cover" alt="Mockup" />
                    <Section>
                        <h1>{data.title}</h1>
                    </Section>
                </div>
            }
        </motion.div>
    </main>
}