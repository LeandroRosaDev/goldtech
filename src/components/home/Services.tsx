"use client";

import { useState } from "react";
import Link from "next/link";
import { asContent } from "@/lib/sections";
import type { HomeSection, Servico } from "@/types/site";
import {
  Container,
  Eyebrow,
  SectionTitle,
  sectionPad,
} from "@/components/layout/primitives";
import { MediaPanel } from "@/components/media/MediaPanel";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function Services({ section }: { section: HomeSection }) {
  const items = asContent<Servico[]>(section);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-mist">
      <Container wide className={sectionPad}>
        <Reveal>
          <div className="max-w-[1120px]">
            {section.tema ? <Eyebrow>{section.tema}</Eyebrow> : null}
            <SectionTitle className="mt-4 max-w-[16ch]">
              {section.titulo}
            </SectionTitle>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {items.map((item) => {
              const open = openSlug === item.slug;
              return (
                <li key={item.slug}>
                  <article
                    tabIndex={0}
                    data-open={open ? "true" : "false"}
                    className="group relative min-h-[220px] overflow-hidden md:min-h-[320px]"
                    onClick={() => setOpenSlug(open ? null : item.slug)}
                  >
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-focus-within:scale-[1.04] group-hover:scale-[1.04]">
                      <MediaPanel
                        src={item.imagem}
                        alt=""
                        label={item.titulo}
                        dimensao="1600 × 1000 px"
                        canto="topo"
                        className="h-full min-h-[220px] md:min-h-[320px]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/80 to-transparent" />
                    <div className="relative flex min-h-[220px] flex-col justify-end p-6 text-inverse [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] md:min-h-[320px]">
                      <h3 className="text-[28px] leading-8 font-medium">
                        {item.titulo}
                      </h3>
                      <p className="mt-2 text-sm text-inverse/85">
                        {item.frase}
                      </p>
                      <div
                        className={cn(
                          "max-h-0 overflow-hidden opacity-0 transition-all duration-700",
                          "group-focus-within:mt-4 group-focus-within:max-h-40 group-focus-within:opacity-100",
                          "group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100",
                          "group-data-[open=true]:mt-4 group-data-[open=true]:max-h-40 group-data-[open=true]:opacity-100",
                        )}
                      >
                        <p className="max-w-[46ch] text-sm leading-6 text-inverse/80">
                          {item.descricao}
                        </p>
                        <Link
                          href={`/servicos/${item.slug}`}
                          className="mt-3 inline-flex items-center gap-2 text-sm text-white"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Conhecer solução
                          <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
