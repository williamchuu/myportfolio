import CaseStudyCard from "../CaseStudyCard";
import Section from "../Section";

export default function CaseStudiesSection({ projectData }: { projectData: any[] }) {
  return (
    <Section title="Projects" id="projects" className="">
      {projectData.length > 0 ? (
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
