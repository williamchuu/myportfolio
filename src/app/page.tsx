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
    return <LoadingAnimation onComplete={() => { setLoading(false); setHome(true); }} onClick={() => { setLoading(false); setHome(true); }} />
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
        <Footer />

      </main >
    </>
  );
}