import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import Navbar2 from '../../components/navbar2';
import loader from '../../public/IGAQ_loader.json';
import Lottie from 'lottie-react';

const Hr = styled.hr`
    margin-bottom: 100px;
    margin-top: 100px;
`

const Title = styled.h1`
    font-size: 4rem;
    color: #F1F6F6;
    line-height: 3;
    span {
        font-size: 1.5rem;
        font-weight: 400;
    }
`
const Info = styled.p`
    color: #F1F6F6;
    font-weight: 600;
    line-height: 2;
`

const Text = styled.p`
    color: #F1F6F6;
    padding-bottom: 50px;
    line-height: 2;
`

const Grid = styled.div`
    display: grid;
    padding-bottom: 200px;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas:
      "a b c";
    @media (max-width: 820px) {

    }
  `;

const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "a b"; 
    `

const IgaqWide = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
    padding-bottom: 100px;
`

const TheHeading = styled.h2`
    font-size: 1rem;
    color: #F1F6F6;
`

const DesignProcess = styled(Image)`
    align-self: center;
    width: auto;
    padding-top: 50px;
`

const Survey = styled(Image)`
`

const LogoCont = styled.div`
    padding-top: 100px;
`
const Logo = styled(Image)`
`

const PersonaCont = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 100px;
    justify-content: space-between;
`

const Personas = styled(Image)``

const UserMap = styled(Image)`
    padding-top: 100px;
`

export default function IGAQ() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="I Got A Queery Case Study" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                {/* <Lottie
                    animationData={loader}
                    loop={true}
                    style={{ width: '50%', height: '50%', position: 'absolute', top: '9%', left: '10%' }}
                /> */}
                <LogoCont>
                    <Logo src="/IGAQ_logo.svg" alt="IGAQ Logo" width={100} height={100} />
                </LogoCont>
                <Title>IGAQ <span>&#40;I Got A Queery&#41;</span> </Title>
                <Grid>
                    <div style={
                        {
                            gridArea: 'a',
                        }
                    }>
                        <Info>UI/UX Designer</Info>
                        <Info>Graphic Designer</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'b',
                        }
                    }>
                        <Info>Figma</Info>
                        <Info>Adobe Illustrator</Info>
                        <Info>Adobe After Effects</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'c',
                        }
                    }>
                        <Text>I worked with a team of 6 other talented designers and developers over the span of 3 months. I was involved in the entire design process &#8212; planning the concept, conducting user research, creating wireframes and prototypes, and implementing feedback. We focused on inclusiveness and accessibility to give more representation to the under appreciated.</Text>
                    </div>
                </Grid>
                <IgaqWide
                    src="/imgs/igaqWide.png"
                    alt="Display of I Got A Queery screens"
                    width={500} height={200}
                    priority />
                <Grid2>
                    <TheHeading>THE PROBLEM</TheHeading>
                    <Text>
                        Although the LGBTQIA+ community is getting more representation, there aren't many safe spaces for questioning or shy members. The top search results are mainly dating apps or public and broad search forums.
                        <br /><br />
                        The LGBTQIA+ community is also represented through Pride month, where proud LGBTQIA+ members celebrate their sexuality. There's a lack of representation of the members on the other side of the spectrum who have trouble accepting themselves.
                    </Text>
                </Grid2>
                <Hr />
                <Grid2>
                    <TheHeading>THE SOLUTION</TheHeading>
                    <Text>
                        The aim is to help facilitate a safe space for people to find comfort and explore their identities. Users can safely ask a Queery &#40;question&#41; or share a Story with like-minded users. There is also a library of curated LGBTQIA+ resources to help users learn more about their sexuality
                    </Text>
                </Grid2>
                <Hr />
                <TheHeading>DESIGN PROCESS</TheHeading>
                <DesignProcess
                    src="/designProcess.svg"
                    alt="The Design Process"
                    width={500} height={200}
                />
                <Hr />
                <Grid2>
                    <TheHeading>USER RESEARCH</TheHeading>
                    <Text>
                        Our target audience was more specific than just the LGBTQIA+ community; we narrowed it down even more. We interviewed several users between the age group of 16 to 30 year olds who identified as LGBTQIA+ and had them take a survey for us to better understand how we can create a safe space. The consensus was that users weren't completely open and didn't have a space to discuss LGBTQIA+ topics without being exposed to hate and homophobic comments.
                    </Text>
                    <Survey
                        src="/imgs/igaqSurvey.png"
                        alt="IGAQ Survey"
                        width={500} height={500} />
                    <Text> The survey helped me get a better understanding of my users and their main frustrations and goals. Sexuality can be a very personal topic. There are many external factors that contribute to a user&#39;s comfort level in their sexuality, such as family, religion, and education. The survey results were the base of my user research and served as the motivation and building blocks for designing IGAQ.</Text>
                </Grid2>
                <Hr />
                <TheHeading>PERSONAS</TheHeading>
                <PersonaCont>
                    <Personas src="/imgs/igaq_persona1.png" alt="IGAQ Primary Persona" width={570} height={2100} />
                    <Personas src="/imgs/igaq_persona2.png" alt="IGAQ Secondary Persona" width={570} height={2100} />
                </PersonaCont>
                <Hr />
                <TheHeading>USER JOURNEY MAP</TheHeading>
                <UserMap src="/imgs/igaq_userjourneymap.png" alt="IGAQ User Journey Map" width={1200} height={750} />
                <Hr />
                <TheHeading>WIREFRAMES</TheHeading>
                <TheHeading>STYLE GUIDE</TheHeading>
                <TheHeading>FINAL SCREENS</TheHeading>
                <TheHeading>FEEDBACK</TheHeading>
                <TheHeading>CONCLUSION</TheHeading>

            </main>
        </>
    )
}
