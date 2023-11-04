import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center space-y-6 pt-6 md:pt-12 lg:pt-32">
      <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
        Not Found
      </h2>
      <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Could not find requested resource
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
        Return Home
      </Link>
    </div>
  )
}
