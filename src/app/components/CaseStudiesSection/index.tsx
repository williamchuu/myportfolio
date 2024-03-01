import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";

import Projects from "@/app/helper/projectList";
import { useEffect, useLayoutEffect, useState } from "react";

export default function CaseStudiesSection() {

    const [cases, setCases] = useState<any>([]);

    const ProjectPull = async () => {
        const projects = Projects();
        setCases(projects);
    };

    useLayoutEffect(()=>{
        ProjectPull();
    }, [])

    return <Section title="Case Studies" id="case">
        {cases.map((project:any, index:number)=>{
            return <CaseStudyCard title={project.title} projectname={project.projectname} description={project.description} tags={project.tags} link={project.link} key={index}/>
        })}
    </Section>
}