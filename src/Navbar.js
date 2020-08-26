import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        src="http://pngimg.com/uploads/netflix/netflix_PNG32.png"
        alt="Netflix Logo"
        className="navbar__logo"
      />
      <img
        src="http://pngimg.com/uploads/dolphin/dolphin_PNG71363.png"
        alt="Netflix Logo"
        className="navbar__dolphin"
      />
    </div>
  );
}

export default Navbar;
