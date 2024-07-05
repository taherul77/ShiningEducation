import Section from '@/components/ui/Section/Section';
import Image from 'next/image';
import React from 'react'

const Collage = () => {
    const image1 = "/image/Hokkaido-University.png";
    const image2 = "/image/12345678.jpg";
    const image3 = "/image/12345678.jpg";
    const image4 = "/image/12345678.jpg";
    const image5 = "/image/12345678.jpg";
    const image6 = "/image/12345678.jpg";
    const image7 = "/image/12345678.jpg";
    return (
      <main className="flex  flex-col items-center justify-between">
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
              Kyushu University
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
              Hokkaido University
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
              Kyoto University
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
                src={image1}
              />
              <h5 className="text-md lg:text-2xl uppercase font-bold py-5">
              Kyushu University
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
              Hokkaido University
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
              Kyoto University
              </h5>
            </div>
          </div>
        </div>
      </main>
    );
}
export default Collage
