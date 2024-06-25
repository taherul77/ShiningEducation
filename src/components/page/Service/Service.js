import Image from 'next/image';
import React from 'react'

const Service = () => {
    const image1 = "/image/12345678.jpg";
  const image2 = "/image/12345678.jpg";
  const image3 = "/image/12345678.jpg";
  const image4 = "/image/12345678.jpg";
  const image5 = "/image/12345678.jpg";
  const image6 = "/image/12345678.jpg";
  const image7 = "/image/12345678.jpg";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <h5 className="text-md lg:text-2xl uppercase font-bold">
            In Business
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
          <h5 className="text-md lg:text-2xl uppercase font-bold">
            Projects Completed
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
          <h5 className="text-md lg:text-2xl uppercase font-bold">
            Achievements
          </h5>
        </div>
      </div>
    </div>
    <>
      <div className="py-10">
        <div className="container flex flex-col  md:flex-row  gap-8 ">
          <Image
            height={400}
            width={400}
            className="object-cover w-[500px]  h-[500px] md:rounded-none md:rounded-lg"
            src={image1}
            alt=""
          />
          <div className="flex flex-col ">
            <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              Language for Daily Life
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              The practice of politeness and hospitality in Japan is much
              appreciated and inspiring for other countries. Their lifestyle,
              ideology, and perspective on life are unique. In short, they
              have a positive and influential impact on the rest of the
              nations. When you obtain the opportunity to live in Japan, you
              wouldn’t want to miss becoming a part of their warm culture,
              would you? Most probably you are a student or a professional.
              You would become a part of their culture for the time being.
              Japanese will make you one of them, as a part of their family.
            </p>
            <p className="mb-3 font-normal text-gray-700">
              Learning the Japanese language can give you the perfect rhythm
              to become a part of it. You wouldn’t believe how much you could
              learn from an elderly citizen, even with your broken Japanese
              Language. The scope can suddenly become immense just by speaking
              the Japanese language. You can participate with almost everyone
              in every aspect of life. Would you want to skip this superb
              chance to become a global citizen?
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="container flex flex-col  md:flex-row  gap-8 ">
          <div className="flex flex-col ">
            <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              For Study & Job
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Learning the Japanese language for your study and job is a
              dynamic necessity for every interested people. This skill can
              put an immense value on your portfolio and makes you a more
              compatible person than others. It can help you to compete in
              almost every sector to pursue your goal; this can give you a lot
              more insights when it is needed.
            </p>
            <p className="mb-3 font-normal text-gray-700">
              You can stay updated with different business and technological
              ideas generated from Japan. You can surf the ocean of world
              culture and history. Staying connected with innovative ideas
              from primary references certainly can make a positive impact on
              your career path. Everyone knows that Japan is currently leading
              the tech and business innovation world. You would certainly want
              to be a part of it.
            </p>
          </div>
          <Image
            height={400}
            width={400}
            className="object-cover w-[500px]  h-[500px] md:rounded-none md:rounded-lg"
            src={image4}
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
            src={image5}
            alt=""
          />
          <div className="flex flex-col ">
            <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              For Residence & Citizenship
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Learning the Japanese language is a mandatory requirement to get
              citizenship in Japan. If you want to be a Japanese citizen, then
              you must have to be able to bear their socio-cultural norms, and
              language is the first step for achieving that. Achieving the
              level of fluency in Japanese, you are required to complete the
              level N3 minimum. In your daily life in Japan, while interacting
              with local citizens, doing business, or speaking with your
              colleagues, supervisors, it’s imperative to be able to speak
              Japanese.
            </p>
            <p className="mb-3 font-normal text-gray-700">
              Although with the minimal level of fluency of level N5, you
              would be able to maintain some basic communications. But the
              ability to speak with a Japanese like a Japanese can convince
              everyone around you. We can help you to achieve compatibility in
              the Japanese language with our measured and perfect guidance. To
              sum up all the facts, you must be good at the Japanese language
              and we are here to help.
            </p>
          </div>
        </div>
      </div>
    </>
    --------------------------------------------------------
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
            <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              A Bright Future
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Japan is considered the heaven of technology and innovation.
              They thrive on innovation and creativity. They are constantly
              working to find solutions to all the problems. In every aspect
              of knowledge like technology, business, health, education,
              agriculture, they are working on it. Every individual can
              participate in this journey. Japan is providing the chance to
              anyone worthy of it.
            </p>
            <p className="mb-3 font-normal text-gray-700">
              If you are a student, you can be there as a student and
              potential asset person. If you are a skilled professional, you
              can be there with all your innovation and years of experience.
              It leads us to a global hub of growth and prosperity. Our
              organization can help you find your destined place and provide
              all the supports you need. With the proper help and guidance,
              you can connect yourself with a greater place that is perfect
              for your growth. You just don’t know that yet.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="container flex flex-col  md:flex-row  gap-8 ">
          <div className="flex flex-col ">
            <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              Visa Processing
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Most of the time students and professionals face difficulties
              preparing necessary documents for their departure. They lack
              proper information and guidance to prepare them according to the
              instruction of the embassy. As a result, they face problems
              having their visa on time.
            </p>
            <p className="mb-3 font-normal text-gray-700">
              Hashigo JLC works to help students and professionals to follow
              the proper instructions with the help of their years of
              experience. Hashigo helps students communicate with the
              universities for their admission and visa purposes. Preparing
              the necessary documents and submitting them right on time is
              another crucial part of the whole process. Hashigo helps both
              students and professionals with this paper preparation.
            </p>
          </div>
          <Image
            height={400}
            width={400}
            className="object-cover w-[500px]  h-[500px] md:rounded-none md:rounded-lg"
            src={image6}
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
            src={image7}
            alt=""
          />
          <div className="flex flex-col ">
            <h5 className="mb-2 text-4xl font-bold text-gray-900  pb-5">
              Working Visa
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              To get a working visa in Japan, receiving the “Certificate of
              Eligibility (COE)” is the first step. It implies that you are
              eligible to apply for the visa process and have the potential to
              immigrate to Japan. You need to state your purpose and necessary
              documents of your job and skill experiences, several papers
              should have to be sent for verification.
            </p>
            <p className="mb-3 font-normal text-gray-700">
              You will also need a job offer letter from a Japanese company
              and this should be shown while making the visa application.
              These steps should have to be done carefully and Hashigo JLC
              works to make these certain for a professional. For different
              professions and workers, the process may vary and Hashigo can
              help you to prepare all the paperwork.
            </p>
          </div>
        </div>
      </div>
    </>
    -------------------------------------------
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
            <h5 className="mb-2 text-5xl  text-gray-700  pb-5">
              Our next seminar is on “Introduction to the Visa process in
              Japan”. We are expecting your kind presence.
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Open for all/University Students.
            </p>
            <p className="mb-3 font-normal text-gray-700">Date: 05/03/2022</p>
            <p className="mb-3 font-normal text-gray-700">
              Venue: Dhaka, Bangladesh
            </p>
            <p className="mb-3 font-normal text-gray-700">
              Contact: +8801761898215
            </p>
          </div>
        </div>
      </div>
    </>
    -------------------------------------------
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

export default Service
