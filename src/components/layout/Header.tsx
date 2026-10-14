"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { menu } from "@/content/site"
import { ButtonLink } from "@/components/ui/button-link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Wordmark } from "@/components/layout/Wordmark"
import { cn } from "@/lib/utils"

const menuIds = menu.map((item) => item.id).filter((id): id is string => Boolean(id))

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState("inicio")
  const [open, setOpen] = useState(false)
  const solid = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48)
      if (!isHome) return
      const mid = window.innerHeight * 0.35
      let current = menuIds[0] ?? "inicio"
      for (const id of menuIds) {
        const element = document.getElementById(id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= mid) current = id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 items-center transition-colors duration-700 min-[1200px]:h-[72px]",
        solid ? "border-b border-white/8 bg-graphite/88 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-5 md:px-8 min-[1440px]:px-20">
        <Wordmark />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 min-[1200px]:flex" aria-label="Seções">
          {menu.map((item) => {
            const href = isHome && item.id ? `#${item.id}` : item.href
            const active = isHome && item.id === activeId
            return (
              <a
                key={item.id}
                href={href}
                className={cn(
                  "relative text-sm text-inverse",
                  active && "after:absolute after:right-0 after:-bottom-1.5 after:left-0 after:h-px after:bg-white",
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <ButtonLink
          href={isHome ? "#contato" : "/#contato"}
          className="hidden h-10 bg-white text-ink hover:bg-white/90 min-[1200px]:inline-flex"
        >
          Solicite um orçamento
        </ButtonLink>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center text-inverse min-[1200px]:hidden"
            aria-label="Abrir menu"
          >
            <Menu strokeWidth={1.5} />
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="inset-0 h-svh w-screen max-w-none border-0 bg-graphite p-0 text-inverse data-[side=right]:w-screen data-[side=right]:max-w-none data-[side=right]:sm:max-w-none"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex justify-end px-5 pt-5">
              <SheetClose className="text-sm text-inverse">Fechar</SheetClose>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-6 px-8" aria-label="Seções">
              {menu.map((item) => (
                <a
                  key={item.id}
                  href={isHome && item.id ? `#${item.id}` : item.href}
                  onClick={() => setOpen(false)}
                  className="text-[32px] leading-none text-inverse"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="p-8">
              <Button
                nativeButton={false}
                render={<a href={isHome ? "#contato" : "/#contato"} onClick={() => setOpen(false)} />}
                className="h-12 w-full rounded-[2px] bg-white text-ink hover:bg-white/90 active:translate-y-0"
              >
                Solicite um orçamento
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
