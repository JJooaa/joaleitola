"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { links } from "@/lib/consts";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export function NavigationMobile({
  isActive,
}: {
  isActive: (path: string) => true | undefined;
}) {
  return (
    <Sheet>
      <div className="w-full flex md:hidden justify-end gap-4">
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
        <SheetDescription className="flex flex-col mt-10 gap-4">
          <SheetClose asChild>
            <Link
              href={links.home.path}
              className={cn(
                isActive(links.home.path) &&
                  "text-blue-500 underline text-xl underline-offset-4",
              )}
            >
              {links.home.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.projects.path}
              className={cn(
                isActive(links.projects.path) &&
                  "text-blue-500 underline text-xl underline-offset-4",
              )}
            >
              {links.projects.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.workingWithMe.path}
              className={cn(
                isActive(links.workingWithMe.path) &&
                  "text-blue-500 underline text-xl underline-offset-4",
              )}
            >
              {links.workingWithMe.name}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={links.contact.path}
              className={cn(
                isActive(links.contact.path) &&
                  "text-blue-500 underline text-xl underline-offset-4",
              )}
            >
              {links.contact.name}
            </Link>
          </SheetClose>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
