"use client"
import Image from "next/image";
import { useState } from "react";

export default function BlurImage({
    src,
    width,
    height,
    alt,
    className,
    fill,
    priority,
    cover = true,
    uninteractive = false,
}: {
    src: string,
    width?: number,
    height?: number,
    alt: string,
    className?: string,
    fill?:boolean,
    priority?: boolean,
    cover?: boolean,
    uninteractive?: boolean,
}) {
    const [isloading, setIsLoading] = useState<boolean>(true);
    return <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={` ${className} ${isloading ? "blur-xl " : "blur-0 "} ${cover ? "" : "object-cover"}  transition-all duration-150 ${uninteractive ? 'pointer-events-none' : ''}`}
        onLoad={() => { setIsLoading(false) }}
        fill={fill}
        priority={priority}
    />
}