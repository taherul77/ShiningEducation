import React from 'react'

const Success = () => {
    const successImg = "/image/about/2.-Success-Stories.jpg"
  return (
    <div>
       <div className="grid lg:grid-cols-2 gap-10 ">
        <div>
          <img src={successImg} alt="" />
        </div>
        <div>
          <div>
            <h2 className="text-3xl text-gray-800">Hashigo JLC's</h2>
            <h1 className="text-5xl font-bold">Success Story</h1>
          </div>
          <div>
            <p className="text-justify pt-5 text-gray-700">In this fast-moving world of competition, JAPAN is a dream destination for intellectual people who want to be successful in their life. Not only for attractive salary & other facilities, but also Japan became the first choice for students & job seekers pursuing independence and ambition. This situation makes language proficiency in Japanese and cultural openness prime criteria for the people trying to be there in the future. With those skills achieving a Japanese visa, clearance from professional institutions becomes easier.</p>
            <p className="text-justify pt-5 text-gray-700">With the vision to provide proper & complete consultancy on language efficiency to the interested students & job seekers, we commenced the ”Hashigo Japanese Language Center”. You can contact us for Japanese Language learning, Student & Job Visa Processing, and job finding purposes. We can ensure the best possible services & it will be a life-changing journey between you and Hashigo JLC. We will be there from the beginning to the end of your voyage.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Success
