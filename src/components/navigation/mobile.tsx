"use client"

import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { links } from "@/lib/consts"
import Link from "next/link"
import { ModeToggle } from "../theme/theme-toggle"

export function NavigationMobile({
  isActive,
}: {
  isActive: (path: string) => boolean
}) {
  return (
    <Sheet>
      <div className="flex w-full justify-end gap-4 md:hidden">
        <ModeToggle />
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="left">
        <SheetHeader>
          <Image
            src="/logo.png"
            alt="Joa Leitola - JL"
            priority
            width={45}
            height={45}
          />
        </SheetHeader>
        <SheetDescription className="mt-10 flex flex-col gap-4">
          <SheetClose asChild>
            <Link
              href={links.home.path}
              className={cn(
                buttonVariants({
                  variant: isActive(links.home.path) ? "secondary" : "ghost",
                })
              )}
            >
              {links.home.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.myServices.path}
              className={cn(
                buttonVariants({
                  variant: isActive(links.myServices.path)
                    ? "secondary"
                    : "ghost",
                })
              )}
            >
              {links.myServices.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.workingWithMe.path}
              className={cn(
                buttonVariants({
                  variant: isActive(links.workingWithMe.path)
                    ? "secondary"
                    : "ghost",
                })
              )}
            >
              {links.workingWithMe.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.projectsAndTools.path}
              className={cn(
                buttonVariants({
                  variant: isActive(links.projectsAndTools.path)
                    ? "secondary"
                    : "ghost",
                })
              )}
            >
              {links.projectsAndTools.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.contact.path}
              className={cn(
                buttonVariants({
                  variant: isActive(links.contact.path) ? "secondary" : "ghost",
                })
              )}
            >
              {links.contact.name}
            </Link>
          </SheetClose>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
