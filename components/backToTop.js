import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Circle = styled.button`
  position: fixed;
  bottom: 50px;
  right: 80px;
  background-color: #272423;
  color: #fff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: solid 2px #fff;
  cursor: pointer;
  display: ${props => (props.isVisible ? "block" : "none")};

  i {
    margin-top: 2px;
  }

  &:hover {
    background-color: #3B3938;
  }
  `

const TopIcon = styled(Image)`
`

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Circle isVisible={isVisible} onClick={scrollToTop}>
            <TopIcon
                src="/top.svg"
                alt="Back To Top"
                width={20} height={20} />
        </Circle>
    )
}