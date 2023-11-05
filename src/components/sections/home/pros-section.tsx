import { ProsCard } from "@/components/pros-card"
import { cardData } from "@/lib/consts"

export function ProsSection() {
  return (
    <section
      id="pros-of-working-with-me"
      className="max-w-4xl py-8 md:container md:py-12 lg:py-24"
    >
      <div className="flex flex-col gap-8">
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
