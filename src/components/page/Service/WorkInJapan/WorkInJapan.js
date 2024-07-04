import Image from 'next/image';

const WorkInJapan = () => {
    const image1 = "/image/12345678.jpg";
    const image2 = "/image/12345678.jpg";
    const image3 = "/image/12345678.jpg";
    const image4 = "/image/12345678.jpg";
    const image5 = "/image/12345678.jpg";
    const image6 = "/image/12345678.jpg";
    const image7 = "/image/12345678.jpg";
    return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
  
      <>
        <div className="py-10">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
                for your growth. You just don't know that yet.
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
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
  
     </main>
    )
  }

export default WorkInJapan
