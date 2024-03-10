import type { Metadata } from 'next'
import { ProjectPull } from '@/app/helper/projectList'
type Props = {
    params: { project: string }
}

export async function generateMetadata(
    { params, }: Props
): Promise<Metadata> {
    const project = await ProjectPull(params.project);
    let title;
    if (project == false) {
        title = params.project
    }
    else {
        title = project.title
    }
    return {
        title: title + " - William Chu Portfolio - Graphic and UI/UX Designer",
    }
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
