import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useTransform } from "framer-motion";

const Hr = styled.hr`
    margin-bottom: 100px;
    margin-top: 100px;
`
const DesignProjectsCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    // grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "a b c d"
    max-width: 100px;
    margin: auto;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
    @media (max-width: 820px) {
        grid-template-columns: 1fr 1fr
    }
    @media (max-width: 430px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
 `

const Number = styled.div`
    color: #F1F6F6;
    font-size: 3rem;
    font-weight: 200;
    @media (max-width: 820px) {
        display: none;
    }
`
const Roles = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 820px) {
        display: none;
    }
`
const Role = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-top: 12px;
    margin-bottom: -10px;
`
const Project = styled.div`

`
const ProjectName = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 10px;
    color: white;
    @media (max-width: 430px) {
        padding-top: 40px;
    }
`
const ProjectDate = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #7DC9FF;
    margin-bottom: 50px;
`
const ProjectDesc = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-right: 40px;
    line-height: 1.5;
`
const ViewProject = styled.div`
    font-weight: 500;
    font-size: 1rem;
    color: white;
    margin-top: 50px;
    max-width: 160px;
    cursor: pointer;
    span {
        border-bottom: 2px solid transparent;
      }
    
      &:hover span {
        border-bottom-color: #7DC9FF;
        color: #7DC9FF;
        img {
            content: url('/arrowGreen.svg');
            width: 12px; 
            height: 12px;
        }
      }

`

const PreviewImage = styled(Image)`
    width: 350px;
    height: 350px;
    border-radius: 10px;
    `

export default function DesignProject(props) {
    const {
        number,
        roles,
        projectName,
        projectDate,
        projectDesc,
        viewProject,
        previewImage,
        priority,
        projectWithSpace
    } = props;

    const router = useRouter();

    const handleClick = () => {
        // window.open(`http://wchu.ca/${projectName}`, "_blank");
        router.push(`/design/${projectWithSpace}`);
    };

    const [isAnimated, setIsAnimated] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
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
        <>
            <div id="designprojects" ref={ref}>
                <Hr />
                <DesignProjectsCont
                    visible={inView ? 'true' : undefined}
                    animate={animation}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                    }}>
                    <Number>{number}</Number>
                    <Roles>
                        {roles && roles.map((role) => (
                            <Role key={role}>{role}</Role>
                        ))}
                    </Roles>
                    <Project>
                        <ProjectName>{projectName}</ProjectName>
                        <ProjectDate>{projectDate}</ProjectDate>
                        <ProjectDesc>{projectDesc}</ProjectDesc>
                        <ViewProject onClick={handleClick}>
                            <span>
                                {viewProject} <img src="/arrow.svg" />
                            </span>
                        </ViewProject>
                    </Project>
                    <PreviewImage src={previewImage || "/imgs/igaq.png"} alt={projectName || "Project Preview Image"} width={350} height={350} priority={true} />
                </DesignProjectsCont>
            </div>
        </>
    );
}