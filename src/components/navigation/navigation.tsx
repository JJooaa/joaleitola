"use client"

import { usePathname } from "next/navigation"
import { NavigationMobile } from "./mobile"
import { NavigationDesktop } from "./desktop"

export default function Navigation() {
  const currentPath = usePathname()

  // make the isActive to also check children of routes eg /projects/1
  // if the current path is only "/" eg home page, then it should return true
  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === path
    }
    return currentPath.startsWith(path)
  }

  return (
    <>
      <NavigationDesktop isActive={isActive} />
      <NavigationMobile isActive={isActive} />
    </>
  )
}
