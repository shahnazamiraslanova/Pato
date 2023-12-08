import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { HiMiniBars2 } from "react-icons/hi2";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="nav">
      <div className="navMain">
        <NavLink to="/">
          <button className="logo">
            <img
              src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp"
              alt=""
            />
          </button>
        </NavLink>

        <ul>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="menu">MENU</NavLink>
          <NavLink to="reservation">RESERVATION</NavLink>
          <NavLink to="gallery">GALLERY</NavLink>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="blog">BLOG</NavLink>
          <NavLink to="contact">CONTACT</NavLink>
        </ul>
        <div className="icons">
          <button>
            <FaInstagram />
          </button>
          <button>
            <CiFacebook />
          </button>
          <button>
            <CiLinkedin />
          </button>
          <Button type="" onClick={showDrawer}>
            <HiMiniBars2 />
          </Button>
        </div>

        <Drawer
          title=""
          placement="right"
          onClose={onClose}
          open={open}
          
        >
          <div style={{
            height:500,
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-around"
            
          }}>
        
          <NavLink to="/">HOME</NavLink>
          <NavLink to="menu">MENU</NavLink>
          <NavLink to="reservation">RESERVATION</NavLink>
          <NavLink to="gallery">GALLERY</NavLink>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="blog">BLOG</NavLink>
          <NavLink to="contact">CONTACT</NavLink>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
