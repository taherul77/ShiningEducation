import Image from 'next/image'
import React from 'react'

const AboutComponent = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <>
        <div className="py-10">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-none md:rounded-lg"
              src={image3}
              alt=""
            />
            <div className="flex flex-col ">
              <p className="mb-3 font-normal text-gray-400 ">ABOUT AGENCY</p>
              <h5 className="mb-2 text-4xl  text-gray-900 font-bold  pb-5">
                About Hashigo JLC
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                In this fast-moving world of competition, JAPAN is a dream
                destination for intellectual people who want to be successful in
                their life. Not only for attractive salary & other facilities,
                but also Japan became the first choice for students & job
                seekers pursuing independence and ambition. This situation makes
                language proficiency in Japanese and cultural openness prime
                criteria for the people trying to be there in the future. With
                those skills achieving a Japanese visa, clearance from
                professional institutions becomes easier.
              </p>
              <p className="mb-3 font-normal text-gray-700">
                With the vision to provide proper & complete consultancy on
                language efficiency to the interested students & job seekers, we
                commenced the ”Hashigo Japanese Language Center”. You can
                contact us for Japanese Language learning, Student & Job Visa
                Processing, and job finding purposes. We can ensure the best
                possible services & it will be a life-changing journey between
                you and Hashigo JLC. We will be there from the beginning to the
                end of your voyage.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <div className="flex flex-col ">
              <p className="mb-3 font-normal text-gray-400 ">ABOUT AGENCY</p>
              <h5 className="mb-2 text-4xl  text-gray-900 font-bold  pb-5">
                Vision
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                Our vision is to make a reliable and trustworthy platform for
                foreign university admission as their single-stop solution hub.
                It also includes a professional career guide for getting a job
                abroad with permanent residence.
              </p>
              <p className="mb-3 font-normal text-gray-700">
                We aspire to turn the difficulties into opportunities for the
                interested people and make their paths easier with our years of
                help. Understanding our client’s demands and acting upon them
                accordingly for their dream journey along with building a
                lifelong relationship with them is another aspect that we thrive
                on.
              </p>
            </div>
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-none md:rounded-lg"
              src={image3}
              alt=""
            />
          </div>
        </div>
        <div className="py-10">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-none md:rounded-lg"
              src={image3}
              alt=""
            />
            <div className="flex flex-col ">
              <p className="mb-3 font-normal text-gray-400 ">ABOUT AGENCY</p>
              <h5 className="mb-2 text-4xl  text-gray-900 font-bold  pb-5">
                Mission
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                Our mission is to help students pick up the best university, the
                best program for them according to their previous credentials.
                Supervision on the application procedure with scholarship
                application and other necessary steps are also included.
                Ensuring a hassle-free visa and admission process, providing
                language aid to the students and professionals is also a part of
                our main program.
              </p>
              <p className="mb-3 font-normal text-gray-700">
                Language courses, document preparation in languages, guiding
                from the beginning to the end is also our prime concern. Using
                our successful experience to create more success stories in the
                future, encouraging people to pursue their destination by
                navigating them at the right pace is our ethical concern. We
                value our clients’ focus by offering our best services with
                integrity.
              </p>
            </div>
          </div>
        </div>
      </>
      -----------------------------------------------
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

export default AboutComponent
