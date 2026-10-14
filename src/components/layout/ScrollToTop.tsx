"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed right-5 bottom-6 z-40 grid size-11 place-items-center rounded-full bg-white text-ink shadow-lg transition-opacity duration-200 min-[1200px]:bottom-8",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
      }}
    >
      <ArrowUp strokeWidth={1.5} className="size-5" aria-hidden />
    </button>
  )
}
