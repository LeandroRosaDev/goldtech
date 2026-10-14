import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Wordmark({
  href = "/#inicio",
  className,
  linked = true,
}: {
  href?: string
  className?: string
  linked?: boolean
}) {
  const classes = "inline-flex items-center"
  const content = (
    <Image
      src="/imagens/logotipo 1.png"
      alt="Goldtech"
      width={1125}
      height={300}
      unoptimized
      className={cn("h-7 w-auto", className)}
    />
  )

  if (!linked) {
    return <span className={classes}>{content}</span>
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
