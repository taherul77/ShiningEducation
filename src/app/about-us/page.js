import AboutComponent from '@/components/page/AboutComponent/AboutComponent'
import Banner from '@/components/ui/Banner/Banner'
import React from 'react'

const page = () => {
  const images = "/image/banner5.jpg";
  return (
    <div>
      <Banner img={images} heading={"About Us "}></Banner>
      <AboutComponent></AboutComponent>
    </div>
  )
}

export default page
