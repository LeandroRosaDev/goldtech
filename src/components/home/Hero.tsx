import { getActiveBanner } from "@/lib/sections"
import type { HomeSection } from "@/types/site"
import { ButtonLink } from "@/components/ui/button-link"
import { MediaPanel } from "@/components/media/MediaPanel"
import { Wordmark } from "@/components/layout/Wordmark"

export function Hero({ section }: { section: HomeSection }) {
  const banner = getActiveBanner()
  if (!banner) return null

  return (
    <section
      id={section.anchor}
      data-andar={section.andar}
      className="relative h-svh overflow-hidden bg-graphite text-inverse"
    >
      <MediaPanel
        src={banner.imagem ?? section.imagem}
        video={banner.video ?? section.video}
        alt=""
        label="Lobby"
        dimensao="1920 × 1080 px"
        hintClassName="top-28 left-1/2 z-30 -translate-x-1/2 text-center"
        className="absolute inset-0 h-full w-full"
        scene={<LobbyScene />}
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-graphite/80 via-graphite/30 to-graphite/20" />
      <div className="hero-poster pointer-events-none absolute inset-0 z-10 bg-graphite md:hidden" />
      <div className="hero-door hero-door-left pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-1/2 bg-[linear-gradient(90deg,#1c1f24,#2a2e35_46%,#121417_54%,#1a1d22)] md:block" />
      <div className="hero-door hero-door-right pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-1/2 bg-[linear-gradient(270deg,#1c1f24,#2a2e35_46%,#121417_54%,#1a1d22)] md:block" />
      <div className="hero-seam pointer-events-none absolute top-0 left-1/2 z-30 hidden h-full w-0.5 -translate-x-1/2 bg-white md:block" />
      <div className="hero-mark pointer-events-none absolute inset-0 z-40 flex origin-center items-center justify-center will-change-[transform,opacity]">
        <Wordmark linked={false} className="h-12 w-auto md:h-16" />
      </div>
      <div className="hero-copy absolute inset-x-0 bottom-[12vh] z-40 mx-auto w-full max-w-[760px] px-5 text-center">
        <p className="text-xs font-medium tracking-[0.14em] text-white uppercase">{banner.rotulo}</p>
        <h1 className="mt-4 text-[36px] leading-[42px] font-medium tracking-tight md:text-[48px] md:leading-[52px] min-[1200px]:text-[72px] min-[1200px]:leading-[76px]">
          {banner.linhas[0]}
          <br />
          {banner.linhas[1]}
        </h1>
        <p className="mx-auto mt-5 max-w-[36rem] text-base leading-[26px] text-inverse/80">{banner.apoio}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={banner.botaoPrimarioLink} className="w-full bg-white text-ink hover:bg-white/90 sm:w-auto">
            {banner.botaoPrimarioTexto}
          </ButtonLink>
          <ButtonLink href={banner.botaoSecundarioLink} variant="outline" className="w-full sm:w-auto">
            {banner.botaoSecundarioTexto}
          </ButtonLink>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-40 h-8 w-px -translate-x-1/2 bg-white" />
    </section>
  )
}

function LobbyScene() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3a414c_0%,#121417_64%)]">
      <div className="absolute inset-x-[16%] top-[16%] bottom-[20%] border border-white/15" />
      <div className="absolute top-[16%] bottom-[20%] left-1/2 w-px bg-white/70" />
      <div className="absolute right-[20%] bottom-[20%] left-[20%] h-px bg-white/25" />
      <div className="absolute bottom-[20%] left-[28%] h-28 w-7 bg-white/10" />
      <div className="absolute bottom-[20%] left-[40%] h-36 w-5 bg-white/15" />
      <div className="absolute right-[32%] bottom-[20%] h-24 w-9 bg-white/10" />
    </div>
  )
}
