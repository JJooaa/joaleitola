import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  icon: React.ReactNode
  title: string
  description: string
}

export function ProsCard({ icon, title, description }: Props) {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2">
          {icon}
          <p className="text-base font-normal">{title}</p>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
