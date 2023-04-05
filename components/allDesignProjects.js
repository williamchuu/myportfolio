import DesignProjects from '../components/designProjects'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useTransform } from "framer-motion";
import H1 from '../components/h1'
import Hr from '../components/caseStudies'
import Design from '../pages/design';

const DesignProjectsCont = styled.div`
margin-top: 200px;
`

export default function AllDesignProjects() {

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
        <div id="designs" ref={ref}>

            <DesignProjectsCont
                visible={inView ? 'true' : undefined}
                animate={animation}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}>
                <H1 title="Designs" />
                <DesignProjects
                    number="1"
                    roles={['Graphic Design', 'Photo Editing']}
                    projectName="Spy x Family"
                    projectDate="Dec 2022"
                    projectDesc="A live-action adaptation movie poster based on the manga series and anime Spy x Family."
                    viewProject="VIEW PROJECT"
                    previewImage="/imgs/spyxfamily_preview.png"
                    projectWithSpace="SpyxFamily">
                </DesignProjects>
                <DesignProjects
                    number="2"
                    roles={['Graphic Design', 'Illustration']}
                    projectName="The Boy With No Face"
                    projectDate="Dec 2022"
                    projectDesc="An online digital storybook with illustrations."
                    viewProject="VIEW PROJECT"
                    previewImage="/imgs/boywithnoface_preview.png"
                    projectWithSpace="BoyWithNoFace"
                >
                </DesignProjects>
            </DesignProjectsCont>
        </div>
    )
}