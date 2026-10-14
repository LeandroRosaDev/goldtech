import type { Metadata } from "next"
import Link from "next/link"
import { clientes, projetos } from "@/content/site"
import { ClientLogo } from "@/components/clients/ClientLogo"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"

export const metadata: Metadata = {
  title: "Clientes",
  description: "Empresas e empreendimentos que escolheram a Goldtech.",
}

export default function ClientesPage() {
  return (
    <PageMain tone="mist">
      <PageBody>
        <PageIntro
          eyebrow="Confiança"
          title="Empresas e empreendimentos que escolheram a Goldtech."
          summary="Os nomes abaixo estão em atendimento. Onde já existe um case publicado, o projeto abre na página correspondente."
        />
        <ul className="mt-12 grid grid-cols-2 gap-8 min-[768px]:grid-cols-5">
          {clientes.map((item) => {
            const projeto = projetos.find((entry) => entry.slug === item.projetoSlug)
            return (
              <li key={item.nome} className="flex flex-col items-center">
                <ClientLogo nome={item.nome} imagem={item.imagem} />
                {projeto ? (
                  <Link
                    href={`/projetos/${projeto.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-ink"
                  >
                    Ver projeto
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </li>
            )
          })}
        </ul>
      </PageBody>
    </PageMain>
  )
}
