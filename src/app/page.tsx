import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { projectList } from "@/constants/projects"
import { ProjectCard } from "@/components/project-card"
import { technologyList } from "@/constants/technologies"
import { Badge } from "@/components/ui/badge"
import { Links } from "@/components/links"
import { FeatureCard } from "@/components/feature-card"
import { featureList } from "@/constants/features"
import { workExperienceList } from "@/constants/work-experiences"
import { WorkExperienceCard } from "@/components/work-experience-card"

export default async function Home() {
  // await new Promise((r) => setTimeout(r, 5000))
  return (
    <main className="my-12 p-4 md:p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="/joa_kuva.jpg"
            width={65}
            height={65}
            className="rounded-full"
            alt="Joa Leitola"
          />
          <h1 className="text-2xl font-normal leading-tight tracking-tighter">
            Joa Leitola <br />
            Full Stack Web Developer
          </h1>
        </div>
        <Links />
      </div>

      {/* --------- About me, pros, selling points --------- */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-normal">Fast website, happy customer.</h3>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {featureList.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Milliseconds can make millions, and I optimize your site for top
          performance.
          <Link
            href="https://web.dev/case-studies/milliseconds-make-millions"
            target="_blank"
            className="flex items-center gap-2 underline underline-offset-2"
          >
            <ArrowRightIcon className="h-4 w-4" />
            Milliseconds make millions.
          </Link>
        </p>
      </div>

      {/* ---------  Work History / Experience --------- */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-normal">Work experience.</h3>
        <div className="space-y-4">
          {workExperienceList.map((item) => (
            <WorkExperienceCard key={item.company} {...item} />
          ))}
        </div>
      </div>

      {/* --------- Projects --------- */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-normal">Projects.</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectList.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      {/* --------- Technologies --------- */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-normal">Technologies.</h3>
        <div className="mx-auto mt-4 flex flex-wrap gap-2 font-normal">
          {technologyList.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </main>
  )
}
