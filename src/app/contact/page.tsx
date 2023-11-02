import { Metadata } from "next";
import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ContactButton } from "@/components/contact-button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I am a full stack developer from Finland. I create beautiful and easy to use web experiences.Consulting and freelance work available. Contact me for more information.",
};

export default function ContactPage() {
  return (
    <>
      <div className="container space-y-6 pt-6 md:pt-12 lg:pt-32">
        <h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Here&apos;s how you can reach me
        </h2>
        <p className="max-w-[50rem] mx-auto leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          I use all types of socials etc, that you can contact me with. I prefer
          emails for initial contacts. If we work together, I make sure we
          communicate via phones.
        </p>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 max-w-lg mx-auto py-8 md:py-12 lg:py-10">
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
          src="/joa_kuva.jpeg"
          alt="Joa Leitola - Headshot"
          className="rounded-full mx-auto"
        />
      </div>
    </>
  );
}
