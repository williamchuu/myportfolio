import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useTransform } from "framer-motion";
import H1 from '../components/h1';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Hr = styled.hr`
    margin-bottom: 100px;
    margin-top: 100px;
`

const Connect = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: white;
    text-align: left;
    padding-bottom: 10px; 
`
const ConnectCont = styled.div`
    padding-top: 100px;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
`

const SocialMediaImage = styled(Image)`
    width: 25px;
    height: 25px;
    margin: 10px 20px 20px 0;
    cursor: pointer;
    `
const Copyright = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: white;
    text-align: left;
    padding-top: 80px;
    `

export default function Contact() {

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

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/william-chu/', '_blank');
    }

    const handleGmail = () => {
        window.open('mailto:w.chu96@gmail.com', '_blank');
    }

    return (
        <div id="contact" ref={ref}>
            <Hr />
            <H1 title="Contact" />
            <ConnectCont
                visible={inView ? 'true' : undefined}
                animate={animation}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}>
                <Connect> Let&#39;s connect.</Connect>
                <SocialMediaImage onClick={handleLinkedIn} src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
                <Link href="mailto:w.chu96@gmail.com" target="_blank">
                    <SocialMediaImage src="/gmail.svg" alt="Gmail" width={50} height={30} />
                </Link>
                <Copyright>&#169; William Chu 2023</Copyright>
            </ConnectCont>
        </div>
    )
}