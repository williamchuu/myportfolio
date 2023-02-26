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

    return (
        <div id="contact" ref={ref}>
            <H1 title="Let's Connect." />
            <p> why is this centered</p>
        </div>
    )
}