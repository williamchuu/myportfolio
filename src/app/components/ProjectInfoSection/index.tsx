import Section from "../Section";

export default function ProjectInfoSection({
    data,
    header
}: {
    data: any,
    header: boolean
}) {
    return <Section title={data.title} heading={data.heading} grid gridClass header={header}>
        <div className="space-y-2">
            {data.roledescription.map((tag: string, index: number) => (
                <p key={index} className="text-primary">{tag}</p>
            ))}
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-2">
                <p className="font-bold">Description</p>
                <p className="text-pretty">{data.description}</p>
            </div>
            <hr className="bg-text" />
            <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-2">
                <p className="font-bold">Duration</p>
                <p className="">{data.duration}</p>
            </div>
            <hr className="bg-text" />
            <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-2">
                <p className="font-bold">Role</p>
                <p className=""><span className="font-bold">{data.role}</span> <br /> {data.tags}</p>
            </div>
            <hr className="bg-text" />
            <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-2">
                <p className="font-bold">Tools</p>
                <p className="">{data.tools}</p>
            </div>
        </div>
    </Section>
}