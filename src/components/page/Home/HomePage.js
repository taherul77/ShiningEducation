import React from "react";
import Banner from "./Banner";
import About from "./About/About";
import Category from "./Category/Category";
import Success from "./Success/Success";
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <>
        <Category></Category>
        <About></About>
        <Success></Success>
        <Contact></Contact>
      </>
    </div>
  );
};

export default HomePage;
