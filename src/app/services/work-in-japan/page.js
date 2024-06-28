import WorkInJapan from '@/components/page/Service/WorkInJapan/WorkInJapan'
import Banner from '@/components/ui/Banner/Banner';
import React from 'react'

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"work in japan"}></Banner>
      <WorkInJapan></WorkInJapan>
    </div>
  )
}

export default page
