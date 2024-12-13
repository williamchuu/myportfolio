"use client"
import Section from "../Section"
import { motion } from "framer-motion"
import ScrollingText from "../ScrollingText"
export default function AboutMeSection() {
    return (
        <Section title="About Me" id="about">
            <motion.div className="self-baseline relative leading-relaxed w-full space-y-4 overflow-hidden" initial={{ x: -25, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: .3, duration: .3, ease: "easeInOut", }}
                viewport={{ once: true }}
            >
                <p className="text-pretty ">I love simplicity. My goal is to improve user experience through clean design. With my mix of technical and creative skills, I focus on the results and pay attention to the little details. When I&apos;m not designing, you&apos;ll find me drawing, gaming, or watching a series.
                </p>
                <ScrollingText />
            </motion.div>

        </Section>
    )
}