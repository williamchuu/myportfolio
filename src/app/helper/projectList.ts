
const projectContext = (require as any).context("../../../public/projects", true, /project\.json$/);
const graphicsContext = (require as any).context("../../../public/graphics", true, /project\.json$/);

export default async function Projects() {
    const projects = projectContext.keys().map((key: string) => projectContext(key));
    const sortedProjects = projects.sort((a: any, b: any) => a.order - b.order);
    return sortedProjects;
}
export async function Graphics() {
    const graphics = graphicsContext.keys().map((key: string) => graphicsContext(key));
    const sortedGraphics = graphics.sort((a: any, b: any) => a.order - b.order);
    return sortedGraphics;
}


export function linearSearch(names: string[], projectName: string) {
    let found = false;
    let index = 0;
    for (let i = 0; i < names.length; i++ && !found) {
        if (projectName == names[i]) {
            index = i;
            found = true;
        }
    }
    if (!found) {
        return -1;
    } else {
        return index;
    }
}

export const ProjectPull = async (project: string, type: boolean) => {
    let projects;
    if (type) {
        projects = await Projects();

    } else {
        projects = await Graphics();
    }

    let total = [];
    for (let i = 0; i < projects.length; i++) {
        total.push(projects[i].projectname);
    }
    let index = await linearSearch(total, project);
    if (index == -1) {
        return false;
    } else {
        return projects[index];
    }
};
