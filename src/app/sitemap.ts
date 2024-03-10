import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://wchu.ca",
      priority: 1,
    },
    {
      url: "https://wchu.ca/projects/igaq/",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...(await generateBlogPostsSitemapObjects()).map((o) => ({
      url: `https://wchu.ca/projects/${o.slug}/`,
      lastModified: o.updatedAt,
    })),
  ];
}

import Projects from "./helper/projectList";
const generateBlogPostsSitemapObjects = async () => {
  let sitemap = [];
  let project = await Projects();
  for (let i = 0; i < Projects.length - 1; i++) {
    sitemap.push({
      //@ts-ignore
      slug: project[i].projectname,
      updatedAt: new Date()
    }
    );
  }
  return sitemap;
};