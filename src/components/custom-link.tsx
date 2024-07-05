import { links } from "@/constants/links"
import Link from "next/link"

type CustomLinkProps = (typeof links)[0]

export function CustomLink(props: CustomLinkProps) {
  const { href, icon, text } = props
  const Icon = icon

  return (
    <Link
      className="flex items-center gap-2 text-sm"
      href={href}
      target="_blank"
    >
      <Icon strokeWidth={1.5} className="h-4 w-4 text-foreground" />
      {text}
    </Link>
  )
}
