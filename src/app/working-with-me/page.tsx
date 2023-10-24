import { buttonVariants } from "@/components/ui/button";
import { links } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

//
export default function WorkingWithMe() {
	return (
		<section className="container">
			<div className="space-y-6 pt-6 md:pt-12 lg:py-32 pb-8 md:pb-12 border-b">
				<h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Roadmap of working with me
				</h2>
				<p className="max-w-[50rem] mx-auto leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center ">
					On this page I&apos;ll outline the process of working with me. From
					the first contact to the final delivery of the project. Everything is
					planned so the experience working with me is as smooth as possible.
					Giving you the most value for your money.
				</p>
			</div>

			<div className="space-y-6 pt-6 md:pt-16 lg:py-18 pb-4 md:pb-6 max-w-4xl mx-auto">
				<h3 className="flex gap-10 text-xl tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl font-bold">
					1. <span>Let&apos;s Begin our Journey with a Personal Meeting!</span>
				</h3>
				<p className="pl-12 leading-normal text-muted-foreground sm:text-lg sm:leading-8 border-l-2 ml-4">
					Our process starts with our initial contact, and from there,
					we&apos;ll arrange a meeting to get to know each other and establish a
					strong foundation.
					<br /> <br />
					During this meeting, I encourage you to open up and share your needs,
					desires, and budget considerations. I&apos;ll be taking thorough notes
					to ensure I understand your vision and requirements. Your input is
					invaluable in helping me create the perfect solution for you.
					<br /> <br />
					After our call, I&apos;ll get to work immediately on crafting a
					tailored offer that aligns with your unique goals and budget. The best
					part? You won&apos;t have to wait long. You can expect to hear from me
					within 0-2 days, even during the weekends.
					<br /> <br />
					With this personalized and efficient process, you&apos;re not just
					another client; you&apos;re a valued partner in our journey to
					success.
				</p>
			</div>

			<div className="space-y-6 pt-6 md:pt-16 lg:py-18 pb-4 md:pb-6 max-w-4xl mx-auto">
				<h3 className="flex gap-8 text-xl tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl font-bold">
					2. <span>Active Development Phase</span>
				</h3>
				<p className="pl-12 leading-normal text-muted-foreground sm:text-lg sm:leading-8 border-l-2 ml-4">
					I believe in a dynamic and customer-centric approach to web
					development, and when you work with me, it&apos;s not just a
					transaction; it&apos;s a partnership. I&apos;ve chosen
					Agile/Kanban-style development as our method of choice, and
					here&apos;s what that means for you: <br /> <br /> We&apos;re on the
					same page, you and I, collaborating closely to bring your vision to
					life. There&apos;s no guesswork, no uncertainty. You&apos;re an active
					part of every step in the development journey.
					<br /> <br /> Imagine having a brilliant idea or a sudden burst of
					inspiration. With our Agile/Kanban approach, you have the power to
					turn that idea into reality. Just make a ticket, and watch it come to
					life.
					<br />
					<br /> My transparent development process lets you see precisely where
					your investment is going. You witness results in real-time. No more
					uncertainty about how your money is being spent. With me, you can be
					confident that your investment is worth every penny, as you see
					tangible outcomes taking shape right before your eyes.
				</p>
			</div>

			<div className="space-y-6 pt-6 md:pt-16 lg:py-18 pb-4 md:pb-6 max-w-4xl mx-auto">
				<h3 className="flex gap-8 text-xl tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl font-bold">
					3. <span>Unlocking Your Vision - The MVP and Beyond!</span>
				</h3>
				<p className="pl-12 leading-normal text-muted-foreground sm:text-lg sm:leading-8 border-l-2 ml-4">
					Once we&apos;ve laid the groundwork and worked closely together,
					we&apos;ll reach a pivotal moment where your MVP (minimum viable
					product) comes to fruition. This is the initial, essential version of
					your project, tailored to your specific requirements and objectives.
					<br /> <br />
					But here&apos;s where our process truly shines - the journey
					doesn&apos;t end here. If you find yourself yearning for more, whether
					it&apos;s additional features, enhancements, or entirely new ideas, we
					can seamlessly return to step 2 of our Agile development approach.
					Your project can continually evolve and adapt as your needs and
					desires grow.
					<br /> <br />
					With me, you&apos;re not just receiving a one-off solution;
					you&apos;re gaining a committed development partner for the long haul.
				</p>
			</div>
			<section
				id="contact"
				className="container max-w-3xl py-8 md:py-12 lg:py-24 space-y-4 flex flex-col"
			>
				<h2 className="text-2xl text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Interested? Let&apos;s talk!
				</h2>
				<p className="leading-normal max-w-2xl text-muted-foreground sm:text-lg sm:leading-8 text-center">
					Ready to get started? I&apos;m excited to hear from you! Click the
					button below to get in touch.
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
		</section>
	);
}
