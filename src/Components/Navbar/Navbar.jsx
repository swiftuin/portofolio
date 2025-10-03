import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import logo from "../../assets/swift-logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showPopup, setShowPopup] = useState(false)

  const instagramLinks = [
    { url: "https://www.instagram.com/zacky_pule/", user: "@zacky_pule" },
    { url: "https://www.instagram.com/alall_89/", user: "@alall_89" },
    { url: "https://www.instagram.com/fnaufal250/", user: "@fnaufal250" },
    { url: "https://www.instagram.com/rifqiaunn/", user: "@rifqiaunn" },
    { url: "https://www.instagram.com/marcell6514/", user: "@marcell6514" },
    { url: "https://www.instagram.com/datiangrr/", user: "@datiangrr" },
    { url: "https://www.instagram.com/annxie.ty/", user: "@annxie.ty" },
    { url: "https://www.instagram.com/farelramadhanii/", user: "@farelramadhanii" },
    { url: "https://www.instagram.com/@emangvoleh/", user: "@emangvoleh" }
  ]

  return (<>
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink
            className={`anchor-link ${menu === "home" ? "active" : ""}`}
            offset={50}
            href="#home"
            onClick={() => setMenu("home")}
          >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === "profile" ? "active" : ""}`}
            offset={50}
            href="#profile"
            onClick={() => setMenu("profile")}
          >
            Profile
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === "resume" ? "active" : ""}`}
            offset={50}
            href="#resume"
            onClick={() => setMenu("resume")}
          >
            Resume
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === "gallery" ? "active" : ""}`}
            offset={50}
            href="#gallery"
            onClick={() => setMenu("gallery")}
          >
            Gallery
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect" onClick={() => setShowPopup(true)}>
        Connect With Us
      </div>
    </div>
    {
      showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h2>Our Instagram</h2>
            <ul>
              {instagramLinks.map((ig, index) => (
                <li key={index}>
                  <a href={ig.url} target="_blank" rel="noopener noreferrer">
                    {ig.user}
                  </a>
                </li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )
    }
  </>
  );
};

export default Navbar;
