import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
          <a href="https://www.facebook.com/NetflixArg/?brand_redir=684961094904799" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          aria-hidden="true"
          className="footer-icon"
        />
          </a>
          <a href="https://www.instagram.com/NetflixLAT/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          aria-hidden="true"
          className="footer-icon"
        />
          </a>
          <a href="https://twitter.com/netflixLAT" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faTwitter}
          aria-hidden="true"
          className="footer-icon"
        />
          </a>
          <a href="https://www.youtube.com/channel/UC5ZiUaIJ2b5dYBYGf5iEUrA" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faYoutube}
          aria-hidden="true"
          className="footer-icon"
        />
        </a>
      </div>
      <div className="footer-lists">
        <ul>
          <li>Audio and Subtitles</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div className="responsive-footer-lists">
        <ul>
          <li>Audio and Subtitles</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>
    </div>
  );
}
