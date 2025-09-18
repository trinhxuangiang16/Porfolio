import React, { useEffect } from "react";
import "./About.css";
import TypeText from "./TestType";
import Header from "../Layout/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  let text =
    " Passionate about programming and constantly improving technical skills";
  return (
    <>
      <Header />
      <div className="about-me">
        <div className="container">
          <h1>About me</h1>
          <h4>
            <TypeText string={text} isOff={true} />
          </h4>
          <div data-aos="zoom-in">
            <p>
              Hi there, I'm Giang. I am a Frontend Developer learning to become
              a Full-stack Developer.
            </p>
            <p>
              I like to build web applications that are clean, simple, and
              useful. I also care about design and user experience.
            </p>
            <p>
              I am now learning HTML, CSS, JavaScript, ReactJS and Node.js. I
              study Full-stack at Cybersoft Center to improve my skills. By
              November, I will complete the Frontend part and then continue with
              Backend.
            </p>
            <p>
              My goal is to grow step by step, face challenges, and work on
              projects that create real value.
            </p>
            <p>
              I enjoy working in a team, solving problems in the simplest way,
              and becoming a modern developer who keeps up with new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
