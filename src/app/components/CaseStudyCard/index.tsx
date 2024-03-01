"use client"
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
export default function CaseStudyCard({
    title,
    tags = "UI/UX Design",
    description,
    projectname,
    study = true,
    link = "/",
}: {
    title: string,
    tags?: string,
    description: string,
    projectname: string,
    study?: boolean,
    link: string,

}) {


    return (
        <div className="flex flex-col gap-12 w-full">
            <hr className="h-1 bg-text " />
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
                            <h3 className="font-semibold text-4xl">{title}</h3>
                        </Link>
                        <Link href={link} className="border-b border-text  text-xl hover:text-primary gap-3 flex font-medium hover:border-primary transition-all font-heebo">
                            {study ? "VIEW CASE STUDY" : "VIEW DESIGN"} <span className="font-bold text-2xl"><MdArrowOutward/></span>
                        </Link>
                    </div>
                    <Link href={link}>
                        <Image src={`/projects/${projectname}/mockup.webp`} alt={`Mockup design of the project ${title}`} height={1080} width={1920} className="w-full h-full transition-all" />
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-[40%_59.5%] w-full gap-2">
                        <div className="md:hidden justify-between w-full ">
                            <h3 className="font-semibold text-4xl">{title}</h3>
                        </div>
                        <span className="text-accent text-balance font-heebo">{tags}</span>
                        <p className="text-pretty text-start md:text-end">{description}</p>
                        <div className="md:hidden mt-6">
                            <Link href={link} className="md:hidden w-auto border-b border-text inline-flex text-xl hover:text-primary hover:border-primary transition-all font-heebo">
                                {study ? "VIEW CASE STUDY" : "VIEW DESIGN"} <span className="pl-3  font-bold text-2xl"><MdArrowOutward/></span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}