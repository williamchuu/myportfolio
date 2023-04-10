import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import Navbar2 from '../../components/navbar2';
import BackToTop from '../../components/backToTop';
import BackToDesignProjects from '../../components/backToDesignProjects';
import Contact from '../../components/contact';

const Hr = styled.hr`
    margin-bottom: 100px;
    margin-top: 100px;
`

const Title = styled.h1`
    font-size: 4rem;
    padding-bottom: 90px;
    color: #F1F6F6;
    span {
        font-size: 1.5rem;
        font-weight: 400;
    }
    @media (max-width: 430px) {
        font-size: 3rem;
        padding-bottom: 50px;
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

const TheHeading = styled.h2`
    font-size: 1rem;
    color: #F1F6F6;
`

const OriginalImage = styled(Image)`
    align-self: center;
    max-width: 100%;
    height: auto;
    padding-top: 50px;
`

const PosterCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 820px) {
        flex-direction: column;
    }
`

const Poster = styled(Image)`
    max-width: 100%;
    height: auto;
    display: block;
`

const OriginalImagesCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 50px;
    padding-right: 50px;
    @media (max-width: 820px) {
        flex-direction: column;
    }
    `

export default function IGAQ() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="Spy x Family Poster" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                <BackToTop />
                <Title>Spy x Family</Title>
                <Grid>
                    <div style={
                        {
                            gridArea: 'a',
                        }
                    }>
                        <Info>Graphic Design</Info>
                        <Info>Photo Editing</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'b',
                        }
                    }>
                        <Info>Adobe Photoshop</Info>
                        <Info>Adobe Illustrator</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'c',
                        }
                    }>
                        <Text>This is a live-action movie poster for the popular anime and manga series Spy x Family. The concept was inspired by the original story but with a more action-packed tone.</Text>
                    </div>
                </Grid>
                <Mockup
                    src="/imgs/busAdMockup.png"
                    alt="Image of the Spy x Family Live Action Poster"
                    width={2000} height={1000}
                    priority />
                <Grid2>
                    <TheHeading>ABOUT THE PROJECT</TheHeading>
                    <Text>The idea was to capture the iconic essence of the anime while exaggerating a more live-action spy genre. The color palette is taken from the anime for familiarity, while the bold typography is used to complement the dramatic scenery to create suspense and excitement.</Text>
                </Grid2>
                <Hr />
                <TheHeading>ORIGINAL IMAGES</TheHeading>
                <OriginalImagesCont>
                    <OriginalImage
                        src="/imgs/anya.png"
                        alt="Image of a cosplayer dressed as Anya from Spy x Family"
                        width={250} height={300}
                        priority />
                    <OriginalImage
                        src="/imgs/loid.png"
                        alt="Image of a man in a suit"
                        width={250} height={300}
                        priority />
                    <OriginalImage
                        src="/imgs/yor.png"
                        alt="Image of a woman in a black dress"
                        width={250} height={300}
                        priority />
                </OriginalImagesCont>
                <Hr />
                <Grid2>
                    <TheHeading>FINAL OUTCOME</TheHeading>
                    <PosterCont>
                        <Poster
                            src="/imgs/spy_x_family_poster.jpg"
                            alt="Image of the Spy x Family Live Action Poster"
                            width={500} height={200}
                            priority />
                    </PosterCont>
                </Grid2>
                <Hr />
                <BackToDesignProjects />
                <Contact />

            </main>
        </>
    )
}
