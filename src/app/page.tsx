"use client"
import NavBar from "./components/NavBar";
import HeroSection from "@/app/components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";
import GraphicDesignSection from "./components/GraphicDesignSection";
import BackToTop from "./components/BackToTopButton";
import Carousel from "./components/Carousel";
import LoadingAnimation from "./components/LoadingAnimation";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { animateScroll as scroll, Element, scroller } from 'react-scroll';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (window.location.hash.length > 1) {
      setLoading(false);
      // if (window.location.hash == "#case") {
      //   if (window.innerHeight > 600) {
      //     scroll.scrollMore(750)
      //   } else if (window.innerWidth > 900) {
      //     scroll.scrollMore(1000)
      //   }
      //   else {
      //     scroll.scrollMore(1000)
      //     console.log("GEGEASG")
      //   }
      //   console.log(window.innerHeight, window.innerWidth)
      // }
      if (window.location.hash == "#contact") {
        setTimeout(() => {
          scroll.scrollToBottom({
            duration: 1000
          });
        }, 500)
      }
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
        <Element name="about">
          <AboutMeSection />
        </Element>
        <Element name="case">
          <CaseStudiesSection />
        </Element>
        {/* <GraphicDesignSection/> */}
        <Footer />

      </main>
    </>
  );
}
