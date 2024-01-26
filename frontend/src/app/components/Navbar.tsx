"use client";

import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import esummitLogo from "@/assets/icon_homepage.svg";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="left">
        <a href="#">
          <Image
            src={esummitLogo}
            alt="E-Summit Logo"
            className="esummitLogo"
          />
        </a>
      </div>
      <nav className={`right ${menuOpen ? "menu-open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon style={{ fontSize: 36 }} />
        </div>
        <ul onClick={toggleMenu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#speakers">Speakers</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
