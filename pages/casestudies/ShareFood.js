import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import Navbar2 from '../../components/navbar2';
import loader from '../../public/IGAQ_loader.json';
import Lottie from 'lottie-react';
import BackToTop from '../../components/backToTop';
import BackToCaseStudies from '../../components/backToCaseStudies';
import Contact from '../../components/contact';

export default function ShareFood() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="I Got A Queery Case Study" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <h1 style={{ color: 'white' }}>This page is under construction. Please visit wchu.ca for the case study.</h1>
            </main>
        </>
    )
}

