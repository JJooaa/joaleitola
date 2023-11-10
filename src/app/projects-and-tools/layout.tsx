export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 pt-6 md:pt-12 lg:pt-32">
      {children}
    </div>
  )
}
