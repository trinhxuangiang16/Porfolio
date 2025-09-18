import React from "react";
import Header from "../Layout/Header/Header";
import "./Skills.css";
import TypeText from "./TestType";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  let text = "Technical skills";
  return (
    <>
      <Header />
      <div className="skills">
        <div className="container">
          <div className="skill-content">
            <h1>
              <TypeText string={text} isOff={true} />
            </h1>
            <div className="wrap-text-skill">
              <div data-aos="zoom-in">
                <p>
                  - HTML, CSS: responsive layout, Flexbox & Grid, CSS animation.
                </p>
                <p>
                  - JavaScript: DOM manipulation, ES6+ (arrow function,
                  destructuring), axios.
                </p>
                <p>
                  - TypeScript: basic knowledge of TypeScript, interface for
                  basic styling.
                </p>
                <p>
                  - ReactJS: props, state, Routing (React Router), call API.
                </p>
                <p>- Basic Git/GitHub: branch, pull, merge.</p>
                <p>- Deployment: Vercel, Git.</p>
                <p>- Tools used: Git, Chrome DevTools, VS Code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
