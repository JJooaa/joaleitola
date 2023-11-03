import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/consts";

export default function Projects() {
  return (
    <>
      <h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Some of my projects
      </h2>
      <p className="max-w-[50rem] mx-auto leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
        On this page I&apos;ll outline the process of working with me. From the
        first contact to the final delivery of the project. Everything is
        planned so the experience working with me is as smooth as possible.
        Giving you the most value for your money.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto justify-items-center pt-6 md:pt-16 lg:py-18 pb-4 md:pb-6">
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
  );
}
