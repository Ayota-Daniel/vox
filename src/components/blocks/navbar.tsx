"use client"

import * as React from "react"
import Link from "next/link"

import { useIsMobile } from "@/hooks/useMobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar() {
  return (
    <div>
      <div className="hidden md:flex items-center justify-between px-3 pt-1 pb-3 xl:w-7xl mx-auto">
        <div>
          <Link href="/" className="font-bold text-lg">
            Vox Echo Campus
          </Link>
        </div>
        <NavbarPart />
        <div>
          <Link href={`/auth/signup`} className="cursor-pointer hover:text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center px-3 pt-1 pb-3">
        <div>
          <Link href="/" className="font-bold text-lg">
            Vox Echo Campus
          </Link>
        </div>
        <Sheet>
          <SheetTitle></SheetTitle>
          <SheetTrigger className="cursor-pointer">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/ecoles">Écoles</Link>
              <Link href="/formations">Formations</Link>
              <Link href="/contenus">Contenus</Link>
              <Link href="/orientation">Orientation</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

    </div>

  )
}

function NavbarPart() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile} className="z-20">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/schools">Ecoles</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/formations">Formations</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/articles">Articles / Interviews</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/podcasts">Podcasts</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/talents">Talents</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
