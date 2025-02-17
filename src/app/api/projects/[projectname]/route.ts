import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { pathname } = new URL(request.url);
    const projectName = pathname.split('/').pop() || "";

    const projectDir = path.join(process.cwd(), "public/projects", projectName);
    const filePath = path.join(projectDir, "project.json");

    if (fs.existsSync(filePath)) {
        const projectData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        return NextResponse.json(projectData);
    }

    return NextResponse.json({ error: "Project not found" }, { status: 404 });
}