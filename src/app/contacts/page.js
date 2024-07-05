import ContactComponent from "@/components/page/ContactComponent/ContactComponent";
import Banner from "@/components/ui/Banner/Banner";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import React from "react";

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"contact us"}></Banner>
      <Wrapper>
        <ContactComponent></ContactComponent>
      </Wrapper>
    </div>
  );
};

export default page;
