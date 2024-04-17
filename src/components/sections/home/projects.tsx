import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/consts"

export default async function Projects() {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-normal">Projects.</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
