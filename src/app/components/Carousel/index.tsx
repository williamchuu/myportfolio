"use client"
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useLayoutEffect } from "react";
import BlurImage from "../BlurImage";
export default function Carousel() {
    const images = [
        "/landing/carousel/boy.webp",
        "/landing/carousel/car.webp",
        "/landing/carousel/danbi.webp",
        "/landing/carousel/dashboard.webp",
        "/landing/carousel/drink.webp",
        "/landing/carousel/equip.webp",
        "/landing/carousel/foodie.webp",
        "/landing/carousel/igaq.webp",
        "/landing/carousel/igaq2.webp",
        "/landing/carousel/payflow.webp",
        "/landing/carousel/sharefood.webp",
        "/landing/carousel/spy.webp",
        "/landing/carousel/berries.webp",
        "/landing/carousel/penguin.webp",
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

    useLayoutEffect(() => {
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
    }, [xTranslation, width, images.length])

    return <section className="w-full h-80 hidden md:flex mt-16 overflow-x-hidden max-w-screen max-h-screen pointer-events-none">
        <motion.div className="absolute left-0 select-none overflow-x-hidden flex gap-2" ref={ref} style={{ x: xTranslation, }}>
            {[...images, ...images].map((item, index) => (
                <div className="relative overflow-hidden md:h-[18rem] md:min-w-[21rem] flex justify-center items-center" key={index}>
                    <BlurImage src={item} alt={`Carousel Image #${index}`} fill className="object-cover" priority={false} />
                </div>
            ))}
        </motion.div>

    </section>
}