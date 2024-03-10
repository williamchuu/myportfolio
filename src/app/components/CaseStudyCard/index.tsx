"use client"
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import BottomBorderTextHover from "../BottomBorderTextHover";
import BlurImage from "../BlurImage";
export default function CaseStudyCard({
    title,
    roledescription = ["UI/UX Design"],
    description,
    projectname,
    study = true,
    link = "/",
    number,
}: {
    title: string,
    roledescription?: string[],
    description: string,
    projectname: string,
    study?: boolean,
    link: string,
    number?: number,
}) {


    return (
        <div className="flex flex-col gap-12 w-full">
            <hr className={`h-1 bg-text ${number == 0 && "mt-2"}`} />
            <AnimatePresence>
                <motion.div className="flex flex-col gap-6 w-full"
                    initial={{
                        opacity: 0, x: -50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, ease: "easeInOut", }}
                    viewport={{ once: true }}
                >
                    <div className="hidden md:flex justify-between w-full ">
                        <Link href={link} className="hover:text-primary transition-all">
                            <h3 className="font-medium text-3xl">{title}</h3>
                        </Link>
                        <BottomBorderTextHover href={link}>
                            {study ? "VIEW CASE STUDY" : "VIEW DESIGN"} <span className="font-bold text-2xl"><MdArrowOutward /></span>
                        </BottomBorderTextHover>
                    </div>
                    <Link href={link}>
                        <BlurImage src={`/projects/${projectname}/mockup.webp`} alt={`Mockup design of the project ${title}`} height={1080} width={1920} className="w-full h-full transition-all" />
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-[40%_59.5%] gap-2">
                        <Link href={link} className="hover:text-primary transition-all md:hidden justify-between inline-flex">
                            <h3 className="font-medium text-4xl">{title}</h3>
                        </Link>
                        <p className="text-accent text-balance font-heebo">{roledescription.map((tag, index) => (<span key={index}>{tag}{index != roledescription.length - 1 && ","} </span>))}</p>
                        <p className="text-pretty text-start">{description}</p>
                        <div className="md:hidden mt-6">
                            <BottomBorderTextHover href={link}>
                                {study ? "VIEW CASE STUDY" : "VIEW DESIGN"} <span className="font-bold text-2xl"><MdArrowOutward /></span>
                            </BottomBorderTextHover>
                            {/* <Link href={link} className="md:hidden w-auto border-b border-text inline-flex text-xl hover:text-primary hover:border-primary transition-all font-heebo">
                            {study ? "VIEW CASE STUDY" : "VIEW DESIGN"} <span className="pl-3  font-bold text-2xl"><MdArrowOutward /></span>
                        </Link> */}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div >
    )
}