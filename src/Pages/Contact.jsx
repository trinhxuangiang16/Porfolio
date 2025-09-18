import React from "react";
import Header from "../Layout/Header/Header";
import "./Contact.css";
import TypeText from "./TestType";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  let text = "Contact me!";
  return (
    <>
      <Header />
      <div className="contact">
        <div className="container">
          <div className="contact-content">
            <h1>
              <TypeText string={text} isOff={true} />
            </h1>
            <div className="wrap-text-contact">
              <div data-aos="zoom-in">
                <div>
                  <p>
                    <span>Email:</span> trinhgiang.dev16@gmail.com
                  </p>
                </div>
                <div>
                  <p>
                    <span>Phone:</span> +84 847 557 925
                  </p>
                </div>
                <div>
                  <p>
                    <span>Address:</span> Ho Chi Minh, VietNam
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/giang-tr%E1%BB%8Bnh-413a27360"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn:</span> linkedin.com/in/giangtrinh
                  </a>
                </div>

                <div>
                  <a
                    href="http://github.com/trinhxuangiang16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Github:</span> github.com/trinhxuangiang16
                  </a>
                </div>

                <div>
                  <a
                    href="http://vercel.com/trinh-xuan-giangs-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Vercel:</span> vercel.com/trinh-xuan-giang-app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
