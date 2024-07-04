import Apply from "@/components/page/Apply/Apply";
import Banner from "@/components/ui/Banner/Banner";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import React from "react";

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"apply now "}></Banner>
      <Wrapper>
        <Apply></Apply>
      </Wrapper>
    </div>
  );
};

export default page;
