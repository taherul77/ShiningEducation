import Image from "next/image";
import React from "react";

const StudyInJapan = () => {
  const image1 = "/image/234.png";
  const image2 = "/image/1.-Why-Choose-Japan-530x540.jpg";
  const image3 = "/image/Tokyo-Institute-of-Technology.png";
  const image4 = "/image/3.-Job-Settlement-530x540.jpg";
  
  return (
    <div className="container mx-auto flex  flex-col items-center justify-between py-10  lg:px-24 gap-8">
      <>
        <div className="">
          <div className="container flex flex-col  md:flex-row  lg:gap-48 ">
            <div className="flex flex-col ">
              <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
                For Study & Job
              </h5>
              <li className="mb-3 font-normal text-gray-700 ">
                School Interview training & Interview arrangement
              </li>
              <li className="mb-3 font-normal text-gray-700">
                Document processing & Japanese translations
              </li>
              <li className="mb-3 font-normal text-gray-700">
                FedEx/DHL/Courier cost
              </li>
              <li className="mb-3 font-normal text-gray-700">
                International Student Account file opening
              </li>
              <li className="mb-3 font-normal text-gray-700">
                Embassy interview training & File processing
              </li>
              <li className="mb-3 font-normal text-gray-700">
                Airport pickup in Japan
              </li>
              <li className="mb-3 font-normal text-gray-700">
                Accommodation arrangement in Japan
              </li>
              <li className="mb-3 font-normal text-gray-700">
                Health Insurance & Residence Permit in Japan
              </li>
              <li className="mb-3 font-normal text-gray-700">
                Part-Time work Permit & job assistance
              </li>
            </div>
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
              src={image1}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
              src={image2}
              alt=""
            />
            <div className="flex flex-col ">
              <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              Why Choose Japan
              </h5>
              <p className="mb-3 font-normal text-gray-700 text-justify">
                Being one of the developed and facilitated countries, Japan is
                currently a global destination for international students and
                job seekers. Their technological advancement and facilities are
                increasing day by day. New scopes to study and work are opening
                constantly. Someone with creativity and ambition can create an
                impact in this global advancement.
              </p>
              <p className="mb-3 font-normal text-gray-700 text-justify">
                Japan’s facilities to study, business, technology, art, culture
                are immeasurable if you are thirsty for knowledge and
                creativity. Studying or working in Japan means you are inside an
                open network of accessibility. High quality of life standards,
                warm culture, and environment can certainly make you feel safe
                and sound for life. For this purpose, Japan can be the ideal
                place for you.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <div className="flex flex-col ">
              <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
                Area of Study
              </h5>
              <p className="mb-3 font-normal text-gray-700 text-justify ">
                Naturally, a country would hold all the opportunities open for
                education. Japan is doing the same in this regard. You can study
                anything that you desire. From undergraduate level to
                post-doctoral and higher research sectors are open for students
                and researchers.
              </p>
              <p className="mb-3 font-normal text-gray-700 text-justify">
                Japan accepts almost 3,00,000 international students every year.
                Surely you can be one of them. What you just have to do is find
                the precise subject to pursue. Besides the academic path, many
                more professional and technical courses, opportunities are
                available in Japan. Precisely, you need to be perfect in every
                aspect and everyone with you has to be the best. Japan has all
                the scopes open for you. You just have to grab it.
              </p>
            </div>
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
              src={image3}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
              src={image4}
              alt=""
            />
            <div className="flex flex-col ">
              <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
                Jobs & Settlement
              </h5>
              <p className="mb-3 font-normal text-gray-700 text-justify ">
                Japan gives open and welcoming access to all of the qualified
                persons in almost every aspect possible. Either as a student or
                as a professional, you can avail yourself of the opportunities
                to be successful in your life in Japan. After you start your
                journey as a student or as a professional, you can easily start
                your processing for citizenship application in Japan.
              </p>
              <p className="mb-3 font-normal text-gray-700 text-justify">
                You must fulfill some requirements at first, but it will not be
                difficult for you as you are an ambitious person and you possess
                the strong intention to be successful in your life. The
                administrative process of Japan for job and settlement is very
                much precise and by the booking process. As a result, you have
                to complete each step with precision and clarity. Surely it will
                take a while, but you must make sure of a sound and smooth way
                of living in your desired country.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default StudyInJapan;
