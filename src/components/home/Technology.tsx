import Image from "next/image"
import { asContent } from "@/lib/sections"
import type { HomeSection, TecnologiaConteudo } from "@/types/site"
import { Container, Eyebrow, SectionTitle, sectionPad } from "@/components/layout/primitives"
import { Reveal } from "@/components/motion/Reveal"

export function Technology({ section }: { section: HomeSection }) {
  const data = asContent<TecnologiaConteudo>(section)

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-mist">
      <Container className={sectionPad}>
        <Reveal>
          <div className="grid items-center gap-12 min-[1200px]:grid-cols-12">
            <div className="min-[1200px]:col-span-5">
              {section.tema ? <Eyebrow>{section.tema}</Eyebrow> : null}
              <SectionTitle className="mt-4">{section.titulo}</SectionTitle>
              <p className="mt-6 text-base leading-[26px] text-quiet min-[1200px]:text-[18px] min-[1200px]:leading-[30px]">
                {data.corpo}
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {data.itens.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <span className="size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-[1200px]:col-span-7">
              <DeviceMock desktop={data.imagemDesktop} mobile={data.imagemMobile} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function DeviceMock({ desktop, mobile }: { desktop?: string; mobile?: string }) {
  return (
    <figure className="relative mx-auto w-full max-w-[720px] pb-[22%]">
      <div className="relative aspect-[1024/502] w-[84%] overflow-hidden rounded-[10px] border border-ink/15 bg-white p-2 shadow-[0_24px_60px_rgba(18,20,23,0.18)]">
        <div className="relative h-full overflow-hidden rounded-[6px] bg-white">
          {desktop ? (
            <Image
              src={desktop}
              alt="Painel do sistema Elivus em um computador"
              fill
              unoptimized
              sizes="(min-width: 1200px) 600px, 100vw"
              className="object-contain object-left-top"
            />
          ) : (
            <ScreenFallback label="1600 × 1000 px" />
          )}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[34%] overflow-hidden rounded-[12px] border border-ink/15 bg-white p-1.5 shadow-[0_16px_40px_rgba(18,20,23,0.2)]">
        <div className="relative aspect-[398/859] overflow-hidden rounded-[8px] bg-white">
          {mobile ? (
            <Image
              src={mobile}
              alt="Painel do sistema Elivus em um celular"
              fill
              unoptimized
              sizes="240px"
              className="object-contain object-top"
            />
          ) : (
            <ScreenFallback label="750 × 1600 px" compact />
          )}
        </div>
      </div>
      <figcaption className="sr-only">
        Notebook e celular com o sistema Elivus de acompanhamento da operação.
      </figcaption>
    </figure>
  )
}

function ScreenFallback({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col justify-end bg-[linear-gradient(160deg,#1c1f24,#121417)] p-3">
      <span className={compact ? "text-[9px] tracking-wide text-inverse/80 uppercase" : "text-[11px] tracking-[0.12em] text-inverse/80 uppercase"}>
        {label}
      </span>
    </div>
  )
}
