import Link from "next/link"
import { Cpu, Shield, Target } from "lucide-react"
import { asContent } from "@/lib/sections"
import type { HomeSection, Institucional, Pilar } from "@/types/site"
import { Container, Eyebrow, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { MediaPanel } from "@/components/media/MediaPanel"
import { Reveal } from "@/components/motion/Reveal"

const icons = {
  shield: Shield,
  precision: Target,
  cpu: Cpu,
}

export function About({ section }: { section: HomeSection }) {
  const data = asContent<Institucional>(section)

  return (
    <section id={section.anchor} data-andar={section.andar} className={cnBackground(section)}>
      <Container className={sectionPad}>
        <Reveal>
          <div className="grid items-center gap-10 min-[1200px]:grid-cols-2">
            <MediaPanel
              src={section.imagem ?? data.imagem}
              video={section.video ?? data.video}
              alt="Técnico Goldtech em trabalho de campo"
              label="Técnico em campo"
              dimensao="1000 × 1250 px"
              imageClassName="object-top"
              className="aspect-[4/5] rounded-[2px] min-[768px]:aspect-[4/3] min-[1200px]:aspect-[4/5]"
            />
            <div>
              {section.tema ? <Eyebrow>{section.tema}</Eyebrow> : null}
              <SectionTitle className="mt-4">{section.titulo}</SectionTitle>
              <p className="mt-6 max-w-[36rem] text-base leading-[26px] text-quiet min-[1200px]:text-[18px] min-[1200px]:leading-[30px]">
                {section.subtitulo}
              </p>
              {section.botaoTexto && section.botaoLink ? (
                <Link href={section.botaoLink} className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
                  {section.botaoTexto}
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
            </div>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {data.pilares.map((pilar) => (
              <PilarItem key={pilar.titulo} pilar={pilar} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

function PilarItem({ pilar }: { pilar: Pilar }) {
  const Icon = icons[pilar.icone]
  return (
    <li>
      <Icon strokeWidth={1.5} className="size-6 text-ink" aria-hidden />
      <h3 className="mt-4 text-lg font-medium text-ink">{pilar.titulo}</h3>
      <p className="mt-2 text-sm leading-6 text-quiet">{pilar.texto}</p>
    </li>
  )
}

function cnBackground(section: HomeSection) {
  return section.fundo === "mist" ? "bg-mist" : "bg-white"
}
