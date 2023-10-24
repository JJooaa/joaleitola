"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./theme-toggle";
import { links } from "@/lib/consts";
import Image from "next/image";
import logo from "/public/logo.png";
import { Card } from "./ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
	const currentPath = usePathname();

	const isActive = (path: string) => {
		if (currentPath === path) return true;
	};

	return (
		<Card className="p-4 w-max self-center container">
			<NavigationMenu className="gap-4 ">
				<Image
					src={logo}
					alt="Joa Leitola - JL"
					priority
					width={45}
					height={45}
				/>
				<NavigationMenuList className="cursor-pointer mx-14">
					<Link href={links.home.path} legacyBehavior passHref>
						<NavigationMenuItem
							className={cn(
								navigationMenuTriggerStyle(),
								isActive(links.home.path) && "text-blue-500 underline"
							)}
						>
							{links.home.name}
						</NavigationMenuItem>
					</Link>
					<Link href={links.projects.path} legacyBehavior passHref>
						<NavigationMenuItem
							className={cn(
								navigationMenuTriggerStyle(),
								isActive(links.projects.path) && "text-blue-500 underline"
							)}
						>
							{links.projects.name}
						</NavigationMenuItem>
					</Link>
					<Link href={links.workingWithMe.path} legacyBehavior passHref>
						<NavigationMenuItem
							className={cn(
								navigationMenuTriggerStyle(),
								isActive(links.workingWithMe.path) && "text-blue-500 underline"
							)}
						>
							{links.workingWithMe.name}
						</NavigationMenuItem>
					</Link>
					<Link href={links.contact.path} legacyBehavior passHref>
						<NavigationMenuItem
							className={cn(
								navigationMenuTriggerStyle(),
								isActive(links.contact.path) && "text-blue-500 underline"
							)}
						>
							{links.contact.name}
						</NavigationMenuItem>
					</Link>
				</NavigationMenuList>
				<ModeToggle />
			</NavigationMenu>
		</Card>
	);
}
