"use client"
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { BiUpArrowAlt } from "react-icons/bi";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 550) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='w-screen h-screen z-[2000] fixed flex items-center pointer-events-none justify-center '>
            <div className='flex h-full items-end pb-10 justify-end max-w-7xl w-full px-6 md:px-6 xl:px-2 2xl:px-0'>
                <AnimatePresence>
                    <motion.div className={`border-text rounded-full p-3 md:p-4 bg-bg pointer-events-auto border-2 hover:bg-primary transition-all hover:border-transparent cursor-pointer drop-shadow-dark hover:drop-shadow-primary `} onClick={scrollToTop} variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ ease: "easeInOut", duration: .3 }}>
                        <BiUpArrowAlt className='text-4xl ' />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}