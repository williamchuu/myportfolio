import CaseStudies from '../components/caseStudies'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useTransform } from "framer-motion";
import H1 from '../components/h1'

const Hr = styled.hr`
    margin-bottom: 100px;
    margin-top: 100px;
`

const CaseStudiesCont = styled.div`
`

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
        } else {
            setIsAnimated(false);
        }
    }, [inView]);
    return (
        <div id="casestudies" ref={ref}>

            <CaseStudiesCont
                visible={inView ? 'true' : undefined}
                animate={animation}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}>
                <H1 title="Case Studies" />
                <CaseStudies
                    number="1"
                    roles={['UI/UX Design', 'Graphic Design', 'Branding']}
                    projectName="IGAQ"
                    projectDate="SEPT &#8211; DEC 2022"
                    projectDesc="A safe space for the members of the LGBTQIA+ community to ask questions, share stories, and read resources about all things LGBTQIA+."
                    viewCaseStudy="VIEW CASE STUDY"
                    previewImage="/imgs/igaq_preview.png">
                </CaseStudies>
                <CaseStudies
                    number="2"
                    roles={['UI/UX Design']}
                    projectName="ShareFood"
                    projectDate="JAN &#8211; MAR 2022"
                    projectDesc="ShareFood is a web application that aims to save food by sharing it with others; whether receiving or giving away leftover foods."
                    viewCaseStudy="VIEW CASE STUDY"
                    previewImage="/imgs/sharefood_preview.png"
                >
                </CaseStudies>
                <CaseStudies
                    number="3"
                    roles={['UI/UX Design']}
                    projectName="FoodieShare"
                    projectDate="JAN &#8211; MAR 2022"
                    projectDesc="FoodieShare is a food-based social media app where users can share their love of food with other locals."
                    viewCaseStudy="VIEW CASE STUDY"
                    previewImage="/imgs/foodieshare_preview.png"
                >
                </CaseStudies>
            </CaseStudiesCont>
            <Hr />
        </div>
    )
}