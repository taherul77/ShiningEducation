import React from "react";

const ContactComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 py-10  lg:px-24 gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="p-4 rounded-lg bg-gradient-to-r bg-slate-100 text-center md:p-6 ">
          <span className="inline-block p-5 text-white rounded-full bg-blue-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-xl font-medium text-black ">Our Address</h2>
          <p className="mt-2 text-md text-gray-700 ">
            H# 677 (3RD FLOOR), WEST SHEWRAPARA, MIRPUR, DHAKA-1216
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-r bg-slate-100 md:p-6 text-center">
          <span className="inline-block p-5 text-white rounded-full bg-blue-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-xl font-medium text-black ">Phone Number</h2>
          <p className="mt-2 text-md text-gray-700 ">
            +880 1764323378 <br />
            +880 1945604616
          </p>
        </div>

        <div className="p-4 rounded-lg   bg-slate-100 text-center md:p-6 ">
          <span className="inline-block p-5 text-white rounded-full bg-blue-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="w-10 h-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-xl font-medium text-black ">
            Email Address
          </h2>

          <p className="mt-2 text-md  text-gray-700 ">
            mdrakibhosen7862@gmail.com <br />
            shiningeducation.bd@gmail.com
          </p>
        </div>
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-5 lg:px-20  ">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3644242136681!2d90.37188789273623!3d23.79266813711903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cca7e99055%3A0x6c616db8bfcb1929!2s810%2C%202a%20W%20Shewrapara%20-%20Ibrahimpur%20Rd%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1720280518405!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col ">
          <p className="mb-3 font-normal text-gray-400 ">CONTACT US</p>
          <h5 className="mb-2 text-4xl  text-gray-900 font-bold  pb-5">
            Get in touch
          </h5>
          <form className="space-y-6">
            <div>
              <input
                id="name"
                type="text"
                placeholder="Your Name Here"
                className="w-full py-5 px-3 rounded border"
              />
            </div>
            <div>
              <input
                id="email"
                type=""
                placeholder="Your Email Here"
                className="w-full py-5 px-3 rounded border"
              />
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Your Massage Here ..."
                className="w-full py-5 px-3 rounded border"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-5 px-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
