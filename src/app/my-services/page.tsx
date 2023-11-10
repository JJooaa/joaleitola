import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "My Services",
  description:
    "What makes me different is that I actively embrace the latest advancements and keep up with the fast pace of technological innovation.",
  keywords: [
    "web development",
    "web design",
    "software development",
    "software design",
    "server rendering",
    "server side rendering",
    "ssr",
    "seo",
    "search engine optimization",
    "performance",
    "user experience",
    "user interface",
    "ui",
    "ux",
    "low end devices",
    "slow internet",
    "social media",
    "sharing",
  ],
}

export default function MyServices() {
  return (
    <>
      <div className="space-y-6 border-b pb-8 pt-6 md:container md:pb-12 md:pt-12 lg:py-32">
        <h2 className="mx-auto max-w-[64rem] text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Introducing My Services
        </h2>
        <p className="mx-auto max-w-[50rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 ">
          What makes me different is that I actively embrace the latest
          advancements and keep up with the fast pace of technological
          innovation. This means that I am always ahead, using the latest
          technology to provide excellent services and solutions.
        </p>
      </div>
      <div className="lg:py-18 mx-auto flex max-w-4xl flex-col justify-center space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
          Here&apos;s What I Offer:
        </h3>
        <p className="leading-normal sm:text-lg sm:leading-8">
          In web development, how you show your website to users greatly affects
          how they experience it and how successful it is. The latest
          technologies leverage a thing called server rendering. Here is what
          that means for you.
        </p>
        <ol className="ml-4 flex list-disc flex-col gap-4 leading-normal sm:text-lg sm:leading-8">
          <li>
            <b>Faster Page Loading Times: </b>
            Server rendering can make web pages load faster by implementing
            various optimizations, resulting in a greater user experience.
            Ultimately, this method improves the performance and usability of
            websites.
          </li>
          <li>
            <b>Improved SEO: </b>
            This basically means: better search visibility: Server rendering
            improves the page&apos;s visibility to search engines, leading to
            higher search rankings.
          </li>
          <li>
            <b>Improved User Experience: </b>
            Server rendering improves the loading speed of the initial page,
            resulting in a more responsive and smoother interface.
          </li>
          <li>
            <b>Better Performance on Low-End Devices: </b>
            Server rendering is great for users on low-end devices or slow
            internet connections. It helps reach a larger audience without
            requiring as much processing on the users machine.
          </li>
          <li>
            <b>Easy Sharing on Social Media: </b>
            Server-rendered content makes it easier to share on social media.
            Customizable links with additional information and previews make the
            content more appealing and interesting to potential visitors.
          </li>
        </ol>
        <p className="leading-normal sm:text-lg sm:leading-8">
          In general the experience of the user is greatly improved, which means
          that they are more likely to stay on your website and convert. Thats
          what I offer.
        </p>
        <p className="text-center text-xl font-bold leading-normal sm:text-2xl sm:leading-8 md:pt-8">
          If you are interested and want to know more.
        </p>
        <Link
          href={links.workingWithMe.path}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "gap-4 self-center"
          )}
        >
          Read More
          <ArrowRight />
        </Link>
      </div>
    </>
  )
}
