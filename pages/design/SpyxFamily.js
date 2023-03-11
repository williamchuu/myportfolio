import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Navbar2 from '../../components/navbar2'
import BackToTop from '../../components/backToTop'

export default function SpyxFamily() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="Spy x Family Poster" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                Hey! You're not supposed to see this yet. Come back later!
                <BackToTop />
            </main>
        </>
    )
}