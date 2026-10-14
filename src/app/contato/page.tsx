import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Contact } from "@/components/home/Contact"
import { getSection } from "@/lib/sections"

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite contato com a Goldtech.",
}

export default function ContatoPage() {
  const section = getSection("contato")
  if (!section) notFound()

  return (
    <main className="pt-16 min-[1200px]:pt-[72px]">
      <Contact section={section} />
    </main>
  )
}
