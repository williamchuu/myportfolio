"use client"
import Image from "next/image";
import Lottie from 'lottie-react';
import animation from "../../../../public/landing/logoAni.json"
import { useState } from "react";
import { motion } from "framer-motion"
export default function LoadingAnimation({
    onComplete,
    onClick
}: {
    onComplete?: () => void,
    onClick?: () => void,
}) {
    return <motion.section className={`h-[100dvh] z-[5000] w-full fixed grid place-content-center text-center bg-bg `} onClick={onClick} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="">
            <Lottie
                className={"w-full pt-16 md:pt-32 "}
                animationData={animation}
                loop={false}
                onComplete={onComplete}
            />
        </div>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: 1, ease: "easeInOut" }} exit={{}}
            className="text-accent pt-16 md:pt-32 cursor-pointer">Click anywhere to skip
            </motion.p>
    </motion.section>
}