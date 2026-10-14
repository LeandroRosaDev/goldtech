import { Container, Eyebrow, sectionPad } from "@/components/layout/primitives"
import { cn } from "@/lib/utils"

export function PageMain({
  children,
  tone = "white",
  className,
}: {
  children: React.ReactNode
  tone?: "white" | "mist"
  className?: string
}) {
  return (
    <main className={cn(tone === "mist" ? "bg-mist" : "bg-white", "pt-16 min-[1200px]:pt-[72px]", className)}>
      {children}
    </main>
  )
}

export function PageBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <Container className={cn(sectionPad, className)}>{children}</Container>
}

export function PageIntro({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string
  title: string
  summary?: string
}) {
  return (
    <header>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-[18ch] text-[32px] leading-[38px] font-medium tracking-tight text-ink min-[1200px]:text-[48px] min-[1200px]:leading-[52px]">
        {title}
      </h1>
      {summary ? (
        <p className="mt-6 max-w-[40rem] text-base leading-[26px] text-quiet min-[1200px]:text-[18px] min-[1200px]:leading-[30px]">
          {summary}
        </p>
      ) : null}
    </header>
  )
}
