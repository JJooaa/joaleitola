import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

export function ProjectCard({
  title,
  description,
  href,
  technologies,
}: {
  title: string
  description: string
  href: string
  technologies: readonly string[]
}) {
  return (
    <Card className="relative w-full max-w-sm rounded-lg ring-primary transition-all duration-300 md:hover:-translate-y-1 md:hover:ring-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1">
        {technologies?.map((technology) => (
          <Badge key={technology} variant="secondary">
            {technology}
          </Badge>
        ))}
      </CardContent>
      <CardFooter>
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "z-10")}
          href={href}
        >
          Read More
        </Link>
      </CardFooter>
      <Link className="absolute inset-0" href={href} />
    </Card>
  )
}
