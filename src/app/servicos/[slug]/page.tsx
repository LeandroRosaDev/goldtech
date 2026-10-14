import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { servicos } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"
import { MediaPanel } from "@/components/media/MediaPanel"
import { ButtonLink } from "@/components/ui/button-link"

type Params = { slug: string }

export function generateStaticParams() {
  return servicos.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const servico = servicos.find((item) => item.slug === slug)
  if (!servico) return { title: "Página não encontrada" }
  return { title: servico.titulo, description: servico.frase }
}

export default async function ServicoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const servico = servicos.find((item) => item.slug === slug)
  if (!servico) notFound()

  const outros = servicos.filter((item) => item.slug !== servico.slug)

  return (
    <PageMain>
      <PageBody>
        <PageIntro eyebrow="Soluções" title={servico.titulo} summary={servico.frase} />
        <MediaPanel
          src={servico.imagem}
          alt=""
          label={servico.titulo}
          dimensao="1600 × 1000 px"
          className="mt-10 aspect-[16/9]"
        />
        <p className="mt-8 max-w-[40rem] text-base leading-[26px] text-quiet">{servico.descricao}</p>
        <div className="mt-12 grid gap-12 min-[1200px]:grid-cols-2">
          <div>
            <h2 className="text-xs tracking-[0.14em] text-ink uppercase">O que inclui</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {servico.inclui.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-ink">
                  <span className="size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.14em] text-ink uppercase">Para quem é</h2>
            <p className="mt-4 text-base leading-[26px] text-quiet">{servico.paraQuem}</p>
          </div>
        </div>
        <div className="mt-12">
          <ButtonLink href="/#contato">Solicitar avaliação técnica</ButtonLink>
        </div>
        <div className="mt-16 border-t border-ink/10 pt-8">
          <h2 className="text-xs tracking-[0.14em] text-ink uppercase">Outras soluções</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {outros.map((item) => (
              <li key={item.slug}>
                <Link href={`/servicos/${item.slug}`} className="text-base text-ink hover:text-ink">
                  {item.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageBody>
    </PageMain>
  )
}
