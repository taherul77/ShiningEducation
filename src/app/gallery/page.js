import GalleryComponent from '@/components/page/GalleryComponent/GalleryComponent'
import Banner from '@/components/ui/Banner/Banner';
import React from 'react'

const page = () => {
  const images = "/image/banner5.jpg";
  return (
    <div>
       <Banner img={images} heading={"Gallery"}></Banner>
      <GalleryComponent></GalleryComponent>
    </div>
  )
}

export default page
