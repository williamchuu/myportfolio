require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2023-05-03',
  useCdn: false,
});

// Path to projects directory
const projectsDir = path.join(process.cwd(), 'public/graphics');

async function importProjects() {
  try {
    // Get all project folders
    const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name);

    console.log(`Found ${projectFolders.length} projects to import`);

    for (const folder of projectFolders) {
      const filePath = path.join(projectsDir, folder, 'project.json');
      
      if (fs.existsSync(filePath)) {
        const projectData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        // Transform content to match Sanity schema
        const sections = [];
        
        if (projectData.content) {
          Object.keys(projectData.content).forEach(key => {
            const section = {
              title: key,
              ...projectData.content[key]
            };
            sections.push(section);
          });
        }
        
        // Create document for Sanity
        const sanityProject = {
          _type: 'project',
          title: projectData.title,
          projectname: projectData.projectname,
          description: projectData.description,
          link: projectData.link,
          duration: projectData.duration,
          role: projectData.role,
          tags: projectData.tags,
          roledescription: projectData.roledescription,
          tools: projectData.tools,
          order: projectData.order,
          content: {
            sections: sections
          }
        };
        
        // Create the document in Sanity
        const result = await client.create(sanityProject);
        console.log(`Imported project: ${projectData.title} with ID: ${result._id}`);
        
      }
    }
    
    console.log('Import completed!');
  } catch (error) {
    console.error('Error importing projects:', error);
  }
}

importProjects();