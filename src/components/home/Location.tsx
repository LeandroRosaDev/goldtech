"use client"

import { useState } from "react"
import { asContent } from "@/lib/sections"
import type { HomeSection, Unidade } from "@/types/site"
import { cn } from "@/lib/utils"

function mapEmbedSrc(unidade: Unidade) {
  const pad = 0.012
  const left = unidade.longitude - pad
  const bottom = unidade.latitude - pad
  const right = unidade.longitude + pad
  const top = unidade.latitude + pad
  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${unidade.latitude}%2C${unidade.longitude}`
}

function mapLink(unidade: Unidade) {
  return `https://www.openstreetmap.org/?mlat=${unidade.latitude}&mlon=${unidade.longitude}#map=16/${unidade.latitude}/${unidade.longitude}`
}

export function Location({ section }: { section: HomeSection }) {
  const unidades = asContent<Unidade[]>(section)
  const [activeId, setActiveId] = useState(unidades[0]?.id ?? "")
  const unidade = unidades.find((item) => item.id === activeId) ?? unidades[0]

  if (!unidade) return null

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-mist">
      <h2 className="sr-only">{section.titulo}</h2>
      {unidades.length > 1 ? (
        <div className="mx-auto flex max-w-[1120px] gap-6 overflow-x-auto px-5 py-6 md:px-8 min-[1440px]:px-0">
          {unidades.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn("text-sm whitespace-nowrap", item.id === unidade.id ? "text-ink" : "text-quiet")}
              onClick={() => setActiveId(item.id)}
            >
              {item.cidade}
            </button>
          ))}
        </div>
      ) : null}
      <div className="relative h-[280px] bg-graphite min-[1200px]:h-[420px]">
        <iframe
          key={unidade.id}
          title={`Mapa de ${unidade.cidade}`}
          src={mapEmbedSrc(unidade)}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-5 py-6 md:px-8 min-[1440px]:px-0">
        <p className="text-lg text-ink">{unidade.cidade}</p>
        <p className="text-sm text-quiet">{unidade.endereco}</p>
        <a href={mapLink(unidade)} className="text-sm text-ink hover:underline" target="_blank" rel="noreferrer">
          Abrir mapa
        </a>
      </div>
    </section>
  )
}
