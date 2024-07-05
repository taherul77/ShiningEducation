import React from 'react'

const Category = () => {
    const icon1= "/image/icons/1.png"
    const icon2= "/image/icons/1.png"
    const icon3= "/image/icons/1.png"
  return (
    <div>
      <div className="grid lg:grid-cols-3 py-10  lg:px-24 gap-8 ">
        <div className="bg-blue-300 px-10 py-10 rounded-md relative">
          <div className="flex items-center gap-5 ">
            <img src={icon1} alt="" className="w-20" />
            <h2 className="text-xl font-bold ">Japanese Language</h2>
            <div className="">
              <h1 className="absolute top-0 right-0 bg-slate-900 rounded-es-full px-5 py-2 font-bold text-left text-white">
                01
              </h1>
            </div>
          </div>
          <div>
            <h3 className="mt-10 text-base font-semibold text-justify">
              We provide Japanese language course, document aid, and other
              necessary support for the students and immigrants.
            </h3>
          </div>
        </div>

        <div className="bg-blue-400 px-10 py-10 rounded-md relative">
          <div className="flex items-center gap-5 ">
            <img src={icon2} alt="" className="w-20" />
            <h2 className="text-xl font-bold ">Study In Japan</h2>
            <div className="">
              <h1 className="absolute top-0 right-0 bg-slate-900 rounded-es-full px-5 py-2 font-bold text-left text-white">
                02
              </h1>
            </div>
          </div>
          <div>
            <h3 className="mt-10 text-base font-semibold text-justify">
              If you are looking for detailed guidelines to get admission into a
              Japanese University, then you are in the right place.
            </h3>
          </div>
        </div>

        <div className="bg-blue-500 px-10 py-10 rounded-md relative">
          <div className="flex items-center gap-5 ">
            <img src={icon3} alt="" className="w-20" />
            <h2 className="text-xl font-bold ">Work In Japan</h2>
            <div className="">
              <h1 className="absolute top-0 right-0 bg-slate-900 rounded-es-full px-5 py-2 font-bold text-left text-white">
                03
              </h1>
            </div>
          </div>
          <div>
            <h3 className="mt-10 text-base font-semibold text-justify">
              We are here to help you find your destined position that you are
              looking to pursue. With all the necessary support ready to provide
              you.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
