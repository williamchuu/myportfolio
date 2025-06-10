import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";
import { useLayoutEffect, useState } from "react";

export default function CaseStudiesSection() {
  const [projectData, setProjectData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjectData(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Section title="Case Studies" id="case" className="">
      {!isLoading && projectData.length > 0 ? (
        projectData.map((project: any, index: number) => (
          <CaseStudyCard
            title={project.title}
            projectname={project.projectname}
            description={project.description}
            roledescription={project.roledescription}
            link={project.link || `/projects/${project.projectname}`}
            key={project.projectname || index}
            number={index}
            type="project"
            projectMockup={project.mockup}
          />
        ))
      ) : (
        <div className="h-[100dvh]"></div>
      )}
      <hr className="h-1 bg-text " />
    </Section>
  );
}
