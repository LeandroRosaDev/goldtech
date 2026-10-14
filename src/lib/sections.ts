import { banners, homeSections } from "@/content/site"
import type { Banner, FloorId, HomeSection } from "@/types/site"

export const floorLabels: Record<FloorId, string> = {
  "07": "Início",
  "06": "Goldtech",
  "05": "Soluções",
  "04": "Tecnologia",
  "03": "Clientes",
  "02": "Equipe",
  "01": "Conteúdo",
  "00": "Contato",
}

const floorOrder: FloorId[] = ["07", "06", "05", "04", "03", "02", "01", "00"]

type Windowed = {
  dataInicio?: string | null
  dataFim?: string | null
}

function localDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function isWithinWindow(item: Windowed, now = new Date()) {
  const today = localDateKey(now)
  if (item.dataInicio && today < item.dataInicio) return false
  if (item.dataFim && today > item.dataFim) return false
  return true
}

export function getVisibleSections(sections: HomeSection[], now = new Date()) {
  return sections
    .filter((section) => section.ativo && isWithinWindow(section, now))
    .sort((a, b) => a.ordem - b.ordem)
}

export function getActiveBanner(now = new Date()): Banner | null {
  return (
    banners
      .filter((banner) => banner.ativo && isWithinWindow(banner, now))
      .sort((a, b) => a.ordem - b.ordem)[0] ?? null
  )
}

export function getHomeSections(now = new Date()) {
  const banner = getActiveBanner(now)
  return getVisibleSections(homeSections, now).filter((section) => {
    if (section.id === "hero") return Boolean(banner)
    return true
  })
}

export function getVisibleFloors(sections: HomeSection[]) {
  const present = new Set(sections.map((section) => section.andar).filter(Boolean))
  return floorOrder
    .filter((id) => present.has(id))
    .map((id) => ({ id, label: floorLabels[id] }))
}

export function getSection(id: HomeSection["id"]) {
  return homeSections.find((section) => section.id === id) ?? null
}

export function asContent<T>(section: HomeSection) {
  return section.conteudo as T
}
