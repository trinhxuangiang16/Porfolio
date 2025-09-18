import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Card({ item }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="card">
      <div className="card-content">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.detail}</p>
        <h4>{item.techStack}</h4>
      </div>
      <div className="wrap-btn-project">
        <button className="btn-project">
          <a target="_blank" href={item.linkDeploy}>
            Link Deploy
          </a>
        </button>
        <button className="btn-project">
          <a target="_blank" href={item.linkSource}>
            Source code
          </a>
        </button>
      </div>
    </div>
  );
}
