import { NextResponse } from "next/server";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";

export async function GET(request: Request) {
    try {
        const { pathname } = new URL(request.url);
        const projectName = pathname.split('/').pop() || "";
        
        const query = groq`*[_type == "project" && lower(projectname) == lower($projectname)][0]{
            _id,
            title,
            "projectname": slug.current,
            description,
            duration,
            role,
            roledescription,
            tags,
            tools,
            problem,
            statement,
            solution { aim, solutions[] { feature, solution }, solutionimg { asset->{ url } } },
            research,
            researchimg { asset->{ url } },
            features { asset->{ url } },
            userjourney { asset->{ url } },
            prototypes { asset->{ url } },
            outcomes { asset->{ url } },
            feedback,
            conclusion,
            wide_mockup { asset->{ url } }
        }`;

        const project = await client.fetch(query, { projectname: projectName });
        
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
        
        return NextResponse.json(project);
    } catch (error) {
        console.error("Error fetching project from Sanity:", error);
        return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
    }
}