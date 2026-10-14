import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage"

export default function NotFound() {
  return (
    <PageMain>
      <PageBody>
        <PageIntro
          eyebrow="Goldtech"
          title="Página não encontrada"
          summary="O endereço não existe ou o conteúdo ainda não foi publicado."
        />
      </PageBody>
    </PageMain>
  )
}
