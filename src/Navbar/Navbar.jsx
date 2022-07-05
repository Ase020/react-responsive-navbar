import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [ham, setHam] = useState(false);
  const menuItems = (
    <>
      <a href="/">HOME</a>
      <a href="/">ABOUT</a>
      <a href="/">PORTFOLIO</a>
      <a href="/">CONTACT</a>
    </>
  );
  return (
    <div>
      <nav>
        <div className="nav-container">
          <h1 className="logo">aseDesigns</h1>
          <div className="menu">{menuItems}</div>
          <button
            className={ham ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setHam(!ham)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {ham && <div className="nav-dropdown">{menuItems}</div>}
    </div>
  );
}
