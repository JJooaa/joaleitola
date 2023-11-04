"use client"

import { usePathname } from "next/navigation"
import { NavigationMobile } from "./mobile"
import { NavigationDesktop } from "./desktop"

export default function Navigation() {
  const currentPath = usePathname()

  const isActive = (path: string) => {
    if (currentPath === path) return true
  }

  return (
    <>
      <NavigationDesktop isActive={isActive} />
      <NavigationMobile isActive={isActive} />
    </>
  )
}
