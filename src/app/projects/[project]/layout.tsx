import type { Metadata } from 'next'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'

type Props = {
    params: { project: string }
}

export async function generateMetadata(
    { params, }: Props
): Promise<Metadata> {
    const query = groq`*[_type == "project" && lower(projectname) == lower($slug)][0]{
        title
    }`
    
    const project = await client.fetch(query, { slug: params.project })
    
    let title = project?.title || params.project
    
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
