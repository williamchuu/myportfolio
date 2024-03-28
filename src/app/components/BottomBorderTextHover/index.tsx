import Link from "next/link";
import React from "react";

export default function BottomBorderTextHover({
    href,
    children
}: {
    href: string,
    children: React.ReactNode,
}) {
    return (
        <div className="group inline-flex hover:-translate-y-1 transition-all">
            <Link href={href} className="text-xl gap-3 inline-flex font-medium group-hover:before:scale-x-100 group-hover:before:origin-left group-hover:text-primary delay-150 relative before:w-full before:h-[3px] rounded before:origin-left before:transition-transform  before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:-bottom-1 transition-all font-heebo">
                {children}
            </Link>
        </div>
    )
}