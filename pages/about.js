import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Heading from '../components/header'
import Navbar2 from '../components/navbar2'
import animation from '../public/logoAni2.json';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import AllCaseStudies from '../components/allCaseStudies'
import H1 from '../components/h1'
import About from '../components/about'
import Contact from '../components/contact'
import BackToTop from '../components/backToTop'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {



    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="William Chu Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                <About />
                <AllCaseStudies />
                <Contact />
            </main>
        </>
    )
}