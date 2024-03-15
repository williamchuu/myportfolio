"use client"
import NavBar from "./components/NavBar";
import HeroSection from "@/app/components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTopButton";
import Carousel from "./components/Carousel";
import LoadingAnimation from "./components/LoadingAnimation";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";


export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (window.location.hash.length > 1) {
      setLoading(false);
    }
  }, [])

  return (
    <>
      <main className={`flex min-h-screen flex-col gap-12 items-center `}>
        <AnimatePresence>
          {loading ?
            <>
              {/* <div className="min-h-[120dvh]"></div> */}
              {/* <HeroSection /> */}
              <LoadingAnimation onComplete={() => setLoading(false)} onClick={() => { setLoading(false) }} />
            </>
            :
            <>
              <HeroSection />
              <NavBar home />
              <BackToTop />
            </>
          }
        </AnimatePresence>

        <Carousel />
        <AboutMeSection />
        <CaseStudiesSection />
        <Footer />

      </main>
    </>
  );
}
