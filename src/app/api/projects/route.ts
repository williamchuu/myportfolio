import { NextResponse } from "next/server";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";

export async function GET() {
    try {
        const query = groq`*[_type == "project"] | order(order asc) {
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
            wide_mockup,
            mockup
        }`;
        
        const projects = await client.fetch(query);
        
        console.log(`Found ${projects.length} projects`);
        
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}
