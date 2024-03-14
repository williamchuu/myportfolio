import Section from "../Section"

export default function ProjectProblemSection({
    title,
    paragraph,
    statement,
}: {
    title: string,
    paragraph: string[],
    statement: string
}) {
    return <Section grid gridClass subtitle="OVERVIEW" topLine bg="bg-bg-dark" >
        <div>
            <h3 className="font-bold text-2xl">{title}</h3>
        </div>
        <div className="space-y-4">
            {paragraph.map((para, index) => (<p key={index}>{para}</p>))}
            <blockquote className="border-l-4 pl-4 mt-4 py-2 border-primary text-lg italic font-medium">{statement}</blockquote>
        </div>
    </Section>
}