import { Button, buttonVariants } from "@/components/ui/button";
import { Typography1 } from "@/components/ui/typography";

export default function Home() {
	return (
		<section id="hero" className="container space-y-6 pt-6 md:pt-12 lg:py-32">
			<div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
				<h1 className="text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
					Joa Leitola <br /> Full Stack Developer
				</h1>
				<p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
					My goal is to create seamlessly easy to use and beautiful web
					experiences. It all starts with thorough planning, turning ideas into
					reality. And then finally developing and fine tuning code that works.
				</p>
				<div className="space-x-4">
					<Button>Contact</Button>
					<Button variant="outline">Github</Button>
				</div>
			</div>
		</section>
	);
}
