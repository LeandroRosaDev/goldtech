import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projetos } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"
import { MediaPanel } from "@/components/media/MediaPanel"
import { ButtonLink } from "@/components/ui/button-link"

type Params = { slug: string }

export function generateStaticParams() {
  return projetos.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const projeto = projetos.find((item) => item.slug === slug)
  if (!projeto) return { title: "Página não encontrada" }
  return { title: projeto.nome, description: projeto.resumo }
}

export default async function ProjetoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const projeto = projetos.find((item) => item.slug === slug)
  if (!projeto) notFound()

  const blocos = [
    { titulo: "Problema", texto: projeto.problema },
    { titulo: "Diagnóstico", texto: projeto.diagnostico },
    { titulo: "Solução", texto: projeto.solucao },
    { titulo: "Resultado", texto: projeto.resultado },
  ]

  return (
    <PageMain>
      <PageBody>
        <PageIntro eyebrow="Projetos" title={projeto.nome} summary={projeto.resumo} />
        <dl className="mt-8 flex flex-col gap-2 text-sm text-quiet sm:flex-row sm:gap-8">
          <div>
            <dt className="text-xs tracking-[0.14em] text-ink uppercase">Equipamentos</dt>
            <dd className="mt-1 text-ink">{projeto.equipamentos}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-ink uppercase">Serviço</dt>
            <dd className="mt-1 text-ink">{projeto.servico}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-ink uppercase">Cidade</dt>
            <dd className="mt-1 text-ink">{projeto.cidade}</dd>
          </div>
        </dl>
        <MediaPanel
          src={projeto.imagem}
          alt=""
          label={projeto.nome}
          dimensao="1600 × 1000 px"
          className="mt-10 aspect-[16/9]"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {blocos.map((bloco) => (
            <section key={bloco.titulo}>
              <h2 className="text-xs tracking-[0.14em] text-ink uppercase">{bloco.titulo}</h2>
              <p className="mt-3 text-base leading-[26px] text-quiet">{bloco.texto}</p>
            </section>
          ))}
        </div>
        <figure className="mt-12 border-l-2 border-ink py-1 pl-6">
          <blockquote className="text-xl leading-8 font-medium text-ink">
            “{projeto.depoimento.texto}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-quiet">
            {projeto.depoimento.autor}
            <span className="mt-1 block">{projeto.depoimento.cargo}</span>
          </figcaption>
        </figure>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/#contato">Solicitar avaliação técnica</ButtonLink>
          <Link href="/projetos" className="text-sm text-ink">
            Ver projetos
          </Link>
        </div>
      </PageBody>
    </PageMain>
  )
}
