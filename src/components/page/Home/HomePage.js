import React from "react";
import Banner from "./Banner";
import About from "./About/About";
import Category from "./Category/Category";
import Success from "./Success/Success";
import Contact from "./Contact/Contact";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import Collage from "./Collage/Collage";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <>
        <Wrapper>
          <Category></Category>
        </Wrapper>
        <Wrapper>
          <About></About>
        </Wrapper>
        <Wrapper>
          <Success></Success>
        </Wrapper>
        <Wrapper>
          <Collage></Collage>
        </Wrapper>
        <Wrapper>
          <Contact></Contact>
        </Wrapper>
      </>
    </div>
  );
};

export default HomePage;
