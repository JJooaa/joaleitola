import { HeroSection } from "@/components/sections/home/hero-section"
import { ExperienceSection } from "@/components/sections/home/experience-section"
import { TechnologiesSection } from "@/components/sections/home/technologies-section"
import Projects from "@/components/sections/home/projects"
import WorkHistory from "@/components/sections/home/work-history"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <WorkHistory />
      <Projects />
      <TechnologiesSection />
    </>
  )
}
