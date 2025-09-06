import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Assistance from "@/components/sections/about/Assistance";
import HowWeWork from "@/components/sections/about/HowWeWork";
import OurImpact from "@/components/sections/about/OurImpact";
import WhatWeDo from "@/components/sections/about/WhatWeDo";

export default function Index() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <Assistance/>
      <HowWeWork/>
      <OurImpact/>
      <Footer />
    </>
  );
}
