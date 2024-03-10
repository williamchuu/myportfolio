import Danbi from "../../../public/projects/danbi/project.json";
import IGAQ from "../../../public/projects/igaq/project.json";
import PayFlow from "../../../public/projects/payflow/project.json";

export default async function Projects() {
    const projects = [Danbi, PayFlow, IGAQ];

    return projects;
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

export const ProjectPull = async (project: string) => {
    const projects = await Projects();
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