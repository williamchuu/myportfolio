import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Hr = styled.hr`
    margin-bottom: 4px;
    width: 100%;
`

const MenuToggleCont = styled.ul`
    display: none;

@media screen and (max-width: 430px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #111111;
    min-height: 500px;
    line-height: 2;
    z-index: 99;
    padding: 2rem;
    transition: all 0.3s ease-in-out;
    }
`;

const MenuToggleList = styled.li`
  margin-bottom: 1rem;
  list-style: none;
  font-size: 1.2rem;
  padding-top: 1rem;
  color: white;
  cursor: pointer;
  span {
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s;
  }

  &:hover span {
    border-bottom-color: white;
  }
`;

const Copyright = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    color: gray;
    text-align: center;
    position: absolute;
    bottom: 20px; 
    left: 30px;
    `

export default function MenuView2({ open, onClose }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickAbout = () => {
        router.push('/about')
    }

    const handleClickCaseStudies = () => {
        router.push('/casestudies')
    }

    const handleClickDesignProjects = () => {
        router.push('/design')
    }

    return (
        <MenuToggleCont open={open}>
            <MenuToggleList onClick={handleClickAbout}><span>About</span>
            </MenuToggleList>
            <Hr />
            <MenuToggleList onClick={handleClickCaseStudies}><span>Case Studies</span>
            </MenuToggleList>
            <Hr />
            <MenuToggleList onClick={handleClickDesignProjects}><span>Designs</span>
            </MenuToggleList>
            <Hr />
            <MenuToggleList>
                <ScrollLink onClick={onClose} to="contact" smooth={true}><span>Contact</span></ScrollLink>
            </MenuToggleList>
            <Hr />
            <Copyright>&#169; William Chu</Copyright>

        </MenuToggleCont>
    )
}