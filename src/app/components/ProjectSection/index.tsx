import Image from "next/image";
import Section from "../Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

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
  link,
  linkText
}: {
  title: string;
  paragraph?: string[];
  image?: string | any;
  projectname?: string;
  largeImage?: string | any;
  smallImage?: string | any;
  fullWidth?: boolean;
  solution?: {
    feature: string;
    solution: string;
  }[];
  wideImage?: string | any;
  botLine?: boolean;
  link?: string;
  linkText?: string;
}) {
  return (
    <>
      {fullWidth ? (
        <Section
          width="w-full"
          className="flex flex-col items-center"
          px="px-0"
        >
          <div className="px-5 w-full flex items-center justify-center">
            <div className="w-full max-w-default">
              <h3 className="font-bold text-2xl">{title}</h3>
            </div>
          </div>
          {largeImage && (
            <div className="w-full ">
              <Image
                src={largeImage && largeImage.asset 
                  ? urlFor(largeImage).width(1920).url()
                  : ''}
                width={1920}
                height={1080}
                className="w-full col-span-2"
                alt={`Image of ${projectname}`}
              />
            </div>
          )}
          {smallImage && (
            <div className="w-full grid place-items-center">
              <Image
                src={smallImage && smallImage.asset 
                  ? urlFor(smallImage).width(1920).url()
                  : ''}
                width={1920}
                height={1080}
                className="w-full md:max-w-4xl px-5 2xl:px-0 col-span-2 items-center"
                alt={`Image of ${projectname}`}
              />
            </div>
          )}
          <div className="w-full max-w-default px-5 md:px-0">
            <hr className="bg-text mt-12 " />
          </div>
        </Section>
      ) : (
        <>
          <Section grid gridClass botLine={botLine}>
            <h3 className="font-bold text-2xl">{title}</h3>
            {largeImage ? (
              <div className="w-full col-span-2 md:pt-10">
                <Image
                  src={largeImage && largeImage.asset 
                    ? urlFor(largeImage).width(1920).url()
                    : ''}
                  width={1920}
                  height={1080}
                  className="w-full"
                  alt={`Image of ${projectname}`}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {paragraph &&
                  paragraph.map((para, index) => (
                    <p key={index} className="text-pretty">
                      {para.split("*").map((text, i) =>
                        i % 2 === 1 ? (
                          <span className="font-medium" key={i}>
                            {text}
                          </span>
                        ) : (
                          text
                        )
                      )}
                    </p>
                  ))}
                {link && <Link target="_blank" href={link} className="w-max hover:before:scale-x-100 hover:before:origin-left hover:text-primary relative before:w-full before:h-[3px] before:rounded before:origin-left before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:-bottom-1 font-normal transition-all"> {linkText} </Link>}

                {solution && (
                  <>
                    <hr className="bg-text my-8" />
                    {solution.map(
                      (
                        solutionItem: { feature: string; solution: string },
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="grid grid-cols-[15%_85%] gap-2"
                        >
                          <div className="font-light text-xl">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="font-bold text-lg">
                              {solutionItem.feature}
                            </p>
                            <p>{solutionItem.solution}</p>
                          </div>
                        </div>
                      )
                    )}
                  </>
                )}
                {image && (
                  <Image
                    src={image && image.asset 
                      ? urlFor(image).width(1920).url()
                      : ''}
                    width={1920}
                    height={1080}
                    alt={`Image of ${projectname}`}
                  />
                )}
              </div>
            )}
          </Section>

          {wideImage && (
            <motion.div
              initial={{ x: -25, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={wideImage && wideImage.asset 
                  ? urlFor(wideImage).width(1920).url()
                  : ''}
                width={1920}
                height={1080}
                className="w-full "
                alt={`Image of ${projectname}`}
              />
            </motion.div>
          )}
        </>
      )}
    </>
  );
}
