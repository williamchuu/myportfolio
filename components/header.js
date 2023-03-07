import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import H1 from '../components/h1';
import Image from 'next/image';

const Heading = styled.h1`
    font-size: 4rem;
    color: #F1F6F6;
    text-align: left;
    margin-top: 100px;
    @media (max-width: 430px) {
        font-size: 3rem;
        margin-top: 160px;
        min-width: 300px;
       }
`
const SubHeading = styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
    color: #F1F6F6;
    text-align: left;
    line-height: 2;
    padding-bottom: 20px;
    @media (max-width: 430px) {
        margin-top: 20px;
        font-size: 1.2rem;
       }
`

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

const Grid = styled.div`
    display: grid;
    padding-bottom: 200px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "a b";
    @media (max-width: 820px) {
        padding-bottom: 100px;
      grid-template-columns: 1fr;
      grid-template-areas:
        "b"
      .a {
        display: none;
      }
    }
  `;


const ImageCont = styled.div`
    display: flex;
    `
const Me = styled(Image)`
    transition: transform 0.3s ease-in-out;
    margin: auto;
    width: auto;
    height: auto;
    margin-top: 100px;
    @media (max-width: 820px) {
        display: none;
      }
    @media (max-width: 430px) {
        display: none;
      }
    &:hover {
        transform: scale(1.1);
        content: url('/placeholder.svg');
      }
`
const MeHover = styled(Me)`
  &:hover {
    // transform: scale(1.1);
    // background-color: red;
  }
`;

export default function Header() {


    return (
        <Grid>
            <div style={
                {
                    gridArea: 'a',
                }
            }>
                <ImageCont>
                    <MeHover
                        src="/me.svg"
                        alt="Illustration of William"
                        width={400} height={400} />
                </ImageCont>
            </div>
            <div style={
                {
                    gridArea: 'b',
                }
            }>
                <Heading className={styles.fadeInLeft}>
                    Hello, I&#39;m <br />William Chu.
                </Heading>
                <SubHeading className={styles.fadeInLeft2}>
                    I am a
                    <span style={{ color: '#0BB4AA', fontWeight: '500' }}> UI/UX designer </span>
                    with a passion in layout and design. I improve user experience through communication by design.
                    Check out some of my work below.
                </SubHeading>
                <ScrollLink to="casestudies" smooth={true}>
                    <Button className={styles.fadeInLeft3}>
                        SEE WORK
                    </Button>
                </ScrollLink>
            </div>
        </Grid>
    )
}