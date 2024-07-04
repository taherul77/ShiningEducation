import Banner from "@/components/ui/Banner/Banner";
import React from "react";

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"study in japan"}></Banner>
    </div>
  );
};

export default page;
