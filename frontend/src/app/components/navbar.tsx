import React from "react";
import "./navbar.css";
import Image from "next/image";
import esummitLogo from "../assets/icon_homepage.svg";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="left">
        <a href="#">
          <Image
            src={esummitLogo}
            alt="E-Summit Logo"
            className="esummitLogo"
          />
        </a>
      </div>
      <nav className="right">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Timeline</a>
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
