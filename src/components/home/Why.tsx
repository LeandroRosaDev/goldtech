import { asContent } from "@/lib/sections"
import type { Diferencial, HomeSection } from "@/types/site"
import { Container, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { Reveal } from "@/components/motion/Reveal"

export function Why({ section }: { section: HomeSection }) {
  const items = asContent<Diferencial[]>(section)

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-white">
      <Container className={sectionPad}>
        <Reveal>
          <div className="grid gap-10 min-[1200px]:grid-cols-12">
            <div className="min-[1200px]:col-span-4">
              <div className="min-[1200px]:sticky min-[1200px]:top-28">
                <SectionTitle>{section.titulo}</SectionTitle>
              </div>
            </div>
            <ol className="min-[1200px]:col-span-8">
              {items.map((item) => (
                <li key={item.numero} className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/10 py-6">
                  <span className="text-sm text-ink">{item.numero}</span>
                  <div>
                    <h3 className="text-xl font-medium text-ink">{item.titulo}</h3>
                    <p className="mt-2 text-base leading-[26px] text-quiet">{item.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
