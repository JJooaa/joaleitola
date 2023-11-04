import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container flex max-w-3xl flex-col space-y-4 py-8 md:py-12 lg:py-24"
    >
      <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
        Interested? Let&apos;s talk!
      </h2>
      <p className="max-w-2xl text-center leading-normal text-muted-foreground sm:text-lg sm:leading-8">
        I&apos;m always excited to hear about new projects and ideas.
      </p>
      <Link
        href={links.contact.path}
        className={cn(
          buttonVariants({ variant: "default" }),
          "mx-auto max-w-sm"
        )}
      >
        {links.contact.name}
      </Link>
    </section>
  )
}
