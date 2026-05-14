"use client"

import Link from "next/link"

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
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center gap-10 justify-start">
        <div className="font-bold text-xl">Apprends-moi</div>
        <nav className="flex items-center gap-6">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm font-medium hover:text-primary">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
