import { siteConfig } from "@/content/site"
import { asContent } from "@/lib/sections"
import type { CtaConteudo, HomeSection } from "@/types/site"
import { ButtonLink } from "@/components/ui/button-link"
import { MediaPanel } from "@/components/media/MediaPanel"

export function Cta({ section }: { section: HomeSection }) {
  const data = asContent<CtaConteudo>(section)

  return (
    <section
      id={section.anchor}
      data-andar={section.andar}
      className="relative flex min-h-[80svh] items-center md:min-h-[70vh]"
    >
      <MediaPanel
        src={section.imagem}
        video={section.video}
        alt=""
        label="Edifício"
        dimensao="1920 × 1080 px"
        hintClassName="hidden"
        className="absolute inset-0 h-full"
        scene={<BuildingScene />}
      />
      <div className="absolute inset-0 bg-graphite/55" />
      {!section.imagem && !section.video ? (
        <p className="pointer-events-none absolute top-24 left-1/2 z-10 -translate-x-1/2 text-[11px] tracking-[0.12em] text-inverse uppercase">
          Edifício — 1920 × 1080 px
        </p>
      ) : null}
      <div className="relative mx-auto w-full max-w-[640px] px-5 text-center text-inverse">
        <h2 className="text-[32px] leading-[38px] font-medium tracking-tight min-[1200px]:text-[48px] min-[1200px]:leading-[52px]">
          {section.titulo}
        </h2>
        <p className="mt-4 text-base leading-[26px] text-inverse/85 min-[1200px]:text-[18px] min-[1200px]:leading-[30px]">
          {section.subtitulo ?? data.apoio}
        </p>
        <div className="mx-auto mt-8 flex w-full max-w-[360px] flex-col gap-3 md:max-w-none md:flex-row md:justify-center">
          {section.botaoTexto && section.botaoLink ? (
            <ButtonLink href={section.botaoLink} className="bg-white text-ink hover:bg-white/90">
              {section.botaoTexto}
            </ButtonLink>
          ) : null}
          <ButtonLink href={siteConfig.whatsappHref} variant="outline">
            {data.whatsappTexto}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

function BuildingScene() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#1c1f24,#121417)]">
      <div className="absolute inset-x-[22%] top-[8%] bottom-0 border-x border-white/10" />
      <div className="absolute top-[18%] right-[30%] left-[30%] h-24 border border-white/10" />
      <div className="absolute top-[38%] right-[34%] bottom-[12%] left-[34%] border border-white/40" />
    </div>
  )
}
