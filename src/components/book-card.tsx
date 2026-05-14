"use client"

import { ComponentProps, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { HoverCard as HoverCardPrimitive } from "radix-ui"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BookCardProps extends ComponentProps<typeof Card> {
  title: string
  description: string
  imageUrl: string
  href: string
}

export function BookCard({ title, description, imageUrl, href }: BookCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen} openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Link href={href}>
          <Card
            className={cn(
              "w-full cursor-pointer overflow-hidden py-0",
              "transition-all duration-300",
              isOpen ? "scale-102 shadow-lg" : "hover:scale-102 hover:shadow-lg"
            )}
          >
            <CardContent className="p-0">
              <div className="relative aspect-2/3 w-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`Cover of ${title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="line-clamp-2 text-sm font-semibold text-foreground">{title}</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent side="right" className="flex w-64 flex-col gap-0.5">
        <div className="whitespace-pre-line">{description}</div>
        <HoverCardPrimitive.Arrow></HoverCardPrimitive.Arrow>
      </HoverCardContent>
    </HoverCard>
  )
}
