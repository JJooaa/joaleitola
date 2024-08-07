import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { projectList } from "@/constants/projects"

type ProjectProps = (typeof projectList[0])

export function ProjectCard(props: ProjectProps) {
  const { title, description, technologies } = props

  return (
    <Card className="space-y-4 border-0 shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="text-base font-normal">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 p-0">
        {technologies?.map((technology) => (
          <Badge key={technology} variant="outline" className="font-normal">
            {technology}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}
