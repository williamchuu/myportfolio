import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const projectsDir = path.join(process.cwd(), "public/projects");

    const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name);

    const projects = projectFolders.map((folder) => {
        const filePath = path.join(projectsDir, folder, "project.json");

        if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath, "utf-8"));
        }
        return null;
    }).filter(Boolean)
        .sort((a, b) => a.order - b.order);


    return NextResponse.json(projects);
}
