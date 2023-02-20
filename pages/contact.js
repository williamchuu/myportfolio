import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
export default function Projects() {

    return (
        <>
            <Head>
                <title>William Chu Contact</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <div>
                    <Navbar />
                    contact page &#128039;
                </div>
            </main>
        </>
    )
}
