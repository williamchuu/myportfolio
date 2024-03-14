"use client"
import Section from "../Section"
import Image from "next/image"
import { motion } from "framer-motion"
import ScrollingText from "../ScrollingText"
export default function AboutMeSection() {
    return (
        <Section title="About Me" grid id="about">
            <motion.div initial={{ x: -25, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <Image src="/landing/design_tools.svg" width={350} height={350} className="max-h-full max-w-full md:w-full object-cover" alt="Laptop with a tablet and pen with a cup of coffee. " />
            </motion.div>
            <motion.div className="self-baseline relative leading-relaxed w-full space-y-4 overflow-hidden" initial={{ x: -25, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: .3, duration: .3, ease: "easeInOut", }}
                viewport={{ once: true }}
            >
                <p className="text-pretty ">I love designs that are simple and minimal. My goal is to design easy-to-use and great-looking digital experiences. With my mix of technical skills and artistic vision, I focus on making clean designs that everyone can use and enjoy. As a detail-oriented designer, I pay close attention to the little things. When I&apos;m not designing, I&apos;m probably drawing, gaming, or watching a series.
                </p>
                
                <ScrollingText />
                
            </motion.div>

        </Section>
    )
}