import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProsCard } from "./card-section"
import { cardData } from "@/lib/consts"

export function ExperienceSection() {
  return (
    <div className="mt-8 space-y-4 text-sm">
      <h3 className="text-xl font-normal">Fast website, happy customer.</h3>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {cardData.map((item) => (
          <ProsCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={<item.icon strokeWidth={1.5} className="h-4 w-4" />}
          />
        ))}
      </div>
      <p className="text-muted-foreground">
        Speed and performance are a must for a succesful business. That&apos;s
        what I do.
        <Link
          href="https://web.dev/case-studies/milliseconds-make-millions"
          target="_blank"
          className="flex items-center gap-2 underline underline-offset-2"
        >
          <ArrowRight className="h-4 w-4" />
          Milliseconds make millions.
        </Link>
      </p>
    </div>
  )
}
