import { asContent } from "@/lib/sections"
import type { Cliente, HomeSection } from "@/types/site"
import { ClientLogo } from "@/components/clients/ClientLogo"
import { Container, Eyebrow, SectionTitle } from "@/components/layout/primitives"
import { Reveal } from "@/components/motion/Reveal"

export function Clients({ section }: { section: HomeSection }) {
  const items = asContent<Cliente[]>(section)
  const loop = [...items, ...items]

  return (
    <section id={section.anchor} data-andar={section.andar} className="overflow-hidden bg-mist">
      <Container className="pt-16 pb-16 md:pt-20 md:pb-20 min-[1200px]:pt-[120px] min-[1200px]:pb-[120px]">
        <Reveal>
          {section.tema ? <Eyebrow>{section.tema}</Eyebrow> : null}
          <SectionTitle className="mt-4 max-w-[16ch]">{section.titulo}</SectionTitle>
        </Reveal>
        <ul className="mt-12 flex w-max animate-marquee gap-4 pr-4 hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap min-[768px]:grid min-[768px]:w-auto min-[768px]:animate-none min-[768px]:grid-cols-5 min-[768px]:gap-6 min-[768px]:pr-0">
          {loop.map((item, index) => {
            const duplicate = index >= items.length
            return (
              <li
                key={`${item.nome}-${index}`}
                aria-hidden={duplicate || undefined}
                className={`w-[150px] shrink-0 min-[768px]:w-auto ${duplicate ? "motion-reduce:hidden min-[768px]:hidden" : ""}`}
              >
                <ClientLogo nome={item.nome} imagem={item.imagem} />
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
