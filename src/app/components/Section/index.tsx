import React from "react"
export default function Section({
    children,
    title,
    content,
    className,
    width,
    bg,
    id,
    px,
    grid = false,
}: {
    children: React.ReactNode,
    title?: string,
    content?: string,
    className?: string,
    width?: string,
    bg?: string,
    id?: string,
    px?: string,
    grid?: boolean
}) {
    return (
        <section className={`flex flex-col ${px ? px : "px-5"} gap-12 py-10 lg:py-14 z-2 w-full items-center ${bg ? bg : ""}`} id={id}>
            <div className={`flex flex-col gap-12 z-2 ${width ? width : "max-w-7xl"} ${className ? className : " "}`}>
                {title && <div className={`flex gap-2 flex-col `}>
                    <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
                    {content && <h3 className="xt-primary text-4xl">{content}</h3>}
                </div>}
                {grid ? <div className="grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 w-full gap-12 md:gap-1">
                    {children}
                </div> :
                    <>
                        {children}
                    </>
                }
            </div>
        </section>
    )
}