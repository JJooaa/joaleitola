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
          I build All Things Web Related
        </h2>
        <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          I&apos;m pretty solid when it comes to web development. I really enjoy
          working on the frontend, especially with Next.js/React.js and all the
          cool stuff it brings to the table. It&apos;s my go-to stack for
          crafting awesome user interfaces and experiences. I&apos;m always
          learning and staying up-to-date with the latest tech to stay ahead in
          this fast-paced industry.
        </p>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Check out some of the work I&apos;ve done in the past - or that
          I&apos;m currently working on.
        </p>
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "gap-4 self-start"
          )}
          href={links.projects.path}
        >
          Projects &rarr;
        </Link>
      </div>
    </section>
  )
}
