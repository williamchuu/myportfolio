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
    padding-bottom: 100px;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
    @media (max-width: 820px) {
        padding-top: 40px;
       }
`

const AboutText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #F1F6F6;
    text-align: left;
    line-height: 2;
    padding-bottom: 20px;
    @media (max-width: 430px) {
        font-size: 1rem;
      }
`
const ImageCont = styled.div`
    display: flex;
    padding-top: 80px;
    // padding-left: 100px;
    @media (max-width: 820px) {
        padding-left: 0px;
        max-width: 100%;
      }
    `

const MeImage = styled(Image)`
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
    margin: auto;
    width: auto;
    height: 400px;
    @media (max-width: 820px) {
        margin: auto;
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a b";
    @media (max-width: 820px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "a"
        "b";
    }
    @media (max-width: 430px) {
       display: flex;
         flex-direction: column;
      }
  `;

const Button = styled.div`
  max-width: 180px;
  min-height: 50px;
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
      background-color: #0BB4AA;
      color: #2C2928;
      cursor: pointer;
      border: 2px solid #0BB4AA;
      transition: all 0.2s ease-in-out;
  }
`;
export default function About() {

    const [isAnimated, setIsAnimated] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.3,
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
                    <ImageCont>
                        <MeImage
                            visible={inView ? 'true' : undefined}
                            animate={animation}
                            initial="hidden"
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 },
                            }}
                            src="/laptop.svg"
                            alt="Illustration of a laptop, tablet and a cup of tea"
                            width={400} height={400} priority />
                    </ImageCont>
                </div>
                <div style={{
                    gridArea: 'b',

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
                            I graduated from BCIT with a diploma in
                            <span style={{ color: '#0BB4AA', fontWeight: '500' }}> Digital Design and Development </span>and a certificate in

                            <span style={{ color: '#0BB4AA', fontWeight: '500' }}> Communications Design Essentials</span>
                            . During my studies, I gained hands-on experience working on various projects, including designing mobile apps, creating brand identities, and developing websites. I also developed a love for simplicity and minimalism.
                        </AboutText>
                        <AboutText>
                            In my free time, you can find me at home drawing or playing video games.
                        </AboutText>
                        {/* <ScrollLink to="casestudies" smooth={true}>
                            <Button>
                                SEE WORK
                            </Button>
                        </ScrollLink> */}
                    </AboutCont>

                </div>
            </Grid>
        </div>
    )
}