import { Metadata } from "next"
import Image from "next/image"
import { Mail, PhoneCall } from "lucide-react"
import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
import { ContactButton } from "@/components/contact-button"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact me via email, phone, LinkedIn or GitHub. I'm always open to new opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <div className="space-y-6 pt-6 md:container md:pt-12 lg:pt-32">
        <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Contact
        </h2>
        <p className="mx-auto max-w-[50rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Feel free to reach out to me through various channels. I am available
          for communication via social media, email, or phone. Let&apos;s
          connect and discuss how I can assist you in improving your
          website&apos;s performance and boosting your online presence.
        </p>
        <div className="mx-auto flex max-w-lg flex-col gap-4 py-8 sm:grid sm:grid-cols-2 md:py-12 lg:py-10">
          <ContactButton
            icon={<Mail />}
            href="mailto:leitola.joa@gmail.com"
            text="leitola.joa@gmail.com"
          />
          <ContactButton
            icon={<Github />}
            href="https://github.com/jjooaa"
            text="JJooaa"
          />
          <ContactButton
            icon={<Linkedin />}
            href="https://www.linkedin.com/in/joa-leitola-478515212/"
            text="Joa Leitola"
          />
          <ContactButton
            icon={<PhoneCall />}
            href="tel:+358400232551"
            text="+358 400232551"
          />
        </div>
        <Image
          width={200}
          height={200}
          src="/joa_kuva.jpg"
          alt="Joa Leitola - Full Stack Web Developer Headshot"
          className="mx-auto rounded-full border border-primary"
        />
      </div>
    </>
  )
}
