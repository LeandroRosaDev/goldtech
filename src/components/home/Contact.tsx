"use client"

import { useId, useState } from "react"
import { redesSociais, siteConfig } from "@/content/site"
import { asContent } from "@/lib/sections"
import type { Contato, ContatoConteudo, HomeSection } from "@/types/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Container, sectionPad } from "@/components/layout/primitives"

const empty: Contato = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  cidade: "",
  assunto: "",
  mensagem: "",
}

const fields: { name: keyof Contato; label: string; type?: string }[] = [
  { name: "nome", label: "Nome" },
  { name: "empresa", label: "Empresa / Condomínio" },
  { name: "telefone", label: "Telefone", type: "tel" },
  { name: "email", label: "E-mail", type: "email" },
  { name: "cidade", label: "Cidade" },
  { name: "assunto", label: "Assunto" },
]

export function Contact({ section }: { section: HomeSection }) {
  const data = asContent<ContatoConteudo>(section)
  const formId = useId()
  const [values, setValues] = useState<Contato>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Contato, string>>>({})
  const [sent, setSent] = useState<Contato | null>(null)

  const socials = redesSociais.filter((rede) => rede.nome === "Instagram")

  function validate(next: Contato) {
    const result: Partial<Record<keyof Contato, string>> = {}
    if (!next.nome.trim()) result.nome = "Informe seu nome."
    if (!next.empresa.trim()) result.empresa = "Informe a empresa ou o condomínio."
    if (!next.telefone.trim()) result.telefone = "Informe o telefone."
    if (!next.email.trim()) result.email = "Informe o e-mail."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) result.email = "Informe um e-mail válido."
    if (!next.cidade.trim()) result.cidade = "Informe a cidade."
    if (!next.assunto.trim()) result.assunto = "Informe o assunto."
    if (!next.mensagem.trim()) result.mensagem = "Escreva uma mensagem."
    return result
  }

  return (
    <section id={section.anchor} data-andar={section.andar} className="bg-white">
      <h2 className="sr-only">{section.titulo}</h2>
      <Container className={sectionPad}>
        <div className="grid gap-12 min-[1200px]:grid-cols-12">
          <dl className="flex flex-col gap-6 min-[1200px]:col-span-5">
            {siteConfig.contatos.map((contato) => (
              <Fact
                key={contato.rotulo}
                label={contato.rotulo}
                href={contato.href}
                value={contato.telefone}
              />
            ))}
            <Fact label="WhatsApp" href={siteConfig.whatsappHref} value={siteConfig.whatsapp} />
            {siteConfig.emails.map((item) => (
              <Fact
                key={item.email}
                label={`E-mail ${item.rotulo}`}
                href={`mailto:${item.email}`}
                value={item.email}
                compact
              />
            ))}
            <Fact label="Horário" value={siteConfig.horario} />
            <Fact label="Endereço" value={siteConfig.endereco} />
            {socials.map((rede) => (
              <Fact key={rede.nome} label={rede.nome} href={rede.href} value={rede.nome} />
            ))}
          </dl>
          <div className="min-[1200px]:col-span-7">
            <div className="rounded-3xl border border-ink/10 bg-mist p-6 shadow-[0_24px_60px_rgba(18,20,23,0.06)] md:p-8">
            <p className="text-xs tracking-[0.14em] text-ink uppercase">Fale com a Goldtech</p>
            <p className="mt-3 mb-6 max-w-[36ch] text-2xl leading-8 font-medium text-ink">
              Conte o que o elevador precisa. A equipe comercial retorna.
            </p>
            {sent ? (
              <div className="flex min-h-[320px] flex-col justify-center">
                <p className="text-xs tracking-[0.14em] text-ink uppercase">Mensagem enviada</p>
                <p className="mt-4 text-[32px] leading-[38px] font-medium text-ink">{data.sucesso}</p>
              </div>
            ) : (
              <form
                noValidate
                className="grid gap-4 md:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  const payload: Contato = {
                    nome: values.nome.trim(),
                    empresa: values.empresa.trim(),
                    telefone: values.telefone.trim(),
                    email: values.email.trim(),
                    cidade: values.cidade.trim(),
                    assunto: values.assunto.trim(),
                    mensagem: values.mensagem.trim(),
                  }
                  const nextErrors = validate(payload)
                  setErrors(nextErrors)
                  if (Object.keys(nextErrors).length > 0) return
                  setSent(payload)
                }}
              >
                {fields.map((field) => (
                  <Field
                    key={field.name}
                    id={`${formId}-${field.name}`}
                    label={field.label}
                    type={field.type}
                    value={values[field.name]}
                    error={errors[field.name]}
                    onChange={(value) => setValues((current) => ({ ...current, [field.name]: value }))}
                  />
                ))}
                <Field
                  id={`${formId}-mensagem`}
                  label="Mensagem"
                  value={values.mensagem}
                  error={errors.mensagem}
                  multiline
                  className="md:col-span-2"
                  onChange={(value) => setValues((current) => ({ ...current, mensagem: value }))}
                />
                <Button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-full bg-ink text-white hover:bg-ink/90 active:translate-y-0 md:col-span-2"
                >
                  {section.botaoTexto}
                  <span aria-hidden>→</span>
                </Button>
              </form>
            )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Fact({
  label,
  value,
  href,
  compact = false,
}: {
  label: string
  value: string
  href?: string
  compact?: boolean
}) {
  return (
    <div>
      <dt className="text-xs tracking-[0.14em] text-ink uppercase">{label}</dt>
      <dd
        className={
          compact
            ? "mt-2 text-lg leading-7 break-all text-ink"
            : "mt-2 text-[28px] leading-8 break-words text-ink"
        }
      >
        {href ? (
          <a href={href} className="hover:text-ink">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  multiline = false,
  className,
}: {
  id: string
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  multiline?: boolean
  className?: string
}) {
  const errorId = `${id}-error`
  const controlClass =
    "h-12 rounded-xl border-ink/10 bg-white px-4 text-base text-ink shadow-none focus-visible:border-ink focus-visible:ring-ink/30 md:text-base"

  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <Label htmlFor={id} className="text-xs tracking-[0.12em] text-quiet uppercase">
        {label}
      </Label>
      {multiline ? (
        <Textarea
          id={id}
          rows={5}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="min-h-[140px] rounded-xl border-ink/10 bg-white px-4 py-3 text-base text-ink shadow-none field-sizing-fixed focus-visible:border-ink focus-visible:ring-ink/30 md:text-base"
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={controlClass}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
