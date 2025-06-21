"use client"
import React from "react"
import { motion } from "framer-motion"
export default function Section({
    children,
    title,
    className,
    width,
    bg,
    id,
    px,
    grid = false,
    heading,
    header,
    botLine,
    topLine,
    gridClass,
    subtitle,
    subheading
}: {
    children: React.ReactNode,
    title?: string,
    className?: string,
    width?: string,
    bg?: string,
    id?: string,
    px?: string,
    grid?: boolean,
    heading?: string,
    botLine?: boolean,
    topLine?: boolean,
    gridClass?: boolean,
    subtitle?: string,
    header?: boolean,
        subheading?: string
}) {

    return (
        <motion.section className={`flex flex-col ${px ? px : "px-5"} gap-12 py-10 lg:py-14 z-2 w-full items-center ${bg ? bg : ""}`} id={id}
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            viewport={{ once: true }}
        >
            <div className={`flex flex-col gap-8 md:gap-12 w-full z-2 ${width ? width : "max-w-default"} ${className ? className : " "}`}>
                {title && 
                <>
                <div className={`flex gap-4 items-end `}>
                    <>
                        {header ?
                            <>
                                <h1 className="text-5xl md:text-6xl font-medium">{title}</h1>
                                {heading && <h3 className="text-xl sm:text-2xl text-accent font-light align-bottom">({heading})</h3>}
                                
                            </>
                            :
                            <>
                                <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
                            </>
                        }
                        
                    </>
                    
                </div>
                    {subheading && <p className="-mt-8 mb-5 text-pretty">{subheading}</p>}

                        </>
                    }
                {subtitle &&
                    <h3 className="text-2xl sm:text-3xl font-medium">{subtitle}</h3>
                }

                {topLine && <hr className="w-full bg-text" />}
                {grid ? <div className={`grid md:place-items-start grid-cols-1 ${gridClass ? "md:grid-cols-[25%_75%]" : "md:grid-cols-2"} w-full gap-8 md:gap-2`}>
                    {children}
                </div> :
                    <>
                        {children}
                    </>
                }
                {botLine && <hr className="w-full bg-text mt-12" />}
            </div>
        </motion.section>
    )
}