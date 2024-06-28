import JapaneseLanguageComponent from '@/components/page/Service/JapaneseLanguage/JapaneseLanguageComponent'
import Banner from '@/components/ui/Banner/Banner';
import React from 'react'

const JapaneseLanguage = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"Japanese Language"}></Banner>
      <JapaneseLanguageComponent></JapaneseLanguageComponent>
    </div>
  )
}

export default JapaneseLanguage
