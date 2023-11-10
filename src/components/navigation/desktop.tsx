import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { links } from "@/lib/consts"
import { ModeToggle } from "../theme/theme-toggle"

export function NavigationDesktop({
  isActive,
}: {
  isActive: (path: string) => boolean
}) {
  return (
    <NavigationMenu className="mx-auto hidden gap-4 md:flex">
      <Image
        src="/logo.png"
        alt="Joa Leitola - JL"
        priority
        width={45}
        height={45}
      />
      <NavigationMenuList className="mx-14 cursor-pointer gap-4">
        <Link href={links.home.path} legacyBehavior passHref>
          <NavigationMenuItem
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(links.home.path) && "bg-secondary text-primary "
            )}
          >
            {links.home.name}
          </NavigationMenuItem>
        </Link>
        <Link href={links.myServices.path} legacyBehavior passHref>
          <NavigationMenuItem
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(links.myServices.path) && "bg-secondary text-primary "
            )}
          >
            {links.myServices.name}
          </NavigationMenuItem>
        </Link>
        <Link href={links.workingWithMe.path} legacyBehavior passHref>
          <NavigationMenuItem
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(links.workingWithMe.path) && "bg-secondary text-primary "
            )}
          >
            {links.workingWithMe.name}
          </NavigationMenuItem>
        </Link>
        <Link href={links.projectsAndTools.path} legacyBehavior passHref>
          <NavigationMenuItem
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(links.projectsAndTools.path) &&
                "bg-secondary text-primary "
            )}
          >
            {links.projectsAndTools.name}
          </NavigationMenuItem>
        </Link>
        <Link href={links.contact.path} legacyBehavior passHref>
          <NavigationMenuItem
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(links.contact.path) && "bg-secondary text-primary "
            )}
          >
            {links.contact.name}
          </NavigationMenuItem>
        </Link>
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  )
}
