import SeminerComponent from '@/components/page/Seminar/SeminerComponent'
import Banner from '@/components/ui/Banner/Banner';
import React from 'react'

const Page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
       <Banner img={images} heading={"SEMINAR"}></Banner>
      <SeminerComponent></SeminerComponent>
    </div>
  )
}

export default Page
