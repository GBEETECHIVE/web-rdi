import Contribute from "@/components/sections/home/Contribute";
import Counter from "@/components/sections/home/Counter";
import HeroCarousel from "@/components/sections/home/HeroCarousel";
import KeyEvents from "@/components/sections/home/KeyEvents";
import KnowAboutUs from "@/components/sections/home/KnowAboutUs";
import PartnerLogoSlider from "@/components/sections/home/Partners";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import WhereWeWork from "@/components/sections/home/WhereWeWork";

export default function Index() {
  return (
    <>
      <HeroCarousel />
      <KnowAboutUs />
      <Counter />
      <WhatWeDo />
      <WhereWeWork />
      <Contribute />
      <KeyEvents/>
      <PartnerLogoSlider/>
    </>
  );
}
