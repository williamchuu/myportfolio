import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import Navbar2 from '../../components/navbar2';
import BackToTop from '../../components/backToTop';
import BackToCaseStudies from '../../components/backToCaseStudies';
import Contact from '../../components/contact';

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
    @media (max-width: 430px) {
        font-size: 3rem;
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
    line-height: 2em;
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

const ShareFoodWide = styled(Image)`
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
    max-width: 100%;
    height: auto;
    padding-top: 50px;
`

const LogoCont = styled.div`
    padding-top: 100px;
    @media (max-width: 430px) {
        padding-top: 50px;
    }
`
const Logo = styled(Image)`
    @media (max-width: 430px) {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        
    }
`

const PersonaCont = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 100px;
    justify-content: space-between;
    @media (max-width: 820px) {
        flex-direction: column;
    }
`

const UserMap = styled(Image)`
    padding-top: 100px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
`
const StyleGuideCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 430px) {
        flex-direction: column;
    }
`

const StyleGuide = styled(Image)`
    max-width: 100%;
    height: auto;
    padding: 100px 20px;
`

const LottieCont = styled.div`
    @media (max-width: 430px) {
        display: flex;
    }
`

export default function ShareFood() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="ShareFood Case Study" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                <BackToTop />
                <LogoCont>
                    <Logo src="/imgs/sharefood_logo.png" alt="ShareFood Logo" width={100} height={150} />
                </LogoCont>
                <Title>ShareFood </Title>
                <Grid>
                    <div style={
                        {
                            gridArea: 'a',
                        }
                    }>
                        <Info>UI/UX Designer</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'b',
                        }
                    }>
                        <Info>Figma</Info>
                        <Info>Adobe Illustrator</Info>
                    </div>
                    <div style={
                        {
                            gridArea: 'c',
                        }
                    }>
                        <Text>This was a 3-person project to create a web app that would encourage users to reduce the amount of food that goes to waste. Throughout the design process, I was involved with conducting user research, creating user flows, designing wireframes and prototypes, and front-end development.</Text>
                    </div>
                </Grid>
                <ShareFoodWide
                    src="/imgs/sharefoodWide.png"
                    alt="Display of ShareFood screens"
                    width={1500} height={1000}
                    priority />
                <Grid2>
                    <TheHeading>THE PROBLEM</TheHeading>
                    <Text>
                        People tend to overestimate how much they purchase in grocery stores. A lot of food goes to waste, contributing to environmental issues. Additionally, grocery trips aren’t always accessible to everyone, especially to those who lack reliable transportation or are bound to wheelchairs.
                    </Text>
                </Grid2>
                <Hr />
                <Grid2>
                    <TheHeading>THE SOLUTION</TheHeading>
                    <Text>
                        Our solution was to promote donating excess food to someone locally. This way, those looking for food can get it closer to them and there would be less food going to waste. By using ShareFood, users can search for food in a fun and unique way by using a Tinder-like swipe function.
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
                <TheHeading>SITE MAP</TheHeading>
                <UserMap src="/imgs/sharefood_sitemap.png" alt="Site map for ShareFood" width={1200} height={750} />
                <Hr />
                <TheHeading>WIREFRAMES</TheHeading>
                <UserMap src="/imgs/sharefood_wireframe.png" alt="ShareFood Wireframes" width={1200} height={750} />
                <Hr />
                <TheHeading>STYLE GUIDE</TheHeading>
                <StyleGuideCont>
                    <StyleGuide src="/imgs/sharefood_color.png" alt="ShareFood Color Guide" width={430} height={450} />
                    <StyleGuide src="/imgs/sharefood_typography.png" alt="ShareFood Typography Guide" width={430} height={450} />
                </StyleGuideCont>
                <Hr />
                <TheHeading>FINAL SCREENS</TheHeading>
                <UserMap src="/imgs/sharefood.png" alt="ShareFood Screens" width={1200} height={750} />
                <Hr />
                <Grid2>
                    <TheHeading>FEEDBACK</TheHeading>
                    <Text>After our initial usability test, we found that some users were confused about the navigation of the app. The swipe function was foreign to users looking for food and the original “Check” and “X” buttons were confusing. Although there was a tutorial screen on how to use the app, most users skipped the tutorial and went straight into the app. We had to change the icons of our buttons several times until our UI felt intuitive. This was one of the main challenges of our design because a functional app means nothing if your users don’t understand it.</Text>
                </Grid2>
                <Hr />
                <Grid2>
                    <TheHeading>CONCLUSION</TheHeading>
                    <Text>As one of my earliest projects, I have learned a lot about the design process. I experienced first-hand how it is not linear and that there will be lots of back and forth between ideating, designing, and testing. This project was especially challenging because as a 3-member team, I was also involved with front-end development. I will be forever grateful for this project because it serves as the stepping stone of my journey in becoming a UI/UX designer.</Text>
                </Grid2>
                <Hr />
                <BackToCaseStudies />
                <Contact />

            </main>
        </>
    )
}
