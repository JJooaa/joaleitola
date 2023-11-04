import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import { AtSign, Github } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="container space-y-6 border-b-2 pb-8 pt-6 md:pb-12 md:pt-12 lg:py-32"
    >
      <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center md:container">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Joa Leitola. <br /> Full Stack Developer.
        </h1>
        <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          My goal is to create seamlessly easy to use and beautiful web
          experiences. It all starts with thorough planning, turning ideas into
          reality. And then finally developing and fine tuning code that works.
        </p>
        <div className="flex gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            href={links.contact.path}
          >
            <AtSign />
            {links.contact.name}
          </Link>
          <Link
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            href={links.github.path}
          >
            <Github />
            {links.github.name}
          </Link>
        </div>
      </div>
    </section>
  )
}
