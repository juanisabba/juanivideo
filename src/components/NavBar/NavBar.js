import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faBell, faGift, faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/juaniflix.png";
import avatar from "../../img/netflix-avatar.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [colorMenu, setColorMenu] = useState(false);

  const progress = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) setColorMenu(true);
    else setColorMenu(false);
  };

  const handleClick = () => {
    window.scroll(0, 0);
  };

  window.addEventListener("scroll", progress);
  return (
    <div className={colorMenu ? "colorMenu navbar" : "transparentMenu navbar"}>
      <div>
        <img className="navbar-logo" src={logo} alt="Juaniflix" />
        <div className="responsive-navbar">
          <span className="browse">
            Browse
          <FontAwesomeIcon
            icon={faSortDown}
            aria-hidden="true"
            className="sort-down-icon"
            color="#fff"
          />
          </span>

            <ul className="responsive-list">
            <li onClick={handleClick}>
            <Link className="link homepage-list" to="/juanivideo">
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="link tv-shows-list" to="/juanivideo/tv-shows">
              TV Shows
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="link movies-list" to="/juanivideo/movies">
              Movies
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="link trending-list" to="/juanivideo/trending">
              New & Popular
            </Link>
          </li>
            </ul>
        </div>
        <ul className="navbar-list">
          <li onClick={handleClick}>
            <Link className="link homepage-list" to="/juanivideo">
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="link tv-shows-list" to="/juanivideo/tv-shows">
              TV Shows
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="link movies-list" to="/juanivideo/movies">
              Movies
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="link trending-list" to="/juanivideo/trending">
              New & Popular
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/juanivideo/search">
        <FontAwesomeIcon
            icon={faSearch}
            aria-hidden="true"
            className="navbar-icon"
            color="#fff"
          />
        </Link>

        <span className="navbar-kids">KIDS</span>
        <FontAwesomeIcon
            icon={faGift}
            aria-hidden="true"
            className="navbar-icon"
            color="#fff"
          />
        <FontAwesomeIcon
            icon={faBell}
            aria-hidden="true"
            className="navbar-icon"
            color="#fff"
          />
        <img className="navbar-icon" src={avatar} alt="User" />
      </div>
    </div>
  );
}
