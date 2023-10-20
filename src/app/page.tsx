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
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Joa Leitola - Full Stack Developer",
	description:
		"I am a full stack developer from Finland. I create beautiful and easy to use web experiences.Consulting and freelance work available. Contact me for more information.",
};

export default function Home() {
	return (
		<>
			<section
				id="hero"
				className="container space-y-6 pt-6 md:pt-12 lg:py-32 pb-8 md:pb-12"
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
				className="container py-8 md:py-12 lg:py-24 max-w-5xl"
			>
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl max-w-[64rem] tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
						I build all things web related.
					</h2>
					<p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
						{`I've got a solid grasp of web development, and I'm pretty versatile
						when it comes to connecting the dots and fixing tricky issues. My
						jam is frontend development, especially with React.js and all the
						cool stuff it comes with.`}
					</p>
				</div>
			</section>
			<section
				id="technologies"
				className="container max-w-3xl py-8 md:py-12 lg:py-24 flex flex-row-reverse"
			>
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl max-w-[64rem] tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
						{`Techonologies, if you're into that.`}
					</h2>
					<p className="leading-normal max-w-2xl text-muted-foreground sm:text-lg sm:leading-8">
						{`Used these all quite a bit. There is more, but these are the big keywords where recruiters or customers might get a kick out of. It's not much but it's honest work.`}
					</p>
					<div className="flex flex-wrap gap-2 max-w-lg">
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
					<div className="flex gap-8">
						<Card className="max-w-md">
							<CardHeader>
								<CardTitle>Modern Solutions</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									{`I'm always up to date with the latest technologies. I'm not afraid to try new things and I'm always looking for ways to improve my workflow.`}
								</CardDescription>
							</CardContent>
						</Card>
						<Card className="max-w-md">
							<CardHeader>
								<CardTitle>Consulting experience</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									{`I've worked with clients from all over the world. I'm used to working with remote teams and I'm a great communicator.`}
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
}
