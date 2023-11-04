import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Maximize Results",
  description:
    "I am a full stack developer from Finland. I create beautiful and easy to use web experiences.Consulting and freelance work available. Contact me for more information.",
}

export default function MaximizingResults() {
  return (
    <>
      <div className="space-y-6 border-b pb-8 pt-6 md:container md:pb-12 md:pt-12 lg:py-32">
        <h2 className="mx-auto max-w-[64rem] text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Maximizing Results: Our Approach to Collaboration
        </h2>
        <p className="mx-auto max-w-[50rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 ">
          On this page, I&apos;ll guide you through our collaborative journey,
          from our initial contact to the successful delivery of your project.
          Discover how we plan each step to ensure your experience working with
          me is not only seamless but also maximizes the value of your
          investment.
        </p>
      </div>

      <div className="lg:py-18 mx-auto max-w-4xl space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="flex gap-5 text-xl font-bold tracking-tighter sm:text-2xl md:gap-10 md:text-3xl lg:text-4xl">
          1. <span>Let&apos;s Begin our Journey with a Personal Meeting!</span>
        </h3>
        <p className="ml-4 border-l-2 pl-4 leading-normal text-foreground sm:text-lg sm:leading-8 md:pl-12">
          Our process starts with our initial contact, and from there,
          we&apos;ll arrange a meeting to get to know each other and establish a
          strong foundation.
          <br /> <br />
          During this meeting, I encourage you to open up and share your needs,
          desires, and budget considerations. I&apos;ll be taking thorough notes
          to ensure I understand your vision and requirements. Your input is
          invaluable in helping me create the perfect solution for you.
          <br /> <br />
          After our call, I&apos;ll get to work immediately on crafting a
          tailored offer that aligns with your unique goals and budget. The best
          part? You won&apos;t have to wait long. You can expect to hear from me
          within 0-2 days, even during the weekends.
          <br /> <br />
          With this personalized and efficient process, you&apos;re not just
          another client; you&apos;re a valued partner in our journey to
          success.
        </p>
      </div>

      <div className="lg:py-18 mx-auto max-w-4xl space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="flex gap-4 text-xl font-bold tracking-tighter sm:text-2xl md:gap-8 md:text-3xl lg:text-4xl">
          2. <span>Active Development Phase</span>
        </h3>
        <p className="ml-4 border-l-2 pl-4 leading-normal text-foreground sm:text-lg sm:leading-8 md:pl-12">
          I believe in a dynamic and customer-centric approach to web
          development, and when you work with me, it&apos;s not just a
          transaction; it&apos;s a partnership. I&apos;ve chosen
          Agile/Kanban-style development as our method of choice, and
          here&apos;s what that means for you: <br /> <br /> We&apos;re on the
          same page, you and I, collaborating closely to bring your vision to
          life. There&apos;s no guesswork, no uncertainty. You&apos;re an active
          part of every step in the development journey.
          <br /> <br /> Imagine having a brilliant idea or a sudden burst of
          inspiration. With our Agile/Kanban approach, you have the power to
          turn that idea into reality. Just make a ticket, and watch it come to
          life.
          <br />
          <br /> My transparent development process lets you see precisely where
          your investment is going. You witness results in real-time. No more
          uncertainty about how your money is being spent. With me, you can be
          confident that your investment is worth every penny, as you see
          tangible outcomes taking shape right before your eyes.
        </p>
      </div>

      <div className="lg:py-18 mx-auto max-w-4xl space-y-6 pb-4 pt-6 md:pb-6 md:pt-16">
        <h3 className="flex gap-4 text-xl font-bold tracking-tighter sm:text-2xl md:gap-8 md:text-3xl lg:text-4xl">
          3. <span>Unlocking Your Vision - The MVP and Beyond!</span>
        </h3>
        <p className="ml-4 border-l-2 pl-4 leading-normal text-foreground sm:text-lg sm:leading-8 md:pl-12">
          Once we&apos;ve laid the groundwork and worked closely together,
          we&apos;ll reach a pivotal moment where your MVP (minimum viable
          product) comes to fruition. This is the initial, essential version of
          your project, tailored to your specific requirements and objectives.
          <br /> <br />
          But here&apos;s where our process truly shines - the journey
          doesn&apos;t end here. If you find yourself yearning for more, whether
          it&apos;s additional features, enhancements, or entirely new ideas, we
          can seamlessly return to step 2 of our Agile development approach.
          Your project can continually evolve and adapt as your needs and
          desires grow.
          <br /> <br />
          With me, you&apos;re not just receiving a one-off solution;
          you&apos;re gaining a committed development partner for the long haul.
        </p>
      </div>
      <section
        id="contact"
        className="container flex max-w-3xl flex-col space-y-4 py-8 md:py-12 lg:py-24"
      >
        <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Interested? Let&apos;s talk!
        </h2>
        <p className="max-w-2xl text-center leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Ready to get started? I&apos;m excited to hear from you! Click the
          button below to get in touch.
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
    </>
  )
}
