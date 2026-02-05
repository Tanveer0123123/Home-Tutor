// import PageHero from "../components/common/PageHero";
// import AboutIntro from "../components/about/AboutIntro";
// import WhyChooseAbout from "../components/about/WhyChooseAbout";
// import MissionVision from "../components/about/MissionVision";
// import WhyChooseUs from "../components/WhyChooseUs";
// import StatsCounter from "../components/StatsCounter";

import AboutIntro from "../components/about/AboutIntro";
import MissionVision from "../components/about/MissionVision";
import WhyChooseAbout from "../components/about/WhyChooseAbout";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Achievements from "../components/home/Achievements";

const AboutUS = () => {
  return (
    <>
      <AboutIntro />
      <WhyChooseUs/>
      <WhyChooseAbout />
      <MissionVision />
      <Achievements/>
    </>
  );
};

export default AboutUS;
