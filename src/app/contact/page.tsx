import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Joa Leitola - Contact",
	description:
		"I am a full stack developer from Finland. I create beautiful and easy to use web experiences.Consulting and freelance work available. Contact me for more information.",
};

export default function ContactPage() {
	return (
		<div className="container space-y-6 pt-6 md:pt-12 lg:py-32 pb-8 md:pb-12">
			<h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
				Here&apos;s how you can reach me
			</h2>
			<p className="max-w-[50rem] mx-auto leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
				I use all types of socials etc, that you can contact me with. I prefer
				emails for initial contacts. If we work together, I make sure we
				communicate via phones.
			</p>
		</div>
	);
}
