import { cn } from "@/lib/utils"
import type { SectionBackground } from "@/types/site"

export const sectionPad = "py-16 md:py-20 min-[1200px]:py-[120px]"

export function sectionBackground(fundo: SectionBackground = "white") {
  if (fundo === "mist") return "bg-mist text-ink"
  if (fundo === "graphite" || fundo === "image") return "bg-graphite text-inverse"
  return "bg-white text-ink"
}

export function Container({
  wide = false,
  className,
  children,
}: {
  wide?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8",
        wide
          ? "max-w-[1320px] min-[1440px]:max-w-[1480px] min-[1440px]:px-20"
          : "max-w-[1120px] min-[1440px]:px-0",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-xs font-medium tracking-[0.14em] text-ink uppercase", className)}>
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  inverse = false,
  className,
}: {
  children: React.ReactNode
  inverse?: boolean
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-[32px] leading-[38px] font-medium tracking-tight min-[1200px]:text-[48px] min-[1200px]:leading-[52px]",
        inverse ? "text-inverse" : "text-ink",
        className,
      )}
    >
      {children}
    </h2>
  )
}
