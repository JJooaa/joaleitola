import { Building2Icon, CalendarDaysIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { workExperienceList } from "@/constants/work-experiences"

type WorkExperienceCardProps = (typeof workExperienceList)[0]

export function WorkExperienceCard(props: WorkExperienceCardProps) {
  const { title, company, dateRange, description, listItems } = props

  return (
    <Card className="space-y-2 rounded-none border-0 border-b p-0 pb-4 shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="p-0 text-base font-normal">{title}</CardTitle>
        <CardDescription className="text-foreground">
          <span className="flex items-center gap-1">
            <Building2Icon
              strokeWidth={1.5}
              className="h-3 w-3 text-foreground"
            />
            {company}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDaysIcon
              strokeWidth={1.5}
              className="h-3 w-3 text-foreground"
            />
            {dateRange}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 text-sm text-muted-foreground">
        {description && description}
        {listItems.length > 0 && (
          <ul className="ms-4 mt-2 list-outside list-disc space-y-1">
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
