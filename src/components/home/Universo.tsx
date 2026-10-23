"use client"

import { useEffect, useState } from "react"
import { asContent } from "@/lib/sections"
import type { HomeSection, UniversoConteudo } from "@/types/site"
import { Container, Eyebrow, SectionTitle } from "@/components/layout/primitives"
import { cn } from "@/lib/utils"

const aviso = "Área de manutenção · Acesso restrito à equipe técnica · "

export function Universo({ section }: { section: HomeSection }) {
  const data = asContent<UniversoConteudo>(section)
  const [open, setOpen] = useState(false)
  const [peek, setPeek] = useState(false)
  const [floor, setFloor] = useState(0)
  const [checked, setChecked] = useState<string[]>([])
  const [reduce, setReduce] = useState(false)
  const total = data.itens.length
  const done = checked.length
  const released = done === total && total > 0

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => {
      setReduce(motion.matches)
      if (motion.matches) setOpen(true)
    }
    apply()
    motion.addEventListener("change", apply)
    return () => motion.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    if (open || reduce) return
    const timer = window.setInterval(() => {
      setFloor((current) => (current + 1) % Math.max(data.itens.length, 1))
    }, 900)
    return () => window.clearInterval(timer)
  }, [open, reduce, data.itens.length])

  const toggle = (codigo: string) => {
    setChecked((current) =>
      current.includes(codigo) ? current.filter((item) => item !== codigo) : [...current, codigo],
    )
  }

  return (
    <section id={section.anchor} data-andar={section.andar} className="relative overflow-hidden bg-graphite text-inverse">
      <Hazard />
      {reduce ? null : (
        <div className="overflow-hidden bg-[#f3c614] py-2 text-ink">
          <p className="flex w-max animate-marquee text-sm font-medium tracking-[0.18em] uppercase">
            <span className="px-4">{aviso}</span>
            <span className="px-4" aria-hidden>
              {aviso}
            </span>
          </p>
        </div>
      )}
      <Container className="relative py-12 md:py-16">
        {section.tema ? <Eyebrow className="text-white/70">{section.tema}</Eyebrow> : null}
        <SectionTitle inverse className="mt-4 max-w-[14ch]">
          {section.titulo}
        </SectionTitle>
      </Container>
      <div
        className="relative mt-10 min-h-[70svh] w-full overflow-hidden"
        onPointerEnter={() => {
          if (!open) setPeek(true)
        }}
        onPointerLeave={() => setPeek(false)}
      >
          <div
            className={cn(
              "bg-[#121417] p-6 md:p-10",
              open ? "relative mx-auto max-w-[1120px]" : "invisible absolute inset-0",
            )}
            aria-hidden={!open}
            inert={!open}
          >
            <div className="flex items-center justify-between gap-4">
              <p
                className={cn(
                  "font-mono text-xs tracking-[0.22em] uppercase",
                  released ? "text-[#f3c614] [text-shadow:0_0_18px_rgba(243,198,20,0.65)]" : "text-white/70",
                )}
              >
                <span
                  className={cn(
                    "mr-2 inline-block size-2 rounded-full align-middle",
                    released ? "bg-[#7dff6b] shadow-[0_0_10px_#7dff6b]" : "zone-blink bg-[#f3c614]",
                  )}
                  aria-hidden
                />
                {released ? "Liberado para operação" : `Inspeção ${done}/${total}`}
              </p>
              <span className="font-mono text-sm text-white/50">{String(done).padStart(2, "0")}</span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden bg-white/10">
              <div
                className="h-full bg-[#f3c614] transition-[width] duration-500"
                style={{ width: total ? `${(done / total) * 100}%` : "0%" }}
              />
            </div>
            <ul className="mt-8 grid gap-4">
              {data.itens.map((item) => {
                const marked = checked.includes(item.codigo)
                return (
                  <li
                    key={item.codigo}
                    className={cn(
                      "border bg-white/5 transition duration-300 hover:-translate-y-0.5 hover:border-[#f3c614]/70 hover:bg-white/10",
                      marked ? "border-[#f3c614]/50" : "border-white/10",
                    )}
                  >
                    <button
                      type="button"
                      aria-pressed={marked}
                      onClick={() => toggle(item.codigo)}
                      className="flex w-full items-start gap-4 p-4 text-left"
                    >
                      <span
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-full border text-sm font-medium",
                          marked ? "stamp-in border-[#f3c614] bg-[#f3c614] text-ink" : "border-white/30 text-white",
                        )}
                      >
                        {marked ? "✓" : item.codigo}
                      </span>
                      <span>
                        <span className="block text-lg font-medium">{item.titulo}</span>
                        <span className="mt-1 block text-sm leading-6 text-white/75">{item.texto}</span>
                        {marked ? (
                          <span className="mt-3 inline-flex bg-[#f3c614] px-3 py-1 text-xs font-medium text-ink">
                            {item.fato}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
            {released ? (
              <a
                href="#contato"
                className="mt-8 inline-flex bg-[#f3c614] px-5 py-3 text-sm font-medium text-ink"
              >
                Solicitar avaliação técnica
              </a>
            ) : null}
          </div>
          <div
            className={cn(
              "absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,#1c1f24,#2a2e35_46%,#121417_54%,#1a1d22)]",
              reduce ? "" : "transition-transform duration-1000",
              open && "-translate-x-full",
              !open && peek && "-translate-x-[7%]",
            )}
            aria-hidden
          >
            <span className="zone-scan pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>
          <div
            className={cn(
              "absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(270deg,#1c1f24,#2a2e35_46%,#121417_54%,#1a1d22)]",
              reduce ? "" : "transition-transform duration-1000",
              open && "translate-x-full",
              !open && peek && "translate-x-[7%]",
            )}
            aria-hidden
          />
          {open || reduce ? null : (
            <>
              <span className="pointer-events-none absolute inset-y-8 left-1/2 z-10 w-px -translate-x-1/2 bg-white/70" />
              <span className="zone-blink pointer-events-none absolute top-6 left-6 z-10 size-3 rounded-full bg-[#ff4d4d] shadow-[0_0_12px_#ff4d4d]" />
              <span className="zone-blink pointer-events-none absolute top-6 right-6 z-10 size-3 rounded-full bg-[#ff4d4d] shadow-[0_0_12px_#ff4d4d] [animation-delay:0.4s]" />
              <span
                className="pointer-events-none absolute top-8 left-1/2 z-10 font-mono text-3xl text-[#f3c614] [text-shadow:0_0_16px_rgba(243,198,20,0.8)]"
                style={{ translate: "-50% 0" }}
              >
                {String(floor + 1).padStart(2, "0")}
              </span>
            </>
          )}
          {reduce ? null : (
            <>
              <Tape side="left" broken={open} />
              <Tape side="right" broken={open} />
            </>
          )}
          {open ? null : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="absolute top-1/2 left-1/2 z-20 rounded-full bg-ink p-1.5 shadow-[0_0_0_8px_rgba(243,198,20,0.95),0_0_36px_rgba(243,198,20,0.75)] transition duration-300 hover:scale-105"
              style={{ translate: "-50% -50%" }}
            >
              <span className="flex items-center gap-3 rounded-full bg-[#f3c614] px-6 py-4 text-sm font-medium text-ink">
                <span className="grid size-8 place-items-center rounded-full bg-ink text-xs text-[#f3c614]" aria-hidden>
                  ▶
                </span>
                Iniciar inspeção
              </span>
            </button>
          )}
        </div>
      <Hazard />
    </section>
  )
}

function Hazard() {
  return (
    <div
      className="h-4 bg-[repeating-linear-gradient(45deg,#f3c614_0_12px,#15171a_12px_24px)]"
      aria-hidden
    />
  )
}

function Tape({ side, broken }: { side: "left" | "right"; broken: boolean }) {
  const left = side === "left"
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-1/2 left-1/2 z-10 flex h-16 w-[170%] items-center justify-center bg-[#f3c614] text-sm font-medium tracking-[0.28em] text-ink uppercase",
        left ? "rotate-[-12deg]" : "rotate-[12deg]",
        broken && (left ? "tape-break-left" : "tape-break-right"),
      )}
      style={{ translate: "-50% -50%" }}
      aria-hidden
    >
      Isolado · Goldtech
    </div>
  )
}
