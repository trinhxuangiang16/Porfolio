import React, { useState, useEffect } from "react";
import Header from "../Layout/Header/Header";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

import axios from "axios";

export default function Projects() {
  const BASE_URL = "https://68cbd47f716562cf50753a70.mockapi.io/";
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((res) => {
        setProject(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <Header />
      <Swiper
        className="wrap-slide"
        spaceBetween={10}
        slidesPerView={3}
        loop={project.length >= 3}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {project.map((item) => {
          console.log(project);
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
