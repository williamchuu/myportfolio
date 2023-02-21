import styled from 'styled-components'
import { useRouter } from 'next/router'

const NavbarCont = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
right: 0;
align-items: center;
justify-content: space-between;
padding: 0 20px;
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
color: white;
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
`

const Logo = styled.img`
height: 120px;
margin-left: 5rem;
width: 120px;
cursor: pointer;
@media (max-width: 820px) {
    margin-left: 3rem;
   }
`

export default function Navbar() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }
    const handleProjects = () => {
        router.push('/casestudies')
    }
    const handleContact = () => {
        router.push('/contact')
    }

    return (
        <NavbarCont>
            <Logo onClick={handleClick} src="/williamchu-01.svg" alt="logo" />
            <div>
                <NavLinks>
                    <NavLists onClick={handleProjects}><span>Case Studies</span></NavLists>
                    <NavLists onClick={handleContact}><span>Contact</span></NavLists>
                </NavLinks>
            </div>
        </NavbarCont>
    )
}