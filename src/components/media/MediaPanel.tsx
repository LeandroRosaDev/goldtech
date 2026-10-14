import Image from "next/image"
import { cn } from "@/lib/utils"

export function MediaPanel({
  src,
  video,
  alt,
  label,
  dimensao,
  canto = "base",
  hintClassName,
  className,
  imageClassName,
  scene,
}: {
  src?: string
  video?: string
  alt: string
  label: string
  dimensao?: string
  canto?: "topo" | "base"
  hintClassName?: string
  className?: string
  imageClassName?: string
  scene?: React.ReactNode
}) {
  const placeholder = !video && !src
  const hint = dimensao ? `${label} — ${dimensao}` : label

  return (
    <div className={cn("relative overflow-hidden bg-graphite", className)}>
      {video ? (
        <video
          className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
          autoPlay
          muted
          loop
          playsInline
          poster={src}
        >
          <source src={video} />
        </video>
      ) : src ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(min-width: 1200px) 640px, 100vw"
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        (scene ?? <DefaultScene />)
      )}
      {placeholder ? (
        <span
          className={cn(
            "pointer-events-none absolute z-10 max-w-[75%] text-[11px] tracking-[0.12em] text-inverse uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]",
            hintClassName ?? (canto === "topo" ? "top-5 right-5 left-5" : "right-8 bottom-8 left-12"),
          )}
        >
          {hint}
        </span>
      ) : null}
    </div>
  )
}

function DefaultScene() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(160deg,#1c1f24_0%,#121417_58%,#2a241c_100%)]">
      <span className="absolute top-0 bottom-0 left-6 w-px bg-white/80" aria-hidden />
    </div>
  )
}
