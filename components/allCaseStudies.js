import CaseStudies from '../components/caseStudies'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useTransform } from "framer-motion";
import H1 from '../components/h1'

const CaseStudiesCont = styled.div``

export default function AllCaseStudies() {

    const [isAnimated, setIsAnimated] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            setIsAnimated(true);
        }
    }, [inView]);
    return (
        <div id="casestudies" ref={ref}>

            <CaseStudiesCont
                isVisible={inView}
                animate={animation}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}>
                <H1 title="Case Studies" />
                <CaseStudies
                    number="1"
                    roles={['UI/UX Designer', 'Graphic Designer']}
                    projectName="IGAQ"
                    projectDate="Sept &#8211; Dec 2022"
                    projectDesc="A safe space for the members of the LGBTQIA+ community to ask questions, share stories, and read resources about all things LGBTQIA+."
                    viewCaseStudy="VIEW CASE STUDY"
                    previewImage="/imgs/igaq.png">
                </CaseStudies>
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
            </CaseStudiesCont>
        </div>
    )
}