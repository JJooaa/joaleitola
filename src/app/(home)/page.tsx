import React from "react";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ExperienceSection } from "@/components/sections/home/experience-section";
import { TechnologiesSection } from "@/components/sections/home/technologies-section";
import { ProsSection } from "@/components/sections/home/pros-section";
import { ContactSection } from "@/components/sections/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <TechnologiesSection />
      <ProsSection />
      <ContactSection />
    </>
  );
}
