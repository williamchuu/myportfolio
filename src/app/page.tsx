"use client"
import NavBar from "./components/NavBar";
import HeroSection from "@/app/components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTopButton";
import Carousel from "./components/Carousel";
import LoadingAnimation from "./components/LoadingAnimation";
import { useLayoutEffect, useState, useInsertionEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(false);
  
  useLayoutEffect(() => {
    if (window.location.hash.length > 0) {
      setHome(true)
    }
    else {
      setLoading(true);
    }
  }, [])

  if (loading) {
    return <LoadingAnimation onComplete={() => { 
      setLoading(false); 
      setHome(true); 
      if (window.location.hostname === "wchu.ca") {
      // if (window.location.hostname === "localhost" && window.location.port === "3000") {
        window.location.href = "https://scratch-anorak-0e8.notion.site/William-Chu-Graphic-Designer-1908a094a1978033b1a1d0ef5d1c3d0e";
      }
        }} onClick={() => { 
      setLoading(false); 
      setHome(true); 
      if (window.location.hostname === "wchu.ca") {
        window.location.href = "https://scratch-anorak-0e8.notion.site/William-Chu-Graphic-Designer-1908a094a1978033b1a1d0ef5d1c3d0e";
      }
    }} />
  }
  return (
    <>
      <main className={`flex min-h-screen flex-col gap-12 items-center `}>

        <HeroSection />
        {home && <NavBar home />}
        {home && <BackToTop />}
        <Carousel />
        <AboutMeSection />
        <CaseStudiesSection />
        {/* <GraphicDesignSection /> */}
        <Footer />

      </main >
    </>
  );
}