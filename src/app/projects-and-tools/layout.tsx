export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-8 pt-6 md:py-12 lg:py-32">
      {children}
    </div>
  )
}
