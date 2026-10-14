import type { Metadata } from "next"
import Link from "next/link"
import { categoriasPost, posts } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Informação para quem administra elevadores.",
}

export default function ConteudosPage() {
  const grupos = categoriasPost
    .map((categoria) => ({
      ...categoria,
      itens: posts.filter((post) => post.categoria === categoria.nome),
    }))
    .filter((categoria) => categoria.itens.length > 0)

  return (
    <PageMain>
      <PageBody>
        <PageIntro
          eyebrow="Goldtech Conteúdo"
          title="Informação para quem administra elevadores."
          summary="Textos curtos sobre manutenção, segurança e modernização, para quem decide no prédio."
        />
        <div id="noticias" className="mt-14 flex flex-col gap-14">
          {grupos.map((grupo) => (
            <section key={grupo.slug} aria-labelledby={`categoria-${grupo.slug}`}>
              <h2 id={`categoria-${grupo.slug}`} className="text-xs tracking-[0.14em] text-ink uppercase">
                {grupo.nome}
              </h2>
              <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {grupo.itens.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/conteudos/${item.slug}`} className="block py-5">
                      <span className="text-lg text-ink">{item.titulo}</span>
                      <span className="mt-2 block max-w-[46rem] text-sm leading-6 text-quiet">{item.resumo}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </PageBody>
    </PageMain>
  )
}
