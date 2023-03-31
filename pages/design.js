import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/navbar2'
import { useState } from 'react';
import H1 from '../components/h1';
import Contact from '../components/contact';
import AllDesignProjects from '../components/allDesignProjects'

const inter = Inter({ subsets: ['latin'] })
export default function Projects() {

    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="Design Projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <div>
                    <Navbar2 />
                    <AllDesignProjects />
                    <Contact />
                </div>
            </main>
        </>
    )
}
