"use client";
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
  type = "project",
  projectMockup = "/mockup.webp",
}: {
  title: string;
  roledescription?: string[];
  description: string;
  projectname: string;
  study?: boolean;
  link: string;
  number?: number;
  type?: string;
  projectMockup?: string;
}) {
  return (
    <div className="flex flex-col gap-12 w-full">
      <hr className={`h-1 bg-text ${number == 0 && "mt-2"}`} />
      <AnimatePresence>
        <motion.div
          className="flex flex-col gap-6 w-full"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="hidden md:flex justify-between w-full ">
            <Link href={link} className="hover:text-primary transition-all">
              <h3 className="font-medium text-3xl">{title}</h3>
            </Link>
            <BottomBorderTextHover href={link}>
              {study ? "VIEW CASE STUDY" : "VIEW DESIGN"}{" "}
              <span className="font-bold text-2xl">
                <MdArrowOutward />
              </span>
            </BottomBorderTextHover>
          </div>
          <Link href={link}>
            <BlurImage
              src={`${type == "project" ? "/projects" : "/graphics"}/${projectname}${projectMockup}`}
              alt={`Mockup design of the project ${title}`}
              height={1080}
              width={1920}
              className="w-full h-full transition-all"
            />
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-[35%_64.5%] gap-2 ">
            <Link
              href={link}
              className="hover:text-primary transition-all md:hidden justify-between inline-flex"
            >
              <h3 className="font-medium text-4xl">{title}</h3>
            </Link>
            <p className="text-accent text-balance font-heebo">
              {roledescription.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index != roledescription.length - 1 && ","}{" "}
                </span>
              ))}
            </p>
            <div className="flex justify-end flex-1 text-start">
              <p className="text-left md:text-justify self-end flex-1">
                {description}
              </p>
            </div>
            <div className="md:hidden mt-6">
              <BottomBorderTextHover href={link}>
                {study ? "VIEW CASE STUDY" : "VIEW DESIGN"}{" "}
                <span className="font-bold text-2xl">
                  <MdArrowOutward />
                </span>
              </BottomBorderTextHover>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
