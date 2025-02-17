import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";

import { useLayoutEffect, useState } from "react";

export default function CaseStudiesSection() {
  
  const [projectData, setProjectData] = useState<any>([]);

  const fetchProjects = async () => {
    const response = await fetch('/api/graphics');
    const data = await response.json();
    setProjectData(data);
  };

  useLayoutEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Section title="Graphic Design" id="graphics" className="">
      {projectData.length > 0 ? (
        projectData.map((project: any, index: number) => (
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
