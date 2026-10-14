import type { Metadata } from "next"
import { Cpu, Shield, Target } from "lucide-react"
import { institucional } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"
import { MediaPanel } from "@/components/media/MediaPanel"
import { ButtonLink } from "@/components/ui/button-link"
import type { Pilar } from "@/types/site"

export const metadata: Metadata = {
  title: "Sobre",
  description: institucional.corpo,
}

const icons = {
  shield: Shield,
  precision: Target,
  cpu: Cpu,
}

export default function SobrePage() {
  return (
    <PageMain>
      <PageBody>
        <PageIntro
          eyebrow={institucional.rotulo}
          title={institucional.titulo}
          summary={institucional.corpo}
        />
        <div className="mt-12 grid items-start gap-10 min-[1200px]:grid-cols-2">
          <MediaPanel
            src={institucional.imagem}
            video={institucional.video}
            alt="Técnico Goldtech em trabalho de campo"
            label="Técnico em campo"
            dimensao="1000 × 1250 px"
            className="aspect-video min-[1200px]:aspect-[4/5]"
          />
          <div className="flex flex-col gap-5">
            {institucional.historia.map((paragrafo) => (
              <p key={paragrafo} className="text-base leading-[26px] text-quiet">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {institucional.pilares.map((pilar) => (
            <PilarItem key={pilar.titulo} pilar={pilar} />
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/#contato">Solicitar contato</ButtonLink>
        </div>
      </PageBody>
    </PageMain>
  )
}

function PilarItem({ pilar }: { pilar: Pilar }) {
  const Icon = icons[pilar.icone]
  return (
    <li>
      <Icon strokeWidth={1.5} className="size-6 text-ink" aria-hidden />
      <h2 className="mt-4 text-lg font-medium text-ink">{pilar.titulo}</h2>
      <p className="mt-2 text-sm leading-6 text-quiet">{pilar.texto}</p>
    </li>
  )
}
