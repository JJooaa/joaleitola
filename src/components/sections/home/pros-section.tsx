import { ProsCard } from "@/components/pros-card"
import { cardData } from "@/lib/consts"

export function ProsSection() {
  return (
    <section
      id="pros-of-working-with-me"
      className="container max-w-5xl py-8 md:py-12 lg:py-24"
    >
      <div className="flex flex-col gap-8">
        <h2 className="max-w-[64rem] text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Pros of working with me
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {cardData.map((item) => (
            <ProsCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={<item.icon />}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
