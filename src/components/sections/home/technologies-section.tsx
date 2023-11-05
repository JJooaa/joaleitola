import { Badge } from "@/components/ui/badge"

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="flex max-w-3xl flex-col items-center border-b-2 py-4 pb-12 md:container"
    >
      <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
        <Badge variant="secondary">React.js</Badge>
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="secondary">TailwindCSS</Badge>
        <Badge variant="secondary">Typescript</Badge>
        <Badge variant="secondary">Node.js</Badge>
        <Badge variant="secondary">GraphQL</Badge>
        <Badge variant="secondary">PostgreSQL</Badge>
        <Badge variant="secondary">MongoDB</Badge>
        <Badge variant="secondary">Prisma</Badge>
        <Badge variant="secondary">Docker</Badge>
      </div>
    </section>
  )
}
