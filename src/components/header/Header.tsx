"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"

const links: { title: string; href: string }[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Bibliothèque",
    href: "/",
  },
]

export default function Header() {
  const { setTheme } = useTheme()
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10 justify-start">
          <div className="flex items-center gap-10 justify-start">
            <div className="font-bold text-xl">Apprends-moi</div>
            <nav className="flex items-center gap-6">
              {links.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm font-medium hover:text-primary">
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
