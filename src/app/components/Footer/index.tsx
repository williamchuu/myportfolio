"use client"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import Section from "../Section"
import { MdEmail } from "react-icons/md";
export default function Footer({
    active,
    mode,
    home = false,
}: {
    active?: number,
    home?: boolean
    mode?: string
}) {

    return (
        <Section title="Let's connect." id="contact">
            <div className="flex gap-8">
                <Link href="https://www.linkedin.com/in/william-chu/" target="__blank" passHref>
                    <FaLinkedin className="text-4xl hover:text-primary transition-all hover:drop-shadow-primary" aria-label="Click to Open William Chu Linkedin" />
                </Link>
                <Link href="mailto:w.chu96@gmail.com" target="__blank" passHref>
                    <MdEmail className="text-4xl hover:text-primary transition-all hover:drop-shadow-primary" aria-label="Click to email William Chu"/>
                </Link>
            </div>
            <div className="flex gap-1 flex-col">
                <p className="pt-48">Developed by <Link href="https://philiph.me" target="__blank" className="hover:text-primary transition-all">Philip Ho</Link></p>
                <p className="">© William Chu</p>
            </div>
        </Section>
    )
}