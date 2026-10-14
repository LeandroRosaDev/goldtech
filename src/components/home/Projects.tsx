import Link from "next/link"
import { asContent } from "@/lib/sections"
import type { HomeSection, Projeto } from "@/types/site"
import { Container, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { MediaPanel } from "@/components/media/MediaPanel"
import { Reveal } from "@/components/motion/Reveal"

export function Projects({ section }: { section: HomeSection }) {
  const items = asContent<Projeto[]>(section)

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-white">
      <Container wide className={sectionPad}>
        <Reveal>
          <SectionTitle>{section.titulo}</SectionTitle>
          <ul className="mt-10 grid gap-6 min-[1200px]:grid-cols-3">
            {items.map((item) => (
              <li key={item.slug}>
                <article className="flex h-full flex-col">
                  <MediaPanel
                    src={item.imagem}
                    alt=""
                    label={item.nome}
                    dimensao="1600 × 1000 px"
                    className="aspect-[16/10]"
                  />
                  <div className="flex flex-1 flex-col pt-5">
                    <h3 className="text-2xl font-medium text-ink">{item.nome}</h3>
                    <p className="mt-3 text-sm text-ink">{item.equipamentos}</p>
                    <p className="mt-1 text-sm text-quiet">{item.servico}</p>
                    <p className="mt-1 text-sm text-quiet">{item.cidade}</p>
                    <Link href={`/projetos/${item.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm text-ink">
                      Ver projeto
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
