import Link from "next/link"
import { asContent } from "@/lib/sections"
import type { HomeSection, Post } from "@/types/site"
import { Container, Eyebrow, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { MediaPanel } from "@/components/media/MediaPanel"
import { Reveal } from "@/components/motion/Reveal"

export function Posts({ section }: { section: HomeSection }) {
  const items = asContent<Post[]>(section)
  const [featured, ...rest] = items

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-white">
      <Container className={sectionPad}>
        <Reveal>
          {section.tema ? <Eyebrow>{section.tema}</Eyebrow> : null}
          <SectionTitle className="mt-4 max-w-[16ch]">{section.titulo}</SectionTitle>
          <div className="mt-10 grid gap-8 min-[1200px]:grid-cols-12">
            {featured ? (
              <article className="min-[1200px]:col-span-7">
                <Link href={`/conteudos/${featured.slug}`} className="block">
                  <MediaPanel
                    src={featured.imagem}
                    alt=""
                    label={featured.categoria}
                    dimensao="1600 × 900 px"
                    className="aspect-video"
                  />
                  <p className="mt-4 text-xs tracking-[0.14em] text-ink uppercase">{featured.categoria}</p>
                  <h3 className="mt-2 text-2xl leading-8 font-medium text-ink">{featured.titulo}</h3>
                  <p className="mt-3 text-base leading-[26px] text-quiet">{featured.resumo}</p>
                </Link>
              </article>
            ) : null}
            <div className="flex flex-col gap-8 min-[1200px]:col-span-5">
              {rest.map((item) => (
                <article key={item.slug} className="border-t border-ink/10 pt-6">
                  <Link href={`/conteudos/${item.slug}`}>
                    <p className="text-xs tracking-[0.14em] text-ink uppercase">{item.categoria}</p>
                    <h3 className="mt-2 text-xl leading-7 font-medium text-ink">{item.titulo}</h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
          {section.botaoTexto && section.botaoLink ? (
            <Link href={section.botaoLink} className="mt-10 inline-flex items-center gap-2 text-sm text-ink">
              {section.botaoTexto}
              <span aria-hidden>→</span>
            </Link>
          ) : null}
        </Reveal>
      </Container>
    </section>
  )
}
