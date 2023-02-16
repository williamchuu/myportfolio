import styled from 'styled-components'

const Heading = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: left;
    margin-top: 80px;
`
const SubHeading = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    text-align: left;
    line-height: 2;
`

const Button = styled.div`
    height: 50px;
    width: 140px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 15px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 300;
    `

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a b"
      "c d";
    @media (max-width: 768px) {
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

export default function Header(
) {
    return (
        <Grid>
            <div style={
                {
                    gridArea: 'a',
                }
            }>
                <></>
            </div>
            <div>
                <Heading>
                    Hello, I&#39;m William Chu.
                </Heading>
                <SubHeading>
                    I&#39;m a
                    <span style={{ color: '#0BB4AA', fontWeight: '500' }}> UI/UX designer </span>
                    with a passion in layout and design. I aspire to improve user experience by communication through design.
                </SubHeading>
                <Button>SEE WORK</Button>
            </div>
        </Grid>
    )
}