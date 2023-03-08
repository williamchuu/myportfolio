import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import CaseStudies from '../components/caseStudies'
import { useState } from 'react';
import H1 from '../components/h1';

const inter = Inter({ subsets: ['latin'] })
export default function Projects() {

    return (
        <>
            <Head>
                <title>William Chu Projects</title>
                <meta name="description" content="William Chu Case Studies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <div>
                    <Navbar />
                    <H1 title="Case Studies" />
                    <div>
                        <CaseStudies
                            number="1"
                            roles={['UI/UX Designer', 'Graphic Designer']}
                            projectName="IGAQ"
                            projectDate="Sept &#8211; Dec 2022"
                            projectDesc="A safe space for the members of the LGBTQIA+ community to ask questions, share stories, and read resources about all things LGBTQIA+."
                            viewCaseStudy="VIEW CASE STUDY"
                            previewImage="/imgs/igaq.png">
                        </CaseStudies>
                    </div>
                    <div>
                        <CaseStudies
                            number="2"
                            roles={['UI/UX Designer']}
                            projectName="ShareFood"
                            projectDate="JAN &#8211; MAR 2022"
                            projectDesc="ShareFood is a web application that aims to save food by sharing it with others; whether receiving or giving away leftover foods."
                            viewCaseStudy="VIEW CASE STUDY"
                            previewImage="/imgs/sharefood.png"
                        >
                        </CaseStudies>
                    </div>
                    <div>
                        <CaseStudies
                            number="3"
                            roles={['UI/UX Designer']}
                            projectName="FoodieShare"
                            projectDate="JAN &#8211; MAR 2022"
                            projectDesc="FoodieShare is a food-based social media app where users can share their love of food with other locals."
                            viewCaseStudy="VIEW CASE STUDY"
                            previewImage="/imgs/foodieshare.png"
                        >
                        </CaseStudies>
                    </div>
                </div>
            </main>
        </>
    )
}
