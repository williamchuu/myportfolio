"use client"
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function ScrollingText({
}: {
    }) {
    const words = ["Visual Design", "User Research", "Usability Testing", "Prototyping", "Wireframing", "Typography", "Photoshop", "Illustrator", "InDesign", "After Effects", "Figma", "Adobe XD"];
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    const opacity = useMotionValue(1);
    useEffect(() => {
        let controls;
        let finalPos = -width / 2 - 2;
        controls = animate(xTranslation, [0, finalPos], {
            ease: "linear",
            duration: words.length * 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });
        return controls.stop;
    }, [xTranslation, width, words.length]);

    return (
        <>
            <hr className="border-dark-accent" />
            <div className="absolute bg-gradient-to-r from-bg h-4 p-6 z-[80] pointer-events-none"> </div>
            <div className="absolute right-0 bg-gradient-to-l from-bg h-4 p-6 z-[80] pointer-events-none"> </div>
            <motion.div className="inline-flex gap-6 overflow-x-hidden select-none" ref={ref} style={{ x: xTranslation }}>
                {[...words, ...words].map((item, index) => (
                    <motion.div className="justify-center items-center" key={index}>
                        <p className="text-dark-accent whitespace-nowrap">{item}</p>
                    </motion.div>
                ))}
            </motion.div>
        </>
    )
}