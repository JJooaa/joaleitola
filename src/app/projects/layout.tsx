export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-3xl space-y-6 pt-6 md:pt-12 lg:py-32 pb-8 md:pb-12">
      {children}
    </div>
  );
}
