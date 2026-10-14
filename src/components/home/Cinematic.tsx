"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { asContent } from "@/lib/sections"
import type { ExperienciaConteudo, HomeSection } from "@/types/site"
import { MediaPanel } from "@/components/media/MediaPanel"

export function Cinematic({ section }: { section: HomeSection }) {
  const data = asContent<ExperienciaConteudo>(section)
  const ref = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [reduce, setReduce] = useState(false)
  const hasImage = Boolean(section.imagem) && !section.video

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0

    const update = () => {
      const element = ref.current
      if (!element) return
      const rect = element.getBoundingClientRect()
      const travel = element.offsetHeight - window.innerHeight
      const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0

      const image = imageRef.current
      if (image) {
        if (motion.matches) {
          image.style.transform = ""
        } else {
          const distance = image.offsetHeight - window.innerHeight
          image.style.transform = `translate3d(-50%, ${-progress * Math.max(0, distance)}px, 0)`
        }
      }

      const next = Math.min(data.palavras.length - 1, Math.floor(progress * data.palavras.length))
      setIndex((current) => (current === next ? current : next))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }

    const apply = () => {
      setReduce(motion.matches)
      update()
    }

    apply()
    motion.addEventListener("change", apply)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      motion.removeEventListener("change", apply)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [data.palavras.length])

  return (
    <section
      ref={ref}
      id={section.anchor}
      data-andar={section.andar}
      className={reduce ? "relative h-svh overflow-hidden" : "relative h-[300svh]"}
    >
      <div className={reduce ? "relative h-full overflow-hidden" : "sticky top-0 h-svh overflow-hidden"}>
        {hasImage ? (
          <>
            <Image
              src={section.imagem!}
              alt=""
              fill
              quality={90}
              sizes="640px"
              className="pointer-events-none hidden scale-110 object-cover blur-2xl brightness-[0.4] min-[1921px]:block"
            />
            <div
              ref={imageRef}
              className={
                reduce
                  ? "absolute inset-0"
                  : "absolute top-0 left-1/2 aspect-[2/3] w-auto shadow-[0_0_120px_rgba(0,0,0,0.7)]"
              }
              style={
                reduce
                  ? undefined
                  : { height: "max(160svh, min(150vw, 2880px))", transform: "translate3d(-50%, 0, 0)" }
              }
            >
              <Image
                src={section.imagem!}
                alt="Poço do elevador, da casa de máquinas à cabine"
                fill
                quality={90}
                sizes="(max-width: 767px) 240vw, (max-width: 1920px) 100vw, 1920px"
                className="object-cover"
              />
            </div>
          </>
        ) : (
          <MediaPanel
            src={section.imagem}
            video={section.video}
            alt=""
            label="Poço, máquina e cabine"
            dimensao="1920 × 1080 px"
            hintClassName="hidden"
            className="absolute inset-0 h-full"
            scene={<ShaftScene />}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-graphite/15" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-graphite/70 to-transparent" />
        <div className="absolute right-5 bottom-[18%] left-5 z-10 flex flex-col gap-6 md:left-8 min-[1200px]:right-20 min-[1200px]:flex-row min-[1200px]:items-end min-[1200px]:justify-between">
          <h2 className="max-w-[14ch] text-[32px] leading-[38px] font-medium tracking-tight text-inverse min-[1200px]:text-[48px] min-[1200px]:leading-[52px]">
            {section.titulo}
          </h2>
          {reduce ? (
            <p className="text-sm tracking-[0.14em] text-white uppercase">{data.palavras.join(" · ")}</p>
          ) : (
            <p key={data.palavras[index]} className="animate-word text-2xl text-white">
              {data.palavras[index]}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function ShaftScene() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(#121417,#1c1f24_40%,#121417)]">
      <div className="absolute inset-y-0 left-[22%] w-px bg-white/15" />
      <div className="absolute inset-y-0 right-[22%] w-px bg-white/15" />
      <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-white/80" />
      <div className="absolute top-[18%] right-[30%] left-[30%] h-16 border border-white/10" />
      <div className="absolute top-[42%] right-[34%] left-[34%] h-10 border border-white/10" />
      <div className="absolute right-[38%] bottom-[18%] left-[38%] h-24 bg-white/5" />
    </div>
  )
}
