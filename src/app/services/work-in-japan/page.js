import WorkInJapan from '@/components/page/Service/WorkInJapan/WorkInJapan'
import Banner from '@/components/ui/Banner/Banner';
import Wrapper from '@/components/ui/Wrapper/Wrapper';

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"work in japan"}></Banner>

      <Wrapper>
      <WorkInJapan></WorkInJapan>
      </Wrapper>
   
    </div>
  )
}

export default page
