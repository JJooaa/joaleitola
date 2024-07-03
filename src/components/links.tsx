import {
  Building2Icon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "lucide-react"
import Link from "next/link"

export function Links() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      <Link
        className="flex items-center gap-2 text-sm"
        href="https://sisuvideo.fi"
        target="_blank"
      >
        <Building2Icon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
        Sisu Video Oy
      </Link>
      <Link
        target="_blank"
        href="mailto:leitola.joa@gmail.com"
        className="flex items-center gap-2 text-sm"
      >
        <MailIcon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
        leitola.joa@gmail.com
      </Link>
      <Link
        href="tel:+358400232551"
        className="flex items-center gap-2 text-sm"
        target="_blank"
      >
        <PhoneCallIcon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
        +358 400232551
      </Link>
      <Link
        href="https://github.com/jjooaa"
        className="flex items-center gap-2 text-sm"
        target="_blank"
      >
        <GithubIcon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
        JJooaa
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/joa-leitola-478515212/"
        className="flex items-center gap-2 text-sm"
      >
        <LinkedinIcon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
        Joa Leitola
      </Link>
      <Link target="_blank" className="flex items-center gap-2 text-sm" href="">
        <MapPinIcon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
        Helsinki, Finland
      </Link>
    </div>
  )
}
