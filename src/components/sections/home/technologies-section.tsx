import { Badge } from "@/components/ui/badge"

export function TechnologiesSection() {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-normal">Technologies.</h3>
      <div className="mx-auto mt-4 flex flex-wrap gap-2 font-normal">
        <Badge variant="outline" className="font-normal">
          React.js
        </Badge>
        <Badge variant="outline" className="font-normal">
          Next.js
        </Badge>
        <Badge variant="outline" className="font-normal">
          TailwindCSS
        </Badge>
        <Badge variant="outline" className="font-normal">
          CSS
        </Badge>
        <Badge variant="outline" className="font-normal">
          Typescript
        </Badge>
        <Badge variant="outline" className="font-normal">
          Node.js
        </Badge>
        <Badge variant="outline" className="font-normal">
          GraphQL
        </Badge>
        <Badge variant="outline" className="font-normal">
          PostgreSQL
        </Badge>
        <Badge variant="outline" className="font-normal">
          Prisma ORM
        </Badge>
        <Badge variant="outline" className="font-normal">
          Docker
        </Badge>
        <Badge variant="outline" className="font-normal">
          Vercel
        </Badge>
        <Badge variant="outline" className="font-normal">
          Hasura
        </Badge>
        <Badge variant="outline" className="font-normal">
          React Native
        </Badge>
        <Badge variant="outline" className="font-normal">
          Material UI
        </Badge>
        <Badge variant="outline" className="font-normal">
          ShadcnUI
        </Badge>
      </div>
    </div>
  )
}
