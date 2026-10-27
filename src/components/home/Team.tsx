import { asContent } from "@/lib/sections"
import type { EquipeConteudo, HomeSection } from "@/types/site"
import { Container, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { MediaPanel } from "@/components/media/MediaPanel"
import { Reveal } from "@/components/motion/Reveal"

export function Team({ section }: { section: HomeSection }) {
  const data = asContent<EquipeConteudo>(section)

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-mist">
      <Container wide className={sectionPad}>
        <Reveal>
          <SectionTitle className="max-w-[1120px]">{section.titulo}</SectionTitle>
          {section.subtitulo ? (
            <p className="mt-4 max-w-[36rem] text-base leading-[26px] text-quiet min-[1200px]:text-[18px] min-[1200px]:leading-[30px]">
              {section.subtitulo}
            </p>
          ) : null}
          {data.imagemColetiva ? (
            <figure className="relative mt-10">
              <MediaPanel
                src={data.imagemColetiva}
                alt="Equipe Goldtech"
                label="Equipe em campo"
                dimensao="1774 × 887 px"
                imageClassName="object-center"
                className="aspect-[2/1] w-full"
              />
              {data.legendaColetiva ? <Caption>{data.legendaColetiva}</Caption> : null}
            </figure>
          ) : null}
          <ul className="mt-10 grid gap-10 min-[768px]:grid-cols-3">
            {data.pessoas.map((pessoa) => (
              <li key={pessoa.nome}>
                <figure className="relative">
                  <MediaPanel
                    src={pessoa.imagem}
                    alt=""
                    label={pessoa.cargo}
                    dimensao="900 × 1200 px"
                    className="aspect-[3/4] w-full"
                  />
                  {pessoa.legenda ? <Caption>{pessoa.legenda}</Caption> : null}
                </figure>
                <h3 className="mt-4 text-xl font-medium text-ink">{pessoa.nome}</h3>
                <p className="mt-1 text-sm text-quiet">{pessoa.cargo}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="absolute bottom-3 left-3 bg-graphite/70 px-2 py-1 text-[11px] tracking-[0.12em] text-white uppercase">
      {children}
    </figcaption>
  )
}
