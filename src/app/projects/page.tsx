import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/consts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "I am a full stack developer from Finland. I create beautiful and easy to use web experiences.Consulting and freelance work available. Contact me for more information.",
}

export default function Projects() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
        Some of my projects
      </h2>
      <p className="mx-auto max-w-[50rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        This is where I showcase some of the software projects I&apos;ve worked
        on. Take a look at the diverse range of creations, from apps to
        websites, and get a feel for my coding experience.
      </p>
      <div className="lg:py-18 mx-auto grid max-w-3xl grid-cols-1 justify-items-center gap-8 pb-4 pt-6 md:grid-cols-2 md:pb-6 md:pt-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            href={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </>
  )
}
