"use client"

import { useEffect, useState } from "react"
import type { FloorId } from "@/types/site"
import { cn } from "@/lib/utils"

export function FloorIndicator({
  floors,
}: {
  floors: { id: FloorId; label: string }[]
}) {
  const [active, setActive] = useState(floors[0]?.id ?? "00")

  useEffect(() => {
    if (floors.length === 0) return

    const onScroll = () => {
      const mid = window.innerHeight / 2
      let current = floors[0].id
      document.querySelectorAll<HTMLElement>("[data-andar]").forEach((element) => {
        const id = element.dataset.andar as FloorId | undefined
        if (!id || !floors.some((floor) => floor.id === id)) return
        if (element.getBoundingClientRect().top <= mid) current = id
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [floors])

  if (floors.length === 0) return null

  return (
    <nav
      aria-label="Andares da página"
      className="fixed top-1/2 right-7 z-40 hidden -translate-y-1/2 min-[1200px]:block"
    >
      <ol className="flex flex-col gap-3 [text-shadow:0_0_6px_rgba(255,255,255,0.95),0_0_2px_rgba(18,20,23,0.75)]">
        {floors.map((floor) => {
          const isActive = floor.id === active
          return (
            <li key={floor.id} className="flex items-center justify-end gap-3">
              <span
                aria-hidden={!isActive}
                className={cn(
                  "text-[11px] tracking-wide text-ink transition-opacity duration-200",
                  isActive ? "opacity-100" : "opacity-0",
                )}
              >
                {floor.label}
              </span>
              <button
                type="button"
                aria-current={isActive ? "true" : undefined}
                aria-label={`${floor.label}, andar ${floor.id}`}
                className={cn(
                  "flex items-center gap-2 text-[11px] transition-opacity duration-200",
                  isActive ? "text-ink opacity-100" : "text-ink opacity-35",
                )}
                onClick={() => {
                  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  document.querySelector<HTMLElement>(`[data-andar="${floor.id}"]`)?.scrollIntoView({
                    behavior: reduce ? "auto" : "smooth",
                    block: "start",
                  })
                }}
              >
                <span>{floor.id}</span>
                <span className={cn("size-1.5 rounded-full", isActive ? "bg-ink" : "bg-current")} />
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
