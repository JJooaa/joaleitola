import { buttonVariants } from "@/components/ui/button";
import { links } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container max-w-3xl py-8 md:py-12 lg:py-24 space-y-4 flex flex-col"
    >
      <h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Interested? Let&apos;s talk!
      </h2>
      <p className="leading-normal max-w-2xl text-muted-foreground sm:text-lg sm:leading-8 text-center">
        I&apos;m always excited to hear about new projects and ideas.
      </p>
      <Link
        href={links.contact.path}
        className={cn(
          buttonVariants({ variant: "default" }),
          "max-w-sm mx-auto"
        )}
      >
        {links.contact.name}
      </Link>
    </section>
  );
}
