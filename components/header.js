import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Heading = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: left;
    margin-top: 80px;
    @media (max-width: 390px) {
        font-size: 3rem;
        margin-top: 15px;
        min-width: 300px;
       }
`
const SubHeading = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    text-align: left;
    line-height: 2;
    @media (max-width: 390px) {
        margin-top: 20px;
        font-size: 1rem;
       }
`

const Button = styled.div`
    height: 50px;
    width: 140px;
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
        display: none;
      }
    }
  `;

export default function Header() {
    const router = useRouter();
    const handleProjects = () => {
        router.push('/casestudies')
    }

    return (
        <Grid>
            <div style={
                {
                    gridArea: 'a',
                }
            }>
                <></>
            </div>
            <div className={styles.fadeInLeft}>
                <Heading>
                    Hello, I&#39;m William Chu.
                </Heading>
                <SubHeading>
                    I&#39;m a
                    <span style={{ color: '#0BB4AA', fontWeight: '500' }}> UI/UX designer </span>
                    with a passion in layout and design. I aspire to improve user experience by communication through design.
                </SubHeading>
                <Button onClick={handleProjects}>SEE WORK</Button>
            </div>
        </Grid>
    )
}