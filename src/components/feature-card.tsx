import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { featureList } from "@/constants/features"
import { type LucideIcon } from "lucide-react"

type FeatureCardProps = {
  icon: LucideIcon
} & (typeof featureList)[0]

export function FeatureCard(props: FeatureCardProps) {
  const { icon, title, description } = props
  const Icon = icon

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2">
          <Icon strokeWidth={1.5} className="h-4 w-4" />
          <p className="text-base font-normal">{title}</p>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
