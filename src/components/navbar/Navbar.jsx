import { HamburgerIcon, LogoLink, Menü, MenüLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
import { useState } from "react";

const Navbar = ({ storageUser, setStorageUser }) => {
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    setStorageUser(JSON.parse(sessionStorage.getItem("user")));
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <LogoLink to={"/"}>{storageUser ? storageUser.userName : "my"} LIBRARY</LogoLink>
      <HamburgerIcon onClick={() => setShow(!show)}>{menuIcon}</HamburgerIcon>

      <Menü showMenu={show}>
        <MenüLink to={"/"}>HOME</MenüLink>
        <MenüLink to={"/about"}>ABOUT</MenüLink>
        {storageUser?.userName ? (
          <MenüLink to={"/login"} onClick={handleLogout}>
            LOGOUT
          </MenüLink>
        ) : (
          <>
            <MenüLink to={"/register"}>REGISTER</MenüLink>
            <MenüLink to={"/login"}>LOGIN</MenüLink>
          </>
        )}
      </Menü>
    </Nav>
  );
};

export default Navbar;
