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
import PropTypes from 'prop-types';

const AboutCont = styled.div`
    padding-top: 100px;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
`

const AboutText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
    text-align: left;
    line-height: 2;
    padding-bottom: 20px;
`
const ImageCont = styled.div`
    display: flex;
    padding-top: 20px;
    padding-left: 200px;
    `

const MeImage = styled(Image)`
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a b"
      "c d";
    @media (max-width: 820px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "b"
        "c";
      .a {
        // display: none;
      }
    }
  `;

const Button = styled.div`
    height: 50px;
    width: 180px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 15px;
    color: white;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    &:hover {
        background-color: white;
        color: #2C2928;
        cursor: pointer;
      }
    `
export default function About() {

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
        <div id="about" ref={ref}>
            <H1 title="About" />
            <Grid>
                <div style={{
                    gridArea: 'a',
                }
                }>
                    <AboutCont
                        visible={inView ? 'true' : undefined}
                        animate={animation}
                        initial="hidden"
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 },
                        }}>
                        <AboutText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </AboutText>
                        <ScrollLink to="casestudies" smooth={true}>
                            <Button>
                                SEE WORK
                            </Button>
                        </ScrollLink>
                    </AboutCont>
                </div>
                <div style={{
                    gridArea: 'b',

                }
                }>
                    <ImageCont>
                        <MeImage
                            visible={inView ? 'true' : undefined}
                            animate={animation}
                            initial="hidden"
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 },
                            }}
                            src="/me.svg"
                            alt="Illustration of William"
                            width={400} height={400} />
                    </ImageCont>
                </div>
            </Grid>
        </div>
    )
}