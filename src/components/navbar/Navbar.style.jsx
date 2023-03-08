import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../styles/Flex";

// export const Nav = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #ffffff;
//   border: 1px solid red;
//   height: 3rem;
// `;

export const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;

// export const MenüLink = styled(NavLink)`
//   font-size: 1rem;
//   color: #050505;
//   background-color: white;
//   border: 0;
//   text-decoration: none;
//   &:hover {
//     cursor: pointer;
//     color: aquamarine;
//   }
//   &.active {
//     color: red;
//   }
// `;

export const MenüLink = styled(NavLink)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  :hover {
    color:${({ theme }) => theme.colors.linkHoverColor};
  }
`;


// export const LogoLink = styled(NavLink)`
//   font-size: 1rem;
//   color: #050505;
//   background-color: white;
//   border: 0;
//   text-decoration: none;
//   &:hover {
//     cursor: pointer;
//     color: aquamarine;
//   }

// `;

export const LogoLink = styled(NavLink)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
`;

// export const Menü = styled.div`
//   display: flex;
//   border: 1px solid blue;
//   width: 50vh;
//   justify-content: space-around;
//   align-items: center;
// `;
export const Menü = styled(Flex)`
  font-weight: bold;
  @media (max-width:${({theme})=>theme.screens.lg}){
  flex-direction: column;
  width: 100%;
  transition: all .3s ease-in ;
  max-height: ${({ showMenu }) => (showMenu ? "300px" : "0")};
  overflow: hidden;

}
`;


export const HamburgerIcon = styled.div`
display: none;
cursor: pointer;
@media (max-width:${({theme})=>theme.screens.lg}){
  display: block;

}
`;