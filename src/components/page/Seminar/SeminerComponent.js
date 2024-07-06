import Image from "next/image";

const SeminerComponent = () => {
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
        <div className="">
          <div className="container flex flex-col  md:flex-row  gap-8 ">
            <Image
              height={400}
              width={400}
              className="object-cover w-[500px]  h-[500px] md:rounded-lg"
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
                Contact: +8801764323378
              </p>
              <p className="mb-3 font-normal text-gray-700">+8801945604616</p>
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default SeminerComponent;
