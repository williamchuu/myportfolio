import styled from 'styled-components';
import { useRouter } from 'next/router';

const BackToCaseStudiesCont = styled.div`
    display: flex;
    justify-content: center;
    `

const BackToCaseStudiesText = styled.p`
    color: #F1F6F6;
    font-size: 1.2rem;
    padding: 1rem 0rem;
    max-width: 220px;
    max-height: 60px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        span {
            border-bottom: 2px solid transparent;
            transition: border-bottom-color 0.3s;
          }
        
          &:hover span {
            border-bottom-color: #0BB4AA;
            color: #0BB4AA;
          }
    }

`

export default function BackToCaseStudies() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/casestudies')
    }
    return (
        <BackToCaseStudiesCont>
            <BackToCaseStudiesText onClick={handleClick}>
                <span>Back to Case Studies</span>
            </BackToCaseStudiesText>
        </BackToCaseStudiesCont>
    )
}