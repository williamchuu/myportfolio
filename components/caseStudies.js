import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

const Hr = styled.hr`
margin-bottom: 100px;
`
const CaseStudyCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    // grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "a b c d"
    max-width: 100px;
    min-height: 500px;
    margin: auto;
 `

const Number = styled.div`
    color: white;
    font-size: 3rem;
    font-weight: 200;
`
const Roles = styled.div`
display: flex;
flex-direction: column;
`
const Role = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-top: 12px;
    margin-bottom: -10px;
`
const Project = styled.div``
const ProjectName = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: white;
`
const ProjectDate = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #5ABDB7;
    margin-bottom: 50px;
`
const ProjectDesc = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-right: 40px;
    line-height: 1.5;
`
const ViewCaseStudy = styled.div`
    font-weight: 500;
    font-size: 1rem;
    color: white;
    margin-top: 50px;
    cursor: pointer;
    span {
        border-bottom: 2px solid transparent;
      }
    
      &:hover span {
        border-bottom-color: #0BB4AA;
        color: #0BB4AA;
        img {
            content: url('/arrowGreen.svg');
        }
      }

`

const PreviewImage = styled(Image)`
    background-color: pink;
    width: 350px;
    height: 350px;
    `

export default function CaseStudy(props) {
    const {
        number,
        roles,
        projectName,
        projectDate,
        projectDesc,
        viewCaseStudy,
        previewImage
    } = props;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/casestudies/${projectName}`);
    };
    return (
        <>
            <div>
                <Hr />
                <CaseStudyCont>
                    <Number>{number}</Number>
                    <Roles>
                        {roles.map((role) => (
                            <Role key={role}>{role}</Role>
                        ))}
                    </Roles>
                    <Project>
                        <ProjectName>{projectName}</ProjectName>
                        <ProjectDate>{projectDate}</ProjectDate>
                        <ProjectDesc>{projectDesc}</ProjectDesc>
                        <ViewCaseStudy onClick={handleClick}>
                            <span>
                                {viewCaseStudy} <img src="/arrow.svg" />
                            </span>
                        </ViewCaseStudy>
                    </Project>
                    <PreviewImage src={previewImage} alt={projectName} width={350} height={350} />
                </CaseStudyCont>
            </div>
        </>
    );
}