import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ExperienceSection() {
  return (
    <section
      id="projects"
      className="container max-w-5xl border-b-2 py-8 md:py-12 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <h2 className="max-w-[64rem] text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          I build all things web related.
        </h2>
        <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          I&apos;ve got a solid grasp of web development, and I&apos;m pretty
          versatile when it comes to connecting the dots and fixing tricky
          issues. My jam is frontend development, especially with React.js and
          all the cool stuff it comes with.
        </p>
        <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Check out some of the work
          <Link
            className={cn(buttonVariants({ variant: "link" }), "text-base")}
            href={links.projects.path}
          >
            Here &rarr;
          </Link>
        </p>
      </div>
    </section>
  )
}
