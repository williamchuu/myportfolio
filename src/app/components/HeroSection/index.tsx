"use client"
import Image from "next/image"
import Button from "../Button"
import { Link as Scroll } from "react-scroll"
import { motion } from "framer-motion"
import BlurImage from "../BlurImage"

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-1 px-5 lg:px-0 lg:pr-2 2xl:pr-0 pt-32 w-full max-w-7xl" id="hero">
      <motion.div className="hidden md:flex" initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: .5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="transition-all hover:scale-105 ">
          <Scroll smooth={true}
            duration={800} to="about" className="group transition-all cursor-pointer">
            <BlurImage src="/landing/me_wave0.svg" width={350} height={250} alt="Drawing of William Chu Waving" className="group-hover:hidden max-h-[60dvh]" priority cover />
            <BlurImage src="/landing/me_wave1.svg" width={350} height={250} alt="Drawing of William Chu Waving" className="group-hover:block hidden max-h-[60dvh] " priority cover />
          </Scroll>
        </div>
      </motion.div>
      <div className="flex flex-col md:gap-12 gap-6 justify-center w-full">
        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: .5, duration: .5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >Hello, I&apos;m William Chu</motion.h1>
        <motion.p className="font-medium text-lg text-balance"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: .7, duration: .5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >I’m a <span className="text-primary">UI/UX</span> and <span className="text-primary">Graphic designer</span> with a passion in layout and design. I improve user experience through communication by design.</motion.p>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: .9, duration: .5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Scroll smooth={true}
            duration={1000} to="case" className=" ">
            <Button text="See My Projects" />
          </Scroll>
        </motion.div>
      </div>
    </section>
  )
}