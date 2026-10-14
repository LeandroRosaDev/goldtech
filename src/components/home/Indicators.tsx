"use client"

import { useEffect, useRef, useState } from "react"
import { asContent } from "@/lib/sections"
import type { HomeSection, Indicador } from "@/types/site"
import { Reveal } from "@/components/motion/Reveal"
import { Container } from "@/components/layout/primitives"
import { cn } from "@/lib/utils"

export function Indicators({ section }: { section: HomeSection }) {
  const items = asContent<Indicador[]>(section)

  return (
    <section id={section.anchor} data-andar={section.andar} aria-label={section.titulo} className="bg-mist">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 py-[72px] md:grid-cols-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "border-ink/10 px-4 py-6",
                  "max-md:[&:nth-child(-n+2)]:border-b max-md:odd:border-r",
                  "md:border-r md:py-2 md:last:border-r-0",
                )}
              >
                <p className="text-[40px] leading-none font-medium tracking-tight text-ink tabular-nums min-[1200px]:text-[64px]">
                  <CountValue item={item} />
                </p>
                <p className="mt-3 text-sm text-quiet">{item.rotulo}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

function CountValue({ item }: { item: Indicador }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        if (motion.matches) {
          setValue(item.valor)
          return
        }
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 1200)
          const eased = 1 - (1 - progress) ** 3
          setValue(Math.round(item.valor * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [item.valor])

  return (
    <span ref={ref}>
      {item.prefixo}
      {value}
      {item.sufixo}
    </span>
  )
}
