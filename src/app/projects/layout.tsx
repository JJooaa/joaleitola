import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container flex-1">
			<div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
				<aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
					<MdxNavigation />
				</aside>
				<main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
					<div className="mx-auto w-full min-w-0">{children}</div>
				</main>
			</div>
		</div>
	);
}

export function MdxNavigation() {
	return (
		<div className="flex flex-col">
			<Link href="/projects/project-1">Project 1 </Link>
			<Link href="/projects/project-2">Project 2</Link>
			<Link href="/projects/project-3">Project 3</Link>
		</div>
	);
}
