import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/consts"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function BackButton() {
  return (
    <Link
      href={links.projectsAndTools.path}
      className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
    >
      <ArrowLeft />
      <span>Go Back</span>
    </Link>
  )
}
