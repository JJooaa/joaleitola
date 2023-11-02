import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    name: "Project 1",
    description: "Project 1 description",
    image: "https://placehold.co/600x400",
    link: "/projects/project-1",
  },
  {
    name: "Project 2",
    description: "Project 2 description",
    image: "https://placehold.co/600x400",
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    description: "Project 3 description",
    image: "https://placehold.co/600x400",
    link: "/projects/project-3",
  },
] as const;

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
      <div className="grid grid-cols-2 gap-8 mx-auto justify-items-center pt-6 md:pt-16 lg:py-18 pb-4 md:pb-6">
        {projects.map((project) => (
          <ProjectCard
            image={project.image}
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
