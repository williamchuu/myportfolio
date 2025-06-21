"use client"
import NavBar from "./components/NavBar";
import HeroSection from "@/app/components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTopButton";
import Carousel from "./components/Carousel";
import LoadingAnimation from "./components/LoadingAnimation";
import GraphicDesignSection from "./components/GraphicDesignSection";
import HomeClientWrapper from "./components/HomeClientWrapper";
import { client } from "./lib/sanity";
import { groq } from "next-sanity";

async function getProjects() {
  const query = groq`*[_type == "project"] | order(order asc) {
    _id,
    title,
    projectname,
    description,
    link,
    roledescription,
    mockup
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <HomeClientWrapper>
      <main className={`flex min-h-screen flex-col gap-12 items-center `}>
        <HeroSection />
        <CaseStudiesSection projectData={projects} />
        <Carousel />
        <Footer />
      </main >
    </HomeClientWrapper>
  );
}