import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";

import { useLayoutEffect, useState } from "react";

export default function CaseStudiesSection() {
  const [projectData, setProjectData] = useState<any>([]);

  const fetchProjects = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjectData(data);
  };

  useLayoutEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Section title="Case Studies" id="case" className="">
      {projectData.length > 0 ? (
        projectData.map((project: any, index: number) => (
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
