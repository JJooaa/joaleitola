import {
  Building2,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src="/joa_kuva.jpg"
          width={65}
          height={65}
          className="rounded-full shadow-md"
          alt="Joa Leitola"
        />
        <h1 className="text-2xl font-normal leading-tight tracking-tighter">
          Joa Leitola <br />
          Full Stack Web Developer
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <Link
          className="flex items-center gap-2 text-sm"
          href="https://sisuvideo.fi"
          target="_blank"
        >
          <Building2 strokeWidth={1.5} className="h-4 w-4 text-foreground" />
          Sisu Video Oy
        </Link>
        <Link
          target="_blank"
          href="mailto:leitola.joa@gmail.com"
          className="flex items-center gap-2 text-sm"
        >
          <Mail strokeWidth={1.5} className="h-4 w-4 text-foreground" />
          leitola.joa@gmail.com
        </Link>
        <Link
          href="tel:+358400232551"
          className="flex items-center gap-2 text-sm"
          target="_blank"
        >
          <PhoneCall strokeWidth={1.5} className="h-4 w-4 text-foreground" />
          +358 400232551
        </Link>
        <Link
          href="https://github.com/jjooaa"
          className="flex items-center gap-2 text-sm"
          target="_blank"
        >
          <Github strokeWidth={1.5} className="h-4 w-4 text-foreground" />
          JJooaa
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/joa-leitola-478515212/"
          className="flex items-center gap-2 text-sm"
        >
          <Linkedin strokeWidth={1.5} className="h-4 w-4 text-foreground" />
          Joa Leitola
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/JoaLeitola"
          className="flex items-center gap-2 text-sm"
        >
          <Twitter strokeWidth={1.5} className="h-4 w-4 text-foreground" />
          @JoaLeitola
        </Link>
      </div>
    </div>
  )
}
