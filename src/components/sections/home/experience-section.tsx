import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ExperienceSection() {
  return (
    <section
      id="crafting-digital-experiences"
      className="mx-auto max-w-4xl border-b-2 py-8 md:py-12 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <h2 className="max-w-[64rem] text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Crafting Digital Experiences
        </h2>
        <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          I provide various services to enhance the performance of your website
          and improve your online presence. These services include offering
          advice on effective strategies, optimizing website performance,
          creating functional and visually appealing websites, and improving
          user experience through application development.
          <br />
          <br />
          Additionally, I have a growing interest in SEO and I am committed to
          using search engine optimization techniques to increase the visibility
          of your website and attract more traffic to your business. Whether you
          require consulting or freelance web development services, I can
          deliver outstanding results tailored to your specific needs.
        </p>
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "gap-4 self-start"
          )}
          href={links.myServices.path}
        >
          Read More
          <ArrowRight />
        </Link>
      </div>
    </section>
  )
}
