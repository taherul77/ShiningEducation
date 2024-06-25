import Image from 'next/image';
import React from 'react'

const GalleryComponent = () => {
    const image1 = "/image/12345678.jpg";
    const image2 = "/image/12345678.jpg";
    const image3 = "/image/12345678.jpg";
    const image4 = "/image/12345678.jpg";
    const image5 = "/image/12345678.jpg";
    const image6 = "/image/12345678.jpg";
    const image7 = "/image/12345678.jpg";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <div className="container flex flex-col  mx-auto ">
        <h5 className="text-md  lg:text-2xl  font-bold py-10">
          1st Gallery
        </h5>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image1}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image2}
            />
          </div>
  
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image3}
            />
          </div>
        </div>
      </div>
  
      <div className="container flex flex-col  mx-auto ">
        <h5 className="text-md  lg:text-2xl font-bold py-10">
          2nd Gallery
        </h5>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image1}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image2}
            />
          </div>
  
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image3}
            />
          </div>
        </div>
      </div>
  
      <div className="container flex flex-col  mx-auto ">
        <h5 className="text-md  lg:text-2xl font-bold py-10">
          3rd Gallery
        </h5>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image1}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image2}
            />
          </div>
  
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image3}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default GalleryComponent
