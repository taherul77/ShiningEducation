import Image from "next/image";
import React from "react";

const Footer = () => {
  const logo = "/image/logo2.png";
  return (
    <footer className="px-4 divide-y bg-[#e2eaee]">
      <div className=" pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="grid gap-10 row-gap-10  lg:grid-cols-6">
          <div className=" lg:col-span-2">
            <div className="flex justify-center">
              <Image src={logo} height={200} width={200} alt="" />
            </div>
            <div className="my-4 ">
              <p className="text-sm text-black">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-black">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 row-gap-10 lg:col-span-3 md:grid-cols-3 pt-10">
            <div>
              <p className="font-bold text-xl text-black">CONTACT INFO</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    +8801764323378
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    +8801945604616
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    SHINING EDUCATION
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    810/2, West Shewrapara ( Bus Stand ), Mirpur, Dhaka - 1216
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    shiningeducation.bd@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl text-black">QUICE LINK</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Seminar
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl text-black">FIND US ON GOOGLE</p>
              <ul className="my-2 space-y-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3644242136681!2d90.37188789273623!3d23.79266813711903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cca7e99055%3A0x6c616db8bfcb1929!2s810%2C%202a%20W%20Shewrapara%20-%20Ibrahimpur%20Rd%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1720280518405!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-black sm:flex-row">
          <p className="text-sm text-black">
            Copyright © 2024 SHINING EDUCATION | Developed by SK TAHERUL ISLAM
            TAZ
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
