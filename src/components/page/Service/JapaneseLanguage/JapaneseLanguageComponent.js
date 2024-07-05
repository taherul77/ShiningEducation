import Image from 'next/image';


const JapaneseLanguageComponent = () => {
    const image1 = "/image/12345678.jpg";
    const image2 = "/image/12345678.jpg";
    const image3 = "/image/12345678.jpg";
    const image4 = "/image/12345678.jpg";
    const image5 = "/image/12345678.jpg";
    const image6 = "/image/12345678.jpg";
    const image7 = "/image/12345678.jpg";
    return (
      <main className="flex  flex-col items-center justify-between py-10  lg:px-24 gap-8">
      
      <>
        <div className="py-10">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
     
    </main>
    )
  }

export default JapaneseLanguageComponent
