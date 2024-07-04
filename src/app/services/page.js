import Service from "@/components/page/Service/Service";
import Banner from "@/components/ui/Banner/Banner";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import React from "react";

const page = () => {
  const images = "/image/banner5.jpg";
  return (
    <div>
      <Banner img={images} heading={"Service"}></Banner>
      <Wrapper>
        <Service></Service>
      </Wrapper>
    </div>
  );
};

export default page;
