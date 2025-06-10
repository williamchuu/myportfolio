import { NextResponse } from "next/server";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";

export async function GET() {
    try {
        const query = groq`*[_type == "graphics"] | order(order asc) {
            _id,
            title,
            projectname,
            description,
            link,
            duration,
            role,
            tags,
            roledescription,
            tools,
            order,
            mockup { asset->{ url } }, // Fetch the asset URL for the mockup image
        }`;

        const graphicsProjects = await client.fetch(query);

        return NextResponse.json(graphicsProjects);
    } catch (error) {
        console.error("Error fetching graphics projects from Sanity:", error);
        return NextResponse.json(
            { error: "Failed to fetch graphics projects" },
            { status: 500 }
        );
    }
}
