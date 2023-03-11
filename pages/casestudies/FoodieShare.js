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
        width: 100%;
        max-height: auto;
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

const Personas = styled(Image)`
    max-width: 100%;
    height: auto;
    display: block;
    padding: 10px;
`

const UserMap = styled(Image)`
    padding-top: 100px;
    max-width: 100%;
    height: auto;
`
const StyleGuideCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 430px) {
        flex-direction: column;
    }
`

const StyleGuide = styled(Image)`
    max-width: 100%;
    height: auto;
    padding: 100px 20px;
`


export default function FoodieShare() {
    return (
        <>
            <Head>
                <title>William Chu</title>
                <meta name="description" content="FoodieShare Case Study" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="faviconLight.svg" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="faviconDark.svg" media="(prefers-color-scheme: light)" />
            </Head>
            <main className={styles.main}>
                <Navbar2 />
                <BackToTop />
                <LogoCont>
                    <Logo src="/foodieshare_logo.svg" alt="FoodieShare Logo" width={150} height={200} />
                </LogoCont>
                <Title>FoodieShare </Title>
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
                        <Text>This project was developed by a team of 4 designers and 3 developers. My team wanted to create a social media app dedicated to Foodies everywhere. We wanted to combine everything we love about social media and food into one app. Working as a UI/UX Designer, I was involved in user research, wireframing and prototyping. After several sessions of usability testing and implementing feedback, we handed in our assets to our developer team to start coding.</Text>
                    </div>
                </Grid>
                <ShareFoodWide
                    src="/imgs/foodieshareWide.png"
                    alt="Display of FoodieShare screens"
                    width={500} height={200}
                    priority />
                <Grid2>
                    <TheHeading>THE PROBLEM</TheHeading>
                    <Text>
                        During the pandemic, restaurants relied on making deliveries in order to stay in business, but how will foodies find new restaurants to support? There are already social media apps where people can share pictures. There are also apps that review restaurants. However, there currently isn’t a one-stop solution for foodies to find restaurants, order food, and share recommendations all in one place.
                    </Text>
                </Grid2>
                <Hr />
                <Grid2>
                    <TheHeading>THE SOLUTION</TheHeading>
                    <Text>
                        FoodieShare does exactly just that&#8212;share your favorite food places, order food, or check out reviews on nearby restaurants. By combining social media with the love of food, we wanted to support food enthusiasts and restaurants by providing a platform that brings them together.
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
                        We started our user research by interviewing several participants and had them fill out an online survey. The survey asked questions regarding their time spent using social media, going out to eat, or engaging with others online. The survey also went into detail such as asking what specific features the participants liked or disliked on an app. We found that most users opened their preferred social media apps to check on news and updates or just to pass time. With further research on the users’ pain points regarding using social media apps, we discovered that some participants used multiple platforms just to find a restaurant that they were willing to try out.
                    </Text>
                </Grid2>
                <Hr />
                <Grid2>
                    <TheHeading>PERSONA</TheHeading>
                    {/* <PersonaCont> */}
                    <Personas src="/imgs/foodieshare_persona.png" alt="FoodieeShare Primary Persona" width={570} height={2100} />
                    {/* </PersonaCont> */}
                </Grid2>
                <Hr />
                <TheHeading>USER JOURNEY MAP FRAMEWORK</TheHeading>
                <UserMap src="/imgs/foodieshare_userjourney.png" alt="User Story Map Framework for FoodieShare" width={1200} height={750} />
                <Hr />
                <TheHeading>WIREFRAMES</TheHeading>
                <UserMap src="/imgs/foodieshare_wireframe.png" alt="FoodieShare Wireframes" width={1200} height={750} />
                <Hr />
                <TheHeading>STYLE GUIDE</TheHeading>
                <StyleGuideCont>
                    <StyleGuide src="/imgs/foodieshare_color.png" alt="FoodieShare Color Guide" width={500} height={450} />
                    <StyleGuide src="/imgs/foodieshare_typography.png" alt="FoodieShare Typography Guide" width={430} height={450} />
                </StyleGuideCont>
                <Hr />
                <TheHeading>FINAL SCREENS</TheHeading>
                <UserMap src="/imgs/foodieshare.png" alt="FoodieShare Screens" width={1200} height={750} />
                <Hr />
                <Grid2>
                    <TheHeading>FEEDBACK</TheHeading>
                    <Text>We conducted our user testing and found that many participants thought, although our app was easy to navigate through, FoodieShare was very similar to Instagram. To make our app stand out, we realized that we needed to focus on a unique feature that would incentivize users to use FoodieShare. After some consideration, we decided to promote the reviewing and searching for food aspect of the app. This way, our app will do something unique on top of sharing pictures of food.</Text>
                </Grid2>
                <Hr />
                <Grid2>
                    <TheHeading>CONCLUSION</TheHeading>
                    <Text>It was difficult coming up with an idea for a social media app when it seemed like everything already existed. Our team definitely had to take a few steps back to remember the importance of identifying a unique angle and focusing on solving a specific problem for our target audience. It was a valuable experience having to go back to the ideation step of the design process multiple times before having a well-designed product.</Text>
                </Grid2>
                <Hr />
                <BackToCaseStudies />
                <Contact />

            </main>
        </>
    )
}
