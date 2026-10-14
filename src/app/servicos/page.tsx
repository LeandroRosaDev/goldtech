import type { Metadata } from "next";
import Link from "next/link";
import { servicos } from "@/content/site";
import { PageBody, PageIntro, PageMain } from "@/components/pages/SimplePage";
import { MediaPanel } from "@/components/media/MediaPanel";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Manutenção, modernização, instalação e emergências.",
};

export default function ServicosPage() {
  return (
    <PageMain tone="mist">
      <PageBody>
        <PageIntro
          eyebrow="Soluções Goldtech"
          title="Cuidamos de todas as etapas da vida do seu elevador."
          summary="Da visita programada à modernização, cada frente tem página própria."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {servicos.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/servicos/${item.slug}`}
                className="group relative block min-h-[220px] overflow-hidden md:min-h-[280px]"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  <MediaPanel
                    src={item.imagem}
                    alt=""
                    label={item.titulo}
                    dimensao="1600 × 1000 px"
                    canto="topo"
                    className="h-full min-h-[220px] md:min-h-[280px]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/80 to-transparent" />
                <div className="relative flex min-h-[220px] flex-col justify-end p-6 text-inverse [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] md:min-h-[280px]">
                  <h2 className="text-[28px] leading-8 font-medium">
                    {item.titulo}
                  </h2>
                  <p className="mt-2 text-sm text-inverse/85">{item.frase}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-white">
                    Conhecer solução
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PageBody>
    </PageMain>
  );
}
