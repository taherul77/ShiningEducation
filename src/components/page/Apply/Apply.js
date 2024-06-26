import React from 'react'

const Apply = () => {
    const contactImg = "/image/contact/3.-Need-More-Info-Rotate-left.jpg"
    return (
      <div className="">
        
  
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-5 lg:px-20  ">
          <div className="flex flex-col justify-between">
            <img src={contactImg} alt="" />
          </div>
          <form noValidate="" className="space-y-6">
            <div className='text-4xl font-bold'>
            Apply Now
            </div>
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
              <input
                id="email"
                type="number"
                placeholder="Your Phone Number Here"
                className="w-full py-5 px-3 rounded border"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="3"
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
    )
}

export default Apply
