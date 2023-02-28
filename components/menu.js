import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'
import { useRef, useState, useEffect } from 'react';
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
    height: 45vh;
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

export default function MenuView({ open, onClose }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <MenuToggleCont open={open}>
            <MenuToggleList>
                <ScrollLink onClick={onClose} to="about" smooth={true}><span>About</span></ScrollLink>
            </MenuToggleList>
            <Hr />
            <MenuToggleList>
                <ScrollLink onClick={onClose} to="casestudies" smooth={true}><span>Case Studies</span></ScrollLink>
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