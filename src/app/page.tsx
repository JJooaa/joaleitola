import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { links } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { AtSign, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section
				id="hero"
				className="container space-y-6 pt-6 md:pt-12 lg:py-32 pb-8 md:pb-12 border-b-2"
			>
				<div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
					<h1 className="text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						Joa Leitola. <br /> Full Stack Developer.
					</h1>
					<p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
						My goal is to create seamlessly easy to use and beautiful web
						experiences. It all starts with thorough planning, turning ideas
						into reality. And then finally developing and fine tuning code that
						works.
					</p>
					<div className="flex gap-2">
						<Link
							className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
							href={links.contact.path}
						>
							<AtSign />
							{links.contact.name}
						</Link>
						<Link
							target="_blank"
							className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
							href={links.github.path}
						>
							<Github />
							{links.github.name}
						</Link>
					</div>
				</div>
			</section>
			<section
				id="projects"
				className="container py-8 md:py-12 lg:py-24 max-w-5xl border-b-2"
			>
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl max-w-[64rem] tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
						I build all things web related.
					</h2>
					<p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
						I&apos;ve got a solid grasp of web development, and I&apos;m pretty
						versatile when it comes to connecting the dots and fixing tricky
						issues. My jam is frontend development, especially with React.js and
						all the cool stuff it comes with.
					</p>
					<p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
						Check out some of the work
						<Link
							className={cn(buttonVariants({ variant: "link" }), "text-base")}
							href={links.projects.path}
						>
							Here &rarr;
						</Link>
					</p>
				</div>
			</section>
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
						keywords where recruiters or customers might get excited for.
						It&apos;s not much but it&apos;s honest work.
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
			<section
				id="working-with-me"
				className="container py-8 md:py-12 lg:py-24 max-w-5xl"
			>
				<div className="flex flex-col gap-8">
					<h2 className="text-2xl max-w-[64rem] text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
						Why choose me?
					</h2>
					<div className="flex gap-8 flex-wrap justify-evenly">
						<Card className="max-w-md">
							<CardHeader>
								<CardTitle>Modern Solutions</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									I&apos;m always up to date with the latest technologies.
									I&apos;m not afraid to try new things and I&apos;m always
									looking for ways to improve my workflow.
								</CardDescription>
							</CardContent>
						</Card>
						<Card className="max-w-md">
							<CardHeader>
								<CardTitle>Consulting experience</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									I&apos;ve worked with clients from all over the world.
									I&apos;m used to working with remote teams and I&apos;m a
									great communicator.
								</CardDescription>
							</CardContent>
						</Card>
						<Card className="max-w-md">
							<CardHeader>
								<CardTitle>Progressive Development</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									Starting by creating an initial working version of an app. If
									you feel satisfied with the product, we keep implementing new
									features. If not, we can always go back to the drawing board.
								</CardDescription>
							</CardContent>
						</Card>
						<Card className="max-w-md">
							<CardHeader>
								<CardTitle>Easy & Simple </CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									I have workflows and tools in place to make sure that the
									experience working with me is easy and simple for the both of
									us. Giving you the most value for your money.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			<section
				id="contact"
				className="container max-w-3xl py-8 md:py-12 lg:py-24 space-y-4 flex flex-col"
			>
				<h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Interested? Let&apos;s talk!
				</h2>
				<p className="leading-normal max-w-2xl text-muted-foreground sm:text-lg sm:leading-8 text-center">
					I&apos;m always excited to hear about new projects and ideas.
				</p>
				<Link
					href={links.contact.path}
					className={cn(
						buttonVariants({ variant: "default" }),
						"max-w-sm mx-auto"
					)}
				>
					{links.contact.name}
				</Link>
			</section>
		</>
	);
}
