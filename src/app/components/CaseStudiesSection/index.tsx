import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";

import Projects from "@/app/helper/projectList";
import { useLayoutEffect, useState } from "react";

export default function CaseStudiesSection() {
  const [cases, setCases] = useState<any>([]);

  const ProjectPull = async () => {
    const projects = await Projects();
    setCases(projects);
  };

  useLayoutEffect(() => {
    ProjectPull();
  }, []);

  return (
    <Section title="Case Studies" id="case" className="">
      {cases.length > 0 ? (
        cases.map((project: any, index: number) => (
          <CaseStudyCard
            title={project.title}
            projectname={project.projectname}
            description={project.description}
            roledescription={project.roledescription}
            link={project.link}
            key={index}
            number={index}
            type="project"
          />
        ))
      ) : (
        <div className="h-[100dvh]"></div>
      )}
      <hr className="h-1 bg-text " />
    </Section>
  );
}
