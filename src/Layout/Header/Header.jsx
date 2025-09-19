import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import "../Banner/Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DivideLetter from "../Banner/DivideLetter";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  let mail = "trinhgiang.dev16";

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <h3 data-aos="flip-right" className="logo-mail">
            <DivideLetter text={mail} />
          </h3>
        </div>
      </Link>

      <div className="menu">
        <div data-aos="fade-down" className="navbar">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" className="wrap-btn-download">
          <button className="download">
            <a
              download="TrinhXuanGiang_CV.pdf"
              href="/CV-INTERN-TRỊNH_XUÂN_GIANG.pdf"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
