"use client"
import Link from "next/link"
import { Link as Scroll } from "react-scroll"
import { useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navLinks = [
    { to: 'about', text: 'About' },
    { to: 'projects', text: 'Projects' },
    { to: 'contact', text: 'Contact' }
];

export default function NavBar({
    home = false,
}: {
    home?: boolean
}) {

    const { scrollY } = useScroll();
    const [ham, showHam] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        //@ts-ignore
        if (latest > previous && latest > 300) {
            setHidden(true);
            showHam(false);
        } else {
            setHidden(false);
        }
    })

    return (
      <>
        <motion.nav
          className="w-full fixed flex justify-between z-[2000] font-bold px-5 py-2 md:py-0 bg-bg"
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div className="w-full flex items-center justify-center">
            <div className="justify-between w-full flex max-w-default ">
              <div className="border-primary cursor-pointer grid place-items-center -ml-2 md:pl-0 ">
                {home ? (
                  <Scroll to="hero" className="" smooth={true} duration={1000}>
                    <Image
                      src="/logos/WC_Logo_White.svg"
                      width={175}
                      height={50}
                      alt="William Chu White Logo"
                      className="w-40 md:w-48"
                    />
                  </Scroll>
                ) : (
                  <Link
                    href="/"
                    className="flex items-center justify-center transition-all cursor-pointer "
                  >
                    <Image
                      src="/logos/WC_Logo_White.svg"
                      width={175}
                      height={45}
                      alt="William Chu White Logo"
                      className="w-40 md:w-48"
                    />
                  </Link>
                )}
              </div>
              <div className="hidden md:flex justify-center items-center md:gap-3 sm:gap-2 gap-1">
                {navLinks.map(({ to, text }) => (
                  home ? (
                    <Scroll
                      key={to}
                      smooth={true}
                      duration={1000}
                      to={to}
                      className="py-2 px-4 md:py-4 lg:px-6 transition-all cursor-pointer group"
                    >
                      <h3 className="group-hover:before:scale-x-100 group-hover:before:origin-left group-hover:text-primary relative before:w-full before:h-[3px] rounded before:origin-left before:transition-transform  before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:-bottom-1 font-normal transition-all">
                        {text}
                      </h3>
                    </Scroll>
                  ) : (
                    <Link
                      key={to}
                      href={`/#${to}`}
                      className="py-2 md:py-4 px-4 lg:px-6 transition-all cursor-pointer group"
                    >
                      <h3 className="group-hover:before:scale-x-100 group-hover:before:origin-left group-hover:text-primary relative before:w-full before:h-[3px] rounded before:origin-left before:transition-transform  before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:-bottom-1 font-normal transition-all">
                        {text}
                      </h3>
                    </Link>
                  )
                ))}
              </div>
              <div className="flex md:hidden flex-col">
                {ham && (
                  <IoClose
                    onClick={() => {
                      showHam(!ham);
                    }}
                    className="p-1 text-white text-4xl cursor-pointer transition-all"
                  />
                )}
                {!ham && (
                  <GiHamburgerMenu
                    onClick={() => {
                      showHam(!ham);
                    }}
                    className="p-1 text-white text-4xl cursor-pointer transition-all"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.nav>
        <AnimatePresence>
          {ham && (
            <motion.nav
              className="p-8 fixed bg-bg w-full flex flex-col text-heebo top-8 text-xl gap-2 z-[1000] border-primary md:hidden"
              initial={{ opacity: 0, y: "-110%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ ease: "easeInOut" }}
            >
              <li className="flex flex-col gap-5 w-full">
                {navLinks.map(({ to, text }) => (
                  <ul key={to} className="border-b py-2 w-full transition-all cursor-pointer hover:text-primary hover:border-primary">
                    {home ? (
                      <Scroll
                        smooth={true}
                        offset={-50}
                        duration={1000}
                        to={to}
                        className=""
                        onClick={() => showHam(false)}
                      >
                        <h2>{text}</h2>
                      </Scroll>
                    ) : (
                      <Link
                        href={`/#${to}`}
                        className="border-b py-2 w-full transition-all cursor-pointer hover:text-primary hover:border-primary"
                      >
                        <h2>{text}</h2>
                      </Link>
                    )}
                  </ul>
                ))}
                <p className="pt-40 text-accent text-md">© William Chu</p>
              </li>
            </motion.nav>
          )}
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className={`w-full fixed z-10 h-full bg-zinc-950 bg-opacity-30 ${ham ? "fixed" : "hidden"}`}
            onClick={() => {
              showHam(!ham);
            }}
          ></motion.div>
        </AnimatePresence>
      </>
    );
}