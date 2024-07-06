"use client";
import { useState, useEffect } from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageAnimationClass, setImageAnimationClass] = useState(styles.blur);
  const [textAnimationClass, setTextAnimationClass] = useState(styles.zoom);
  const images = [
    "/image/banner4.jpg",
    "/image/banner5.jpg",
    "/image/banner2.jpg",
    "/image/banner3.jpg",
  ];

  const texts = [
    "In this fast-moving world of competition, JAPAN is a dream destination for intellectual people who want to be successful in their life",
    "If you are looking for detailed guidelines to get admission into a Japanese University, then you are in the right place.",
    "We are here to help you find your destined position that you are looking to pursue. With all the necessary support ready to provide you",
    "We provide Japanese language course, document aid, and other necessary support for the students and immigrants.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImageAnimationClass("");
      setTextAnimationClass("");
      setTimeout(() => {
        setImageAnimationClass(styles.blur);
        setTextAnimationClass(styles.zoom);
      }, 50);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex w-full items-center justify-center bg-no-repeat h-[100vh] overflow-hidden">
      <div
        className={`absolute w-full h-full bg-cover bg-center ${imageAnimationClass}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <div className="bg-black bg-opacity-60 px-8 py-12">
          <h1
            className={`text-white text-2xl uppercase font-bold ${textAnimationClass}`}
          >
            {texts[currentImageIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
