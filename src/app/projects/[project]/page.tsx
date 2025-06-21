import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import ProjectPageContent from "@/app/components/ProjectPageContent";

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type == "project" && defined(projectname)].projectname`;
  const projectnames = await client.fetch(query);
  return projectnames.map((name: string) => ({ project: name }));
}

async function getProject(slug: string) {
      const query = groq`*[_type == "project" && lower(projectname) == lower($slug)][0]{
                title,
                wide_mockup { asset->{ url } },
                mockup { asset->{ url } },
                projectname,
                heading,
                description,
                link,
                duration,
                role,
                tags,
                roledescription,
                tools,
                order,
                content {
                    sections[]{
                        title,
                        text,
                        statement,
                        smallImage { asset->{ url } },
                        image { asset->{ url } },
                        largeImage { asset->{ url } },
                        wideImage { asset->{ url } },
                        list,
                        size,
                        botLine,
                        link,
                        linkText
                    }
                }
            }`

    const projectData = await client.fetch(query, { slug });
    return projectData;
}


export default async function Page({
  params
}: {
  params: { project: string }
}) {

  const data = await getProject(params.project);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col gap-12 items-center">
      <NavBar />
      <ProjectPageContent data={data} />
      <Footer />
    </main>
  );
}