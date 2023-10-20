"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./theme-toggle";
import { links } from "@/lib/consts";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Navigation() {
	return (
		<NavigationMenu className="self-center gap-4 container">
			<Image
				src={logo}
				alt="Joa Leitola - JL"
				priority
				width={45}
				height={45}
			/>
			<NavigationMenuList className="cursor-pointer mx-14">
				<Link href={links.home.path} legacyBehavior passHref>
					<NavigationMenuItem className={navigationMenuTriggerStyle()}>
						{links.home.name}
					</NavigationMenuItem>
				</Link>
				<Link href={links.projects.path} legacyBehavior passHref>
					<NavigationMenuItem className={navigationMenuTriggerStyle()}>
						{links.projects.name}
					</NavigationMenuItem>
				</Link>
				<Link href={links.contact.path} legacyBehavior passHref>
					<NavigationMenuItem className={navigationMenuTriggerStyle()}>
						{links.contact.name}
					</NavigationMenuItem>
				</Link>
				<Link href={links.testimonials.path} legacyBehavior passHref>
					<NavigationMenuItem className={navigationMenuTriggerStyle()}>
						{links.testimonials.name}
					</NavigationMenuItem>
				</Link>
			</NavigationMenuList>
			<ModeToggle />
		</NavigationMenu>
	);
}
