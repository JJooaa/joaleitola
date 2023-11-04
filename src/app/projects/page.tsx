import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/consts"

export default function Projects() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
        Some of my projects
      </h2>
      <p className="mx-auto max-w-[50rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        On this page I&apos;ll outline the process of working with me. From the
        first contact to the final delivery of the project. Everything is
        planned so the experience working with me is as smooth as possible.
        Giving you the most value for your money.
      </p>
      <div className="lg:py-18 mx-auto grid grid-cols-1 justify-items-center gap-8 pb-4 pt-6 md:grid-cols-2 md:pb-6 md:pt-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            href={project.link}
          />
        ))}
      </div>
    </>
  )
}
