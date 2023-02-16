import styled from 'styled-components'

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
background-color: #2C2928;
`

const NavLinks = styled.ul`
display: flex;
flex-direction: row;
// background-color: red;
list-style: none;
`

const NavLists = styled.li`
margin-right: 5rem;
`

export default function Navbar() {
    return (
        <NavbarCont>
            <div>logo</div>
            <div>
                <NavLinks>
                    <NavLists>projects</NavLists>
                    <NavLists>contact</NavLists>
                </NavLinks>
            </div>
        </NavbarCont>
    )
}