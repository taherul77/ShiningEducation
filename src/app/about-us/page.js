import AboutComponent from '@/components/page/AboutComponent/AboutComponent'
import Banner from '@/components/ui/Banner/Banner'
import Wrapper from '@/components/ui/Wrapper/Wrapper';
import React from 'react'

const page = () => {
  const images = "/image/banner5.jpg";
  return (
    <div>
      <Banner img={images} heading={"About Us "}></Banner>
      <Wrapper>
      <AboutComponent></AboutComponent>

      </Wrapper>
      
    </div>
  )
}

export default page
