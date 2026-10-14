"use client"

import Link from "next/link"
import { footerNav, redesSociais, siteConfig } from "@/content/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Wordmark } from "@/components/layout/Wordmark"

const columns = [
  { id: "empresa", titulo: "Empresa", links: footerNav.empresa },
  { id: "solucoes", titulo: "Soluções", links: footerNav.solucoes },
  { id: "conteudo", titulo: "Conteúdo", links: footerNav.conteudo },
]

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-sm text-inverse/80 hover:text-inverse">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Attendance() {
  return (
    <ul className="flex flex-col gap-3 text-sm text-inverse/80">
      {siteConfig.contatos.map((contato) => (
        <li key={contato.rotulo}>
          <a href={contato.href} className="hover:text-inverse">
            {contato.rotulo} — {contato.telefone}
          </a>
        </li>
      ))}
      <li>
        <a href={siteConfig.whatsappHref} className="hover:text-inverse">
          WhatsApp
        </a>
      </li>
      {siteConfig.emails.map((item) => (
        <li key={item.email}>
          <a href={`mailto:${item.email}`} className="hover:text-inverse">
            {item.email}
          </a>
        </li>
      ))}
    </ul>
  )
}

function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true,
  } as const

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === "LinkedIn") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10.5V16M8 7.5h.01M12 16v-3.2a2 2 0 0 1 4 0V16" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path
        d="M14 9h2V6h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13v-1.2c0-.5.4-.8 1-.8Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

function SocialRow() {
  return (
    <ul className="mt-10 flex gap-4">
      {redesSociais.map((rede) => (
        <li key={rede.nome}>
          <a href={rede.href} className="text-inverse" aria-label={rede.nome}>
            <SocialIcon name={rede.nome} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Footer() {
  return (
    <footer className="bg-graphite px-5 py-20 text-inverse md:px-8 min-[1440px]:px-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="hidden min-[1200px]:grid min-[1200px]:grid-cols-5 min-[1200px]:gap-8">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[16rem] text-sm leading-6 text-inverse/75">{siteConfig.frase}</p>
          </div>
          {columns.map((column) => (
            <div key={column.id}>
              <h2 className="text-xs tracking-[0.14em] text-white uppercase">{column.titulo}</h2>
              <div className="mt-4">
                <LinkList links={column.links} />
              </div>
            </div>
          ))}
          <div>
            <h2 className="text-xs tracking-[0.14em] text-white uppercase">Atendimento</h2>
            <div className="mt-4">
              <Attendance />
            </div>
          </div>
        </div>

        <div className="min-[1200px]:hidden">
          <Wordmark />
          <p className="mt-4 max-w-[20rem] text-sm leading-6 text-inverse/75">{siteConfig.frase}</p>
          <Accordion className="mt-8" defaultValue={[]}>
            {columns.map((column) => (
              <AccordionItem key={column.id} value={column.id} className="border-white/10">
                <AccordionTrigger className="py-4 text-sm tracking-[0.14em] text-inverse uppercase hover:no-underline">
                  {column.titulo}
                </AccordionTrigger>
                <AccordionContent>
                  <LinkList links={column.links} />
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="atendimento" className="border-white/10">
              <AccordionTrigger className="py-4 text-sm tracking-[0.14em] text-inverse uppercase hover:no-underline">
                Atendimento
              </AccordionTrigger>
              <AccordionContent>
                <Attendance />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <SocialRow />

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-inverse/70 md:flex-row md:items-center md:justify-between">
          <p>© Goldtech — Todos os direitos reservados</p>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
            <Link href="/politica-de-privacidade#cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
