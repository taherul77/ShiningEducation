import JapaneseLanguageComponent from "@/components/page/Service/JapaneseLanguage/JapaneseLanguageComponent";
import Banner from "@/components/ui/Banner/Banner";
import Wrapper from "@/components/ui/Wrapper/Wrapper";


const JapaneseLanguage = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
      <Banner img={images} heading={"Japanese Language"}></Banner>
      <Wrapper>
        <JapaneseLanguageComponent></JapaneseLanguageComponent>
      </Wrapper>
    </div>
  );
};

export default JapaneseLanguage;
