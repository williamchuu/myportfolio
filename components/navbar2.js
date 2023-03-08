import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link'
import MenuView from '../components/menu';
import { Link as ScrollLink } from 'react-scroll'

const NavbarCont = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
right: 0;
align-items: center;
justify-content: space-between;
padding: 0 10rem;
width: 100%;
height: 60px;
z-index: 999;
background-color: #272423;

@media (max-width: 820px) {
   padding: 0px;
  }
`

const NavLinks = styled.ul`
display: flex;
flex-direction: row;
list-style: none;
`

const NavLists = styled.li`
margin-right: 5rem;
color: #F1F6F6;
cursor: pointer;
span {
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s;
  }

  &:hover span {
    border-bottom-color: white;
  }
  @media (max-width: 820px) {
    margin-right: 2rem;
   }
    @media (max-width: 460px) {
        display: none;
    }
`

const Logo = styled.img`
height: 130px;
margin-left: 5rem;
width: 130px;
cursor: pointer;
@media (max-width: 820px) {
    margin-left: 3rem;
   }
`

const MenuButton = styled.button`
display: none;

@media screen and (max-width: 460px) {
    display: block;
    background-color: transparent;
    // background-color: red;
    cursor: pointer;
    border: none;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 40px;
    top: 10px;
  }
`;

const Menu = styled(Image)`
  cursor: pointer;
  `

//   hamburger menu 


export default function Navbar({ open, setOpen }) {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleClickAbout = () => {
        router.push('/')
    }
    const handleCaseStudiesClick = () => {
        router.push('/casestudies')
    }
    const handleClickContact = () => {
        router.push('/')
    }
    return (
        <NavbarCont>
            <Logo onClick={handleClick} src="/williamchu-01.svg" alt="logo" />
            <div>
                <NavLinks>
                    <NavLists onClick={handleClickAbout}>
                        <span>About</span>
                    </NavLists>
                    <NavLists onClick={handleCaseStudiesClick}>
                        <span>Case Studies</span>
                    </NavLists>
                    <NavLists onClick={handleClickContact}>
                        <span>Contact</span>
                    </NavLists>
                </NavLinks>
                <nav>
                    <MenuButton onClick={handleMenuClick}>
                        {menuOpen ? (
                            <Image src="/x-icon.svg" alt="Close Icon" width={20} height={20} />
                        ) : (
                            <Image src="/menu.svg" alt="Menu Icon" width={20} height={20} />
                        )}
                    </MenuButton>
                    <MenuView onClose={closeMenu} open={menuOpen} />
                </nav>

            </div>
        </NavbarCont>
    )
}