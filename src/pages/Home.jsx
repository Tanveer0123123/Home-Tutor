import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import AboutUs from "../components/home/AboutUs";
import AreasWeServe from "../components/home/AreasWeServe";
import CTASection from "../components/home/CTASection";
import Testimonials from "../components/home/Testimonials";
import OurServices from "../components/home/OurServices";
import TutorProfiles from "../components/home/TutorProfiles";
import Achievements from "../components/home/Achievements";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <OurServices/>
      <HowItWorks />
      <AreasWeServe />
      <TutorProfiles/>
      <Achievements/>
      <Testimonials/>
      <CTASection />
    </>
  );
};

export default Home;
