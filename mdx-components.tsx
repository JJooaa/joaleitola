import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-foreground [&:not(:first-child)]:mt-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    a: ({ children, href }) => (
      <a
        target="_blank"
        href={href}
        className="font-medium text-primary underline underline-offset-4"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
