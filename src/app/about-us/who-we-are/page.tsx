import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurCoreValues from "@/components/sections/about/OurCoreValues";
import TeamSlider from "@/components/sections/about/Team";
import MissionVision from "@/components/sections/about/VisionAndMission";
import WhereWeWork from "@/components/sections/about/WhereWeWork";
import WhoWeAre from "@/components/sections/about/WhoWeAre";

export default function Index() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <MissionVision />
      <OurCoreValues/>
      <TeamSlider />
      <WhereWeWork/>
      <Footer />
    </>
  );
}
