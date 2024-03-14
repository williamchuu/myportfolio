import Image from "next/image"
import Section from "../Section"
import { motion } from "framer-motion"
export default function ProjectSection({
    title,
    paragraph,
    image,
    projectname,
    largeImage,
    fullWidth,
    smallImage,
    solution,
    wideImage,
    botLine = true,
    sitemap,
}: {
    title: string,
    paragraph?: string[],
    image?: string,
    projectname?: string,
    largeImage?: string,
    smallImage?: string,
    fullWidth?: boolean,
    solution?: any,
    wideImage?: string,
    botLine?: boolean,
    sitemap?: boolean,
}) {
    return <>
        {fullWidth ?
            <Section width="w-full" className="flex flex-col items-center" px="px-0">
                <div className="px-5 w-full flex items-center justify-center">
                    <div className="w-full max-w-7xl">
                        <h3 className="font-bold text-2xl">{title}</h3>
                    </div>
                </div>
                {largeImage && <div className="w-full ">
                    <Image src={`/projects/${projectname}${largeImage}`} width={1920} height={1080} className="w-full col-span-2" alt={`Image of ${projectname}`} />
                </div>}
                {smallImage && <div className="w-full grid place-items-center">
                    <Image src={`/projects/${projectname}${smallImage}`} width={1920} height={1080} className="w-full md:max-w-4xl px-5 2xl:px-0 col-span-2 items-center" alt={`Image of ${projectname}`} />
                </div>}
                <div className="w-full max-w-7xl px-5 md:px-0">
                    <hr className="bg-text mt-12 " />
                </div>
            </Section>
            :
            <>
                <Section grid gridClass botLine={botLine}>
                    <h3 className="font-bold text-2xl">{title}</h3>
                    {largeImage ? <div className="w-full col-span-2 md:pt-10">
                        <Image src={`/projects/${projectname}${largeImage}`} width={1920} height={1080} className="w-full" alt={`Image of ${projectname}`} />
                    </div> :
                        <div className="flex flex-col gap-8">
                            {paragraph && paragraph.map((para, index) => (<p key={index} className="text-pretty">{para}</p>))}
                            {solution &&
                                <>
                                    <hr className="bg-text my-8" />
                                    {solution?.solutions.map((solutions: any, index: number) => (
                                        <div key={index} className="grid grid-cols-[15%_85%] gap-2">
                                            <div className="font-light text-xl">
                                                0{index + 1}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="font-bold text-lg">{solutions.feature}</p>
                                                <p className="">{solutions.solution}</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }
                            {image && <Image src={`/projects/${projectname}${image}`} width={1920} height={1080} alt={`Image of ${projectname}`} />}
                        </div>
                    }
                </Section>
                
                {wideImage && <motion.div
                    initial={{ x: -25, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                    viewport={{ once: true }}>
                    <Image src={`/projects/${projectname}${wideImage}`} width={1920} height={1080} className="w-full " alt={`Image of ${projectname}`} />
                </motion.div>
                }
            </>
        }
    </>
}