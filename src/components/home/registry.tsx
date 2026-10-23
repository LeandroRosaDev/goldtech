import type { ComponentType } from "react"
import type { HomeSection, SectionId } from "@/types/site"
import { About } from "@/components/home/About"
import { Cinematic } from "@/components/home/Cinematic"
import { Clients } from "@/components/home/Clients"
import { Contact } from "@/components/home/Contact"
import { Cta } from "@/components/home/Cta"
import { Hero } from "@/components/home/Hero"
import { Indicators } from "@/components/home/Indicators"
import { Location } from "@/components/home/Location"
import { Modernization } from "@/components/home/Modernization"
import { Posts } from "@/components/home/Posts"
import { Projects } from "@/components/home/Projects"
import { Services } from "@/components/home/Services"
import { Team } from "@/components/home/Team"
import { Technology } from "@/components/home/Technology"
import { Universo } from "@/components/home/Universo"
import { Why } from "@/components/home/Why"

export const sectionRegistry: Record<SectionId, ComponentType<{ section: HomeSection }>> = {
  hero: Hero,
  indicadores: Indicators,
  sobre: About,
  servicos: Services,
  experiencia: Cinematic,
  diferenciais: Why,
  tecnologia: Technology,
  modernizacao: Modernization,
  universo: Universo,
  clientes: Clients,
  projetos: Projects,
  equipe: Team,
  conteudos: Posts,
  cta: Cta,
  contato: Contact,
  localizacao: Location,
}
