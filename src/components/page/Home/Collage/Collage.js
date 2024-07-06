import Section from '@/components/ui/Section/Section';
import Image from 'next/image';
import React from 'react'

const Collage = () => {
    const image1 = "/image/Hokkaido-University.png";
    const image2 = "/image/Kyoto-University.png";
    const image3 = "/image/Kyushu-University.png";
    const image4 = "/image/Nagoya-University.png";
    const image5 = "/image/Tohuko-University.png";
    const image6 = "/image/Tokyo-Institute-of-Technology.png";
    const image7 = "/image/Hokkaido-University.png";
    return (
      <div className="flex  flex-col items-center justify-between py-10  lg:px-24 gap-8">
        <Section heading={"Choose your School / College / University"}></Section>
        <div className="container flex flex-col items-center mx-auto ">
          <div className="flex flex-col w-full justify-center items-center sm:flex-row gap-8">
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300"
                height={600}
                width={500}
                alt="Rectangle"
                src={image1}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Hokkaido University
              </h5>
            </div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300"
                height={600}
                width={500}
                alt="Rectangle"
                src={image2}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Kyoto University
              </h5>
            </div>
  
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300"
                height={600}
                width={500}
                alt="Rectangle"
                src={image3}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Kyushu University
              </h5>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center sm:flex-row gap-8">
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300"
                height={600}
                width={500}
                alt="Rectangle"
                src={image6}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Tokyo Institute 
              </h5>
            </div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300"
                height={600}
                width={500}
                alt="Rectangle"
                src={image4}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Nagoya University
              </h5>
            </div>
  
            <div className="flex flex-col w-full justify-center items-center text-center">
              <Image
                className="py-5 hover:scale-105 transition duration-300"
                height={600}
                width={500}
                alt="Rectangle"
                src={image5}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Tohuko University
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Collage
