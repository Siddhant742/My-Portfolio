import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <ul className="fIcons">
        <li className="fIcon">
          <a href="https://www.facebook.com/siddhant.thakur.73594">
            <FaFacebookF className="icon" />{" "}
          </a>

          <a href="https://twitter.com/MetroNz_">
            <FaTwitter className="icon" />{" "}
          </a>

          <a href="https://www.instagram.com/siddhant.thakur__/">
            <FaInstagram className="icon" />{" "}
          </a>

          <a href="https://www.linkedin.com/in/siddhant-thakur-95b380200/">
            <FaLinkedinIn className="icon" />{" "}
          </a>

          <a href="https://github.com/Siddhant742">
            <FaGithub className="icon" />{" "}
          </a>

          <a href="mailto:tsiddhu537@gmail.com">
            <FaEnvelope className="icon" />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
