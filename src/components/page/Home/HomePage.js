import React from "react";
import Banner from "./Banner";
import About from "./About/About";
import Category from "./Category/Category";
import Success from "./Success/Success";
import Contact from "./Contact/Contact";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import Collage from "./Collage/Collage";
import Testimonials from "./Testimonials/Testimonials";

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
        
          <Testimonials></Testimonials>
       
        <Wrapper className={"mt-32"}>
          
        </Wrapper>
        <Contact></Contact>
      </>
    </div>
  );
};

export default HomePage;
