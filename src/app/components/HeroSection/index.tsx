"use client";
import Button from "../Button";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="flex gap-1 px-5 lg:px-0 lg:pr-2 2xl:pr-0 pt-32 w-full max-w-default"
      id="hero"
    >
      <div className="flex flex-col md:gap-3 gap-6 justify-center w-full">
        <motion.h2
          className="text-3xl md:text-4xl text-balance"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Hello, I&apos;m
        </motion.h2>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          William Chu.
        </motion.h1>
        <motion.p
          className="text-pretty"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Welcome to my portfolio. I&apos;m a{" "}
          <span className="text-primary font-medium">UI/UX</span> and{" "}
          <span className="text-primary font-medium">Graphic designer</span>{" "}
          with a passion in layout and design. I&apos;m focused on creating
          thoughtful and elegant designs. Explore my work and see how simplicity
          shapes everything I do.
        </motion.p>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Click{" "}
          <Link
            className="text-primary hover:font-medium transition-all"
            href={
              "https://scratch-anorak-0e8.notion.site/William-Chu-Graphic-Designer-1908a094a1978033b1a1d0ef5d1c3d0e"
            }
            target="_blank"
          >
            here
          </Link>{" "}
          to see my Graphic Design works.
        </motion.p>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-4 w-max"
        >
          <Scroll smooth={true} duration={1000} to="case" className="">
            <Button text="See My Projects" />
          </Scroll>
        </motion.div>
      </div>
    </section>
  );
}
