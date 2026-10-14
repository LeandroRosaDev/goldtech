import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  onClick,
}: {
  href: string
  children: React.ReactNode
  variant?: "solid" | "outline" | "outline-dark"
  className?: string
  onClick?: () => void
}) {
  return (
    <Button
      nativeButton={false}
      render={<Link href={href} onClick={onClick} />}
      className={cn(
        "h-12 rounded-[2px] px-5 text-sm font-medium active:translate-y-0",
        variant === "solid" && "bg-ink text-white hover:bg-ink/90",
        variant === "outline" &&
          "border-inverse bg-transparent text-inverse hover:bg-white/10",
        variant === "outline-dark" &&
          "border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-transparent",
        className,
      )}
    >
      {children}
    </Button>
  )
}
