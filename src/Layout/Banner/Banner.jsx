import React, { useEffect } from "react";

import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DivideLetter from "./DivideLetter";
import { Link } from "react-router-dom";
import TypeText from "../../Pages/TestType";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let text = "Hi, I'm";
  let name = "Trinh Giang";
  let dev = "Frontend Developer";
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="hover-text">
            <TypeText string={text} isOff={false} />
            <br />
            <TypeText string={name} isOff={true} />
          </h1>
          <h3 data-aos="fade-right">
            <DivideLetter text={dev} />
          </h3>
          <p data-aos="fade-right" data-aos-delay="300">
            Embrace challenges, grow, <br /> and reach my goals
          </p>
          <button data-aos="fade-right" className="btn">
            <Link to="/skills">View my skills</Link>
          </button>
        </div>
        <div data-aos="fade-left" className="img">
          <img src="/public/image/work.png" alt="student" />
        </div>
      </div>
    </div>
  );
}
