import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b-2 pb-8 pt-6 md:container md:pb-12 md:pt-12 lg:py-32"
    >
      <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center md:container">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Joa Leitola <br /> Full Stack Web Developer
        </h1>
        <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Whether you&apos;re looking for a freelance web developer, seeking
          expert consulting on web development projects, or need a reliable
          partner for your software needs, you&apos;re in the right place. I
          specialize in web development technologies like React.js, Next.js,
          TypeScript and the ecosystem around them.
        </p>
        <div className="flex flex-wrap-reverse justify-center gap-2">
          <Link
            className={cn(buttonVariants({ variant: "default" }), "px-6")}
            href={links.contact.path}
          >
            {links.contact.name}
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "secondary" }), "px-6")}
            href="#crafting-digital-experiences"
          >
            What To Expect?
          </Link>
        </div>
      </div>
    </section>
  )
}
