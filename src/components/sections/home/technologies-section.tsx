import { Badge } from "@/components/ui/badge"

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="container flex max-w-3xl flex-row-reverse border-b-2 py-8 md:py-12 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <h2 className="max-w-[64rem] text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Tech Toolbox
        </h2>
        <p className="max-w-2xl text-center leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          These are my go-to tools. There&apos;s more in my arsenal, but these
          are the big players that get recruiters and clients buzzing.
        </p>
        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
          <Badge className="bg-blue-500">React.js</Badge>
          <Badge className="bg-red-500">Next.js</Badge>
          <Badge className="bg-cyan-500">TailwindCSS</Badge>
          <Badge className="bg-yellow-500">Typescript</Badge>
          <Badge className="bg-orange-500">Node.js</Badge>
          <Badge className="bg-purple-500">GraphQL</Badge>
          <Badge className="bg-gray-500">PostgreSQL</Badge>
          <Badge className="bg-blue-500">MongoDB</Badge>
          <Badge className="bg-emerald-500">Prisma</Badge>
          <Badge className="bg-sky-500">Docker</Badge>
        </div>
      </div>
    </section>
  )
}
