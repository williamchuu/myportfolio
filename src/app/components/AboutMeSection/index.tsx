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
                <p className="md:text-pretty text-balance">As a designer with a passion for <span className="text-primary font-medium">minimalism</span> and <span className="text-primary font-medium">simplicity</span>, I specialize in crafting elegant and user-friendly digital experiences. I bring a unique blend of technical expertise and artistic vision to each project. My design philosophy revolves around creating clean and intuitive interfaces that prioritize usability and accessibility. Through a meticulous attention to detail and a commitment to user-centric principles, I strive to deliver designs that are not only visually appealing but also highly functional. In my free time, you can find me at home drawing or playing video games.</p>
                
                <ScrollingText />
                
            </motion.div>

        </Section>
    )
}