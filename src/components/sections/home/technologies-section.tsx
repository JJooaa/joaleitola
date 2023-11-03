import { Badge } from "@/components/ui/badge";

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="container max-w-3xl py-8 md:py-12 lg:py-24 flex flex-row-reverse border-b-2"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl max-w-[64rem] tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Tech I work with.
        </h2>
        <p className="leading-normal max-w-2xl text-muted-foreground sm:text-lg sm:leading-8 text-center">
          Used these all quite a bit. There is more, but these are the big
          keywords where recruiters or customers might get excited for. The
          ecosystems are also tightly included when working with these
          technologies.
        </p>
        <div className="flex flex-wrap gap-2 max-w-lg justify-center mx-auto">
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
  );
}
