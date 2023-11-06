import { ContactSection } from "@/components/sections/home/contact-section"
import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Maximize Results",
  description:
    "On this page, I'll guide you through our collaborative journey, from our initial contact to the successful delivery of your project.",
}

export default function MaximizingResults() {
  return (
    <>
      <div className="space-y-6 border-b pb-8 pt-6 md:container md:pb-12 md:pt-12 lg:py-32">
        <h2 className="mx-auto max-w-[64rem] text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Maximizing Results: Our Approach to Collaboration
        </h2>
        <p className="mx-auto max-w-[50rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 ">
          On this page, I&apos;ll guide you through our journey from initial
          contact to successful project delivery. Learn how we plan each step to
          ensure a seamless experience and maximize your investment value.
        </p>
      </div>

      <div className="lg:py-18 mx-auto max-w-4xl space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="flex gap-5 text-xl font-bold tracking-tighter sm:text-2xl md:gap-10 md:text-3xl lg:text-4xl">
          1. <span>Starting Our Journey:</span>
        </h3>
        <p className="ml-4 border-l-2 pl-4 leading-normal text-foreground sm:text-lg sm:leading-8 md:pl-12">
          Our process begins with an initial meeting where we&apos;ll have a
          detailed discussion about your specific needs and budget. This allows
          me to fully understand your requirements and provide you with a
          tailored offer that meets your expectations. I pride myself on my
          quick response time and will ensure that you receive a detailed
          proposal within 0-2 days, even on weekends. I value our partnership
          and believe that together we can achieve great things.
        </p>
      </div>

      <div className="lg:py-18 mx-auto max-w-4xl space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="flex gap-4 text-xl font-bold tracking-tighter sm:text-2xl md:gap-8 md:text-3xl lg:text-4xl">
          2. <span>Active Development:</span>
        </h3>
        <p className="ml-4 border-l-2 pl-4 leading-normal text-foreground sm:text-lg sm:leading-8 md:pl-12">
          I believe in a collaborative approach and follow an Agile/Kanban
          methodology. This means that you will actively participate in every
          step of the development process. You won&apos;t have to worry about
          any uncertainty regarding how your investment is being used because
          you will have full visibility into the progress being made. You will
          be able to see the results in real-time, allowing you to witness your
          ideas being transformed into reality with ease.
        </p>
      </div>

      <div className="lg:py-18 mx-auto max-w-4xl space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="flex gap-4 text-xl font-bold tracking-tighter sm:text-2xl md:gap-8 md:text-3xl lg:text-4xl">
          3. <span>Unlocking Your Vision:</span>
        </h3>
        <p className="ml-4 border-l-2 pl-4 leading-normal text-foreground sm:text-lg sm:leading-8 md:pl-12">
          This is where you will receive a Minimum Viable Product (MVP) that is
          specifically tailored to your needs. However, my commitment to you
          doesn&apos;t end there. I see our partnership as a long-term one and
          am dedicated to continuously evolve your project with you. I want to
          be your trusted development partner who can support you in achieving
          your vision for the future.
        </p>
      </div>
      <ContactSection />
    </>
  )
}
