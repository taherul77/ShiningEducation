import Image from "next/image";
import React from "react";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import Section from "@/components/ui/Section/Section";

const Gallery = () => {

  const image1 =
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.54 AM.jpeg";
  const image2 =
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM.jpeg";
  const image3 =
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM.jpeg";
  const image4 =
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM (1).jpeg";
  const image5 =
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM (1).jpeg";

  return (
    <>
      {/* <div className=" flex flex-col items-center justify-between  gap-8">
        <div className=" flex flex-col  mx-auto ">
          <div className="flex flex-col w-full justify-center items-center sm:flex-row">
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300 h-[300px] w-full"
                height={600}
                width={500}
                alt="Rectangle"
                src={image1}
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300 h-[300px] w-full"
                height={600}
                width={500}
                alt="Rectangle"
                src={image2}
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300 h-[300px] w-full"
                height={600}
                width={500}
                alt="Rectangle"
                src={image3}
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300 h-[300px] w-full"
                height={600}
                width={500}
                alt="Rectangle"
                src={image4}
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300 h-[300px] w-full"
                height={600}
                width={500}
                alt="Rectangle"
                src={image5}
              />
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className="flex justify-center items-center text-md  lg:text-2xl  font-bold py-10 ">
          <Section heading={"Our Gallery"}></Section>
        </div> */}
      <HomeNavigation></HomeNavigation>
    </>
  );
};

export default Gallery;
