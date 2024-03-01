"use client"
import Image from "next/image";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useLayoutEffect } from "react";
export default function Carousel() {
    const images = [
        "/landing/carousel/frame1.png",
        "/landing/carousel/frame2.png",
        "/landing/carousel/frame3.png",
        "/landing/carousel/frame4.png",
        "/landing/carousel/frame5.png",
        "/landing/carousel/frame6.png",
        "/landing/carousel/frame7.png",
        "/landing/carousel/frame8.png",
        "/landing/carousel/frame9.png",
        "/landing/carousel/frame10.png",
        "/landing/carousel/frame11.png",
        "/landing/carousel/frame12.png",
        "/landing/carousel/frame13.png",
        "/landing/carousel/frame14.png",
        "/landing/carousel/frame15.png",
        "/landing/carousel/frame16.png",
        "/landing/carousel/frame18.png",
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
            duration: images.length * 5,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });


        return controls.stop;
    }, [xTranslation, width])

    return <div className="w-full h-[350px] hidden md:flex mt-10 overflow-x-hidden max-h-screen">
        <motion.div className="absolute left-0 overflow-x-hidden flex gap-2" ref={ref} style={{ x: xTranslation }}>
            {[...images, ...images].map((item, index) => (
                <div className="relative overflow-hidden h-[325px] min-w-[400px] flex justify-center items-center" key={index}>
                    <Image src={item} alt={`Carousel Image #${index}`} fill className="object-cover" priority={false} />
                </div>
            ))}
        </motion.div>

    </div>
}