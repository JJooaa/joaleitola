import { ProsCard } from "@/components/pros-card";
import { cardData } from "@/lib/consts";

export function ProsSection() {
  return (
    <section
      id="pros-of-working-with-me"
      className="container py-8 md:py-12 lg:py-24 max-w-5xl"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl max-w-[64rem] text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Pros of working with me.
        </h2>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-8">
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
  );
}
