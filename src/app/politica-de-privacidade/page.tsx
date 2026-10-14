import type { Metadata } from "next"
import { siteConfig } from "@/content/site"
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Goldtech trata os dados enviados pelo formulário de contato.",
}

export default function PrivacidadePage() {
  return (
    <PageMain>
      <PageBody>
        <PageIntro
          eyebrow="Goldtech"
          title="Política de privacidade"
          summary="Esta página descreve o que o site pede no formulário de contato e o que faz com essa informação."
        />
        <div className="mt-12 max-w-[40rem] space-y-10 text-base leading-[26px] text-quiet">
          <section>
            <h2 className="text-2xl font-medium text-ink">Dados do formulário</h2>
            <p className="mt-4">
              O formulário de contato pede nome, empresa ou condomínio, telefone, e-mail, cidade, assunto e mensagem.
            </p>
            <p className="mt-4">
              Nesta versão do site, o envio permanece no navegador. Os dados não são encaminhados a um sistema externo.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-ink">Finalidade</h2>
            <p className="mt-4">
              A Goldtech usa essas informações para responder pedidos de avaliação, orçamento e atendimento. Não há
              uso publicitário nem repasse a terceiros nesta versão.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-ink">Contato</h2>
            <p className="mt-4">
              Para falar sobre estes dados, escreva para{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-ink hover:underline">
                {siteConfig.email}
              </a>{" "}
              ou ligue para{" "}
              <a href={siteConfig.telefoneHref} className="text-ink hover:underline">
                {siteConfig.telefone}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 id="cookies" className="text-2xl font-medium text-ink">
              Cookies
            </h2>
            <p className="mt-4">
              Esta versão do site não grava cookies de rastreamento e não exibe banner de consentimento. Não há
              medição de audiência nem publicidade baseada em navegação.
            </p>
          </section>
        </div>
      </PageBody>
    </PageMain>
  )
}
