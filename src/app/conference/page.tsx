import ConferenceSchedule from "@/components/sections/conference-data/ConferenceSchedule";
import FeaturedPresenters from "@/components/sections/conference-data/FeaturedPresenters";
import HeroConference from "@/components/sections/conference-data/HeroSection";
import JoinUs from "@/components/sections/conference-data/JoinUs";
import QuestionsForConference from "@/components/sections/conference-data/QuestionsForConference";
import ReasonsToAttend from "@/components/sections/conference-data/ReasonsToAttend";
import TopicsInclude from "@/components/sections/conference-data/TopicsInclude";
import WhyAttend from "@/components/sections/conference-data/WhyAttend";

export default function Index() {
  return (
    <>
      <HeroConference/>
      <JoinUs/>
      <WhyAttend/>
      <ReasonsToAttend/>
      <ConferenceSchedule/>
      <TopicsInclude/>
      <FeaturedPresenters/>
      <QuestionsForConference/>
    </>
  );
}