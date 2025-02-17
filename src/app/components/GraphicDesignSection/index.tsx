import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";

import  { Graphics } from "@/app/helper/projectList";
import { useLayoutEffect, useState } from "react";

export default function CaseStudiesSection() {
  const [cases, setCases] = useState<any>([]);

  const ProjectPull = async () => {
    const projects = await Graphics();
    setCases(projects);
  };

  useLayoutEffect(() => {
    ProjectPull();
  }, []);

  return (
    <Section title="Graphic Design" id="graphics" className="">
      {cases.length > 0 ? (
        cases.map((project: any, index: number) => (
          <CaseStudyCard
            title={project.title}
            projectname={project.projectname}
            projectMockup={project.mockup}
            description={project.description}
            roledescription={project.roledescription}
            link={project.link}
            key={index}
            type="graphic"
            number={index}
          />
        ))
      ) : (
        <div className="h-[100dvh]"></div>
      )}
      <hr className="h-1 bg-text " />
    </Section>
  );
}
