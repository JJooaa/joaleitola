import { cn } from "@/lib/utils"

export const Typography1 = ({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: string
}) => {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold lg:text-5xl", styles)}
    >
      {children}
    </h1>
  )
}

export const Typography2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold transition-colors first:mt-0">
      {children}
    </h2>
  )
}

export const Typography3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="mt-8 scroll-m-20 text-2xl font-semibold">{children}</h3>
}

export const TypographyP = ({ children }: { children: React.ReactNode }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

export const TypographyBlockQuote = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  )
}

export const TypographyUnOrderedList = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
}
