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
    <Card className="relative w-full max-w-sm rounded-lg ring-primary transition-all duration-300 hover:-translate-y-1 hover:ring-1">
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
      <Link className="absolute inset-0" href={href} />
      <span className="sr-only">View Project</span>
    </Card>
  )
}
