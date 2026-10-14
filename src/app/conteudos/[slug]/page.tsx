import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"
import { MediaPanel } from "@/components/media/MediaPanel"

type Params = { slug: string }

export function generateStaticParams() {
  return posts.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((item) => item.slug === slug)
  if (!post) return { title: "Página não encontrada" }
  return { title: post.titulo, description: post.resumo }
}

export default async function ConteudoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = posts.find((item) => item.slug === slug)
  if (!post) notFound()

  const outros = posts.filter((item) => item.slug !== post.slug)

  return (
    <PageMain>
      <PageBody>
        <PageIntro eyebrow={post.categoria} title={post.titulo} summary={post.resumo} />
        <MediaPanel
          src={post.imagem}
          alt=""
          label={post.categoria}
          dimensao="1600 × 900 px"
          className="mt-10 aspect-video"
        />
        <div className="mt-10 max-w-[40rem] space-y-5">
          {post.corpo.map((paragrafo) => (
            <p key={paragrafo} className="text-base leading-[26px] text-ink">
              {paragrafo}
            </p>
          ))}
        </div>
        <div className="mt-16 border-t border-ink/10 pt-8">
          <h2 className="text-xs tracking-[0.14em] text-ink uppercase">Outros conteúdos</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {outros.map((item) => (
              <li key={item.slug}>
                <Link href={`/conteudos/${item.slug}`} className="text-base text-ink hover:text-ink">
                  {item.titulo}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/conteudos" className="mt-8 inline-flex items-center gap-2 text-sm text-ink">
            Ver conteúdos
            <span aria-hidden>→</span>
          </Link>
        </div>
      </PageBody>
    </PageMain>
  )
}
