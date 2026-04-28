import FeaturedPresenters from "@/components/sections/conference-data-spanish/FeaturedPresenters";
import HeroConference from "@/components/sections/conference-data-spanish/HeroSection";
import JoinUs from "@/components/sections/conference-data-spanish/JoinUs";
import QuestionsForConference from "@/components/sections/conference-data-spanish/QuestionsForConference";
import ReasonsToAttend from "@/components/sections/conference-data-spanish/ReasonsToAttend";
import TopicsInclude from "@/components/sections/conference-data-spanish/TopicsInclude";
import WhyAttend from "@/components/sections/conference-data-spanish/WhyAttend";

export default function Index() {
  return (
    <>
      <HeroConference/>
      <JoinUs/>
      <WhyAttend/>
      <ReasonsToAttend/>
      {/* <ConferenceSchedule/> */}
      <TopicsInclude/>
      <FeaturedPresenters/>
      <QuestionsForConference/>
    </>
  );
}