"use client"
import Image from "next/image";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useLayoutEffect } from "react";
import BlurImage from "../BlurImage";
export default function Carousel() {
    const images = [
        "/landing/carousel/frame1.webp",
        "/landing/carousel/frame2.webp",
        "/landing/carousel/frame3.webp",
        "/landing/carousel/frame4.webp",
        "/landing/carousel/frame5.webp",
        "/landing/carousel/frame6.webp",
        "/landing/carousel/frame7.webp",
        "/landing/carousel/frame8.webp",
        "/landing/carousel/frame9.webp",
        "/landing/carousel/frame10.webp",
        "/landing/carousel/frame11.webp",
        "/landing/carousel/frame13.webp",
        "/landing/carousel/frame14.webp",
        "/landing/carousel/frame15.webp",
        "/landing/carousel/frame16.webp",
        "/landing/carousel/frame18.webp",
    ];

    function shuffle(array: any) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    shuffle(images);
    const xTranslation = useMotionValue(0);
    let [ref, { width }] = useMeasure();

    useEffect(() => {
        let controls;
        let finalPos = -width / 2 - 2;

        controls = animate(xTranslation, [0, finalPos], {
            ease: "linear",
            duration: images.length * 6,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });


        return controls.stop;
    }, [xTranslation, width, images.length])

    return <section className="w-full h-[450px] hidden md:flex mt-12 overflow-x-hidden max-w-screen max-h-screen pointer-events-none">
        <motion.div className="absolute left-0 select-none overflow-x-hidden flex gap-2" ref={ref} style={{ x: xTranslation, }}>
            {[...images, ...images].map((item, index) => (
                <div className="relative overflow-hidden h-[22rem] min-w-[25rem] md:h-[30rem] md:min-w-[35rem] flex justify-center items-center" key={index}>
                    <BlurImage src={item} alt={`Carousel Image #${index}`} fill className="object-cover" priority={false} />
                </div>
            ))}
        </motion.div>

    </section>
}