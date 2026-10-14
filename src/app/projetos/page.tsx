import type { Metadata } from "next"
import Link from "next/link"
import { projetos } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"
import { MediaPanel } from "@/components/media/MediaPanel"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos Goldtech.",
}

export default function ProjetosPage() {
  return (
    <PageMain>
      <PageBody>
        <PageIntro
          eyebrow="Projetos Goldtech"
          title="Projetos em andamento e concluídos."
          summary="Cada case registra o problema, o que foi feito e o resultado para o empreendimento."
        />
        <ul className="mt-12 grid gap-8 min-[1200px]:grid-cols-3">
          {projetos.map((item) => (
            <li key={item.slug}>
              <article className="flex h-full flex-col">
                <MediaPanel
                  src={item.imagem}
                  alt=""
                  label={item.nome}
                  dimensao="1600 × 1000 px"
                  className="aspect-[16/10]"
                />
                <div className="flex flex-1 flex-col pt-5">
                  <h2 className="text-2xl font-medium text-ink">{item.nome}</h2>
                  <p className="mt-3 text-sm text-ink">{item.equipamentos}</p>
                  <p className="mt-1 text-sm text-quiet">{item.servico}</p>
                  <p className="mt-1 text-sm text-quiet">{item.cidade}</p>
                  <Link href={`/projetos/${item.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm text-ink">
                    Ver projeto
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </PageBody>
    </PageMain>
  )
}
