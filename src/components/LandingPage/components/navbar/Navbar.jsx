//---------------------------------------------------------------------------
//imports
import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../../media/Cryptonite Title Cropped.png";
import { useNavigate } from "react-router-dom";

//---------------------------------------------------------------------------
//navbar structure
const Navbar = () => {
  //variables
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  //navbar listing
  const Menu = () => (
    <>
      {" "}
      <p>
        <a
          href="javascript:document.getElementById('home').scrollIntoView(true);"
          onClick={() => setToggleMenu(false)}
        >
          Home
        </a>
      </p>
      <p>
        <a
          href="javascript:document.getElementById('testament').scrollIntoView(true);"
          onClick={() => setToggleMenu(false)}
        >
          Testament
        </a>
      </p>
      <p>
        <a
          href="javascript:document.getElementById('features').scrollIntoView(true);"
          onClick={() => setToggleMenu(false)}
        >
          Features
        </a>
      </p>
      <p>
        <a
          href="javascript:document.getElementById('statistics').scrollIntoView(true);"
          onClick={() => setToggleMenu(false)}
        >
          Statistics
        </a>
      </p>
      <p>
        <a
          href="javascript:document.getElementById('faq').scrollIntoView(true);"
          onClick={() => setToggleMenu(false)}
        >
          FAQ
        </a>
      </p>
      <p>
        <a
          href="javascript:document.getElementById('from-us').scrollIntoView(true);"
          onClick={() => setToggleMenu(false)}
        >
          From us
        </a>
      </p>
    </>
  );

  return (
    <div className="crypto__navbar">
      <div className="crypto__navbar-links">
        <div className="crypto__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="crypto__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="crypto__navbar-sign">
        <button type="button" onClick={() => navigate("/")}>
          Conquer the market
        </button>
      </div>
      <div className="crypto__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="crypto__navbar-menu_container slide-bottom">
            <div className="crypto__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="crypto__navbar-menu_container-links-sign">
              <button type="button" onClick={() => navigate("/")}>
                Conquer the market
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default Navbar;
