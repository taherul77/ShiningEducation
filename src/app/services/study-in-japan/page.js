import StudyInJapan from "@/components/page/StudyInJapan/StudyInJapan";
import Banner from "@/components/ui/Banner/Banner";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import React from "react";

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"study in japan"}></Banner>
      <Wrapper>
      <StudyInJapan></StudyInJapan>
      </Wrapper>
    </div>
  );
};

export default page;
