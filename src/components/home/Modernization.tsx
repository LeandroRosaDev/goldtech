"use client"

import { useRef, useState } from "react"
import { asContent } from "@/lib/sections"
import type { HomeSection, ModernizacaoConteudo } from "@/types/site"
import { ButtonLink } from "@/components/ui/button-link"
import { Container, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { MediaPanel } from "@/components/media/MediaPanel"
import { Reveal } from "@/components/motion/Reveal"
import { cn } from "@/lib/utils"

export function Modernization({ section }: { section: HomeSection }) {
  const data = asContent<ModernizacaoConteudo>(section)
  const frame = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const [value, setValue] = useState(50)

  function move(clientX: number) {
    const rect = frame.current?.getBoundingClientRect()
    if (!rect) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setValue(Math.min(100, Math.max(0, next)))
  }

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-white">
      <Container wide className={sectionPad}>
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <SectionTitle>{section.titulo}</SectionTitle>
          </div>
          <ul className="mx-auto mt-10 grid max-w-[960px] gap-8 md:grid-cols-3">
            {data.beneficios.map((item) => (
              <li key={item.titulo}>
                <h3 className="text-lg font-medium text-ink">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-quiet">{item.texto}</p>
              </li>
            ))}
          </ul>
          <div
            ref={frame}
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(value)}
            aria-label="Comparar elevador antigo e modernizado"
            className="relative mt-12 aspect-[4/3] cursor-ew-resize touch-none md:aspect-video"
            onPointerDown={(event) => {
              dragging.current = true
              event.currentTarget.setPointerCapture(event.pointerId)
              move(event.clientX)
            }}
            onPointerMove={(event) => {
              if (!dragging.current) return
              move(event.clientX)
            }}
            onPointerUp={(event) => {
              dragging.current = false
              if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId)
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault()
                setValue((current) => Math.max(0, current - 5))
              }
              if (event.key === "ArrowRight") {
                event.preventDefault()
                setValue((current) => Math.min(100, current + 5))
              }
            }}
          >
            <MediaPanel
              src={data.depois}
              alt="Elevador modernizado"
              label="Modernizado"
              dimensao="1600 × 900 px"
              hintClassName="bottom-6 left-6"
              className="absolute inset-0 h-full"
              scene={<Cabin tone="depois" />}
            />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
              <MediaPanel
                src={data.antes}
                alt="Elevador antigo"
                label="Antigo"
                dimensao="1600 × 900 px"
                hintClassName="bottom-6 right-6 text-right"
                className="h-full"
                scene={<Cabin tone="antes" />}
              />
            </div>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${value}%` }} />
            <div
              className="pointer-events-none absolute top-1/2 size-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-white/90"
              style={{ left: `${value}%` }}
            />
            <span className="pointer-events-none absolute top-4 left-4 text-xs tracking-[0.14em] text-inverse uppercase">
              Antigo
            </span>
            <span className="pointer-events-none absolute top-4 right-4 text-xs tracking-[0.14em] text-inverse uppercase">
              Modernizado
            </span>
          </div>
          {section.botaoTexto && section.botaoLink ? (
            <div className="mt-10 flex justify-center">
              <ButtonLink href={section.botaoLink} variant="outline-dark">
                {section.botaoTexto}
              </ButtonLink>
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  )
}

function Cabin({ tone }: { tone: "antes" | "depois" }) {
  return (
    <div
      className={cn(
        "absolute inset-0",
        tone === "antes"
          ? "bg-[linear-gradient(180deg,#4a4036,#2c261f)]"
          : "bg-[linear-gradient(180deg,#2a3038,#121417)]",
      )}
    >
      <div
        className={cn(
          "absolute inset-x-[18%] top-[16%] bottom-[18%] border",
          tone === "antes" ? "border-white/20" : "border-white/50",
        )}
      />
      <div className="absolute top-[16%] bottom-[18%] left-1/2 w-px bg-white/30" />
      <div className={cn("absolute right-[30%] bottom-[18%] left-[30%] h-px", tone === "depois" ? "bg-white" : "bg-white/25")} />
    </div>
  )
}
