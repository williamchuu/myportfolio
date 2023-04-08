import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import styles from '../../styles/Home.module.css'
import Navbar2 from '../../components/navbar2'
import BackToTop from '../../components/backToTop'
import Link from 'next/link'
import BackToDesignProjects from '../../components/backToDesignProjects'
import Contact from '../../components/contact'

const Hr = styled.hr`
    margin-bottom: 100px;
    margin-top: 100px;
`

const Title = styled.h1`
    font-size: 4rem;
    color: #F1F6F6;
    span {
        font-size: 1.5rem;
        font-weight: 400;
    }
    @media (max-width: 430px) {
        font-size: 3rem;
        padding-bottom: 10px;
        padding-top: 20px;
    }   
`
const Info = styled.p`
    color: #F1F6F6;
    font-weight: 300;
    line-height: 2;
    @media (max-width: 430px) {
        padding: 0 30px 0 0;
    }   
`

const Text = styled.p`
    color: #F1F6F6;
    padding-bottom: 50px;
    line-height: 2;
    @media (max-width: 430px) {
        padding-top: 50px;
    }
    .span {
        color: red;
    }
`

const TheHeading = styled.h2`
    font-size: 1rem;
    color: #F1F6F6;
`

const Grid = styled.div`
    display: grid;
    padding-bottom: 50px;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas:
      "a b c";
    @media (max-width: 430px) {
        display: flex;
        flex-wrap: wrap;
    }
  `;

const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "a b"; 
    @media (max-width: 430px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "a"
            "b";
    }
    `

const Mockup = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
    padding-bottom: 100px;
    `

export default function BoyWithNoFace() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="Boy With No Face" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                <Title>The Boy With No Face</Title>
                <Grid>
                    <div style={
                        {
                            gridArea: 'a',
                        }
                    }>
                        <Info>Graphic Design</Info>
                        <Info>Illustration</Info>
                        <Info>Storytelling</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'b',
                        }
                    }>
                        <Info>Adobe Photoshop</Info>
                        <Info>Adobe InDesign</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'c',
                        }
                    }>
                        <Text>This is an online digital storybook that follows a boy embarking on a journey to find his face. He meets some friends along the way and discovers something new.</Text>
                        <Text>Read the story 
                            <Link href="https://indd.adobe.com/view/dca92a45-8423-4776-b782-fa007bcb309e" target="_blank"> <span style={{ color: '#7DC9FF'}}> here</span></Link>.</Text>
                    </div>
                </Grid>
                  <Mockup
                    src="/imgs/cover.png"
                    alt="Image of The Boy With No Face Cover"
                    width={2000} height={1000}
                    priority />
                <Grid2>
                    <TheHeading>ABOUT THE PROJECT</TheHeading>
                    <Text>This project is a showcase of my illustration skills, featuring a collection of hand-drawn illustrations created in a sketchy art style. The story took inspiration from a fairy tale written in a drama. I also made the storybook interactive to encourage young readers to enjoy reading. I've included a text-to-speech feature so that it can be more accessible to users who have trouble reading.</Text>
                </Grid2>
                <Hr />
                
                <TheHeading>STORYBOARD</TheHeading>
                <Text>coming soon</Text>
                <Hr />
                <Grid2>
                    <TheHeading>DRAWING THE ASSETS</TheHeading>
                    <Text>I went with a hand-drawn art style, which gives the book a playful and whimsical mood. The sketchy lines and rough coloring to provide a sense of familiarity to traditional children books. art style also helps to create a sense of warmth and approachability that is perfect for children.</Text>
                </Grid2>
                <Mockup src="/imgs/drawings.png"
                alt="The Boy With No Face concept art"
                height={1100} width={1100}></Mockup>
               <Hr />
               <BackToDesignProjects />
               <Contact />
               <BackToTop />
            </main>
        </>
    )
}