export type FloorId = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07"

export type SectionBackground = "white" | "mist" | "graphite" | "image"

export type SectionId =
  | "hero"
  | "indicadores"
  | "sobre"
  | "servicos"
  | "experiencia"
  | "diferenciais"
  | "tecnologia"
  | "modernizacao"
  | "clientes"
  | "projetos"
  | "equipe"
  | "conteudos"
  | "cta"
  | "contato"
  | "localizacao"

export type SeoFields = {
  title?: string
  description?: string
}

export type HomeSection = {
  id: SectionId
  anchor: string
  ativo: boolean
  ordem: number
  titulo: string
  subtitulo?: string
  tema?: string
  fundo: SectionBackground
  imagem?: string
  video?: string
  conteudo?: unknown
  botaoTexto?: string
  botaoLink?: string
  seo?: SeoFields
  dataInicio?: string | null
  dataFim?: string | null
  andar?: FloorId
}

export type Dated = {
  ativo: boolean
  dataInicio?: string | null
  dataFim?: string | null
}

export type Banner = Dated & {
  id: string
  ordem: number
  rotulo: string
  linhas: [string, string]
  apoio: string
  botaoPrimarioTexto: string
  botaoPrimarioLink: string
  botaoSecundarioTexto: string
  botaoSecundarioLink: string
  imagem?: string
  video?: string
  variante?: string
}

export type ContatoCanal = {
  rotulo: string
  telefone: string
  href: string
}

export type EmailCanal = {
  rotulo: string
  email: string
}

export type SiteConfig = {
  nome: string
  frase: string
  telefone: string
  telefoneHref: string
  whatsapp: string
  whatsappHref: string
  email: string
  emails: EmailCanal[]
  contatos: ContatoCanal[]
  horario: string
  endereco: string
}

export type SeoConfig = {
  title: string
  description: string
}

export type Indicador = {
  id: string
  valor: number
  prefixo?: string
  sufixo?: string
  rotulo: string
}

export type Pilar = {
  titulo: string
  texto: string
  icone: "shield" | "precision" | "cpu"
}

export type Institucional = {
  rotulo: string
  titulo: string
  corpo: string
  historia: string[]
  linkTexto: string
  link: string
  imagem?: string
  video?: string
  pilares: Pilar[]
}

export type Servico = {
  slug: string
  titulo: string
  frase: string
  descricao: string
  inclui: string[]
  paraQuem: string
  imagem?: string
}

export type Diferencial = {
  numero: string
  titulo: string
  texto: string
}

export type Cliente = {
  nome: string
  imagem?: string
  projetoSlug?: string
}

export type Depoimento = {
  texto: string
  autor: string
  cargo: string
}

export type Projeto = {
  slug: string
  nome: string
  equipamentos: string
  servico: string
  cidade: string
  imagem?: string
  resumo: string
  problema: string
  diagnostico: string
  solucao: string
  resultado: string
  depoimento: Depoimento
}

export type MembroEquipe = {
  nome: string
  cargo: string
  imagem?: string
  legenda?: string
}

export type EquipeConteudo = {
  imagemColetiva?: string
  legendaColetiva?: string
  pessoas: MembroEquipe[]
}

export type CategoriaPost = {
  slug: string
  nome: string
}

export type Post = {
  slug: string
  categoria: string
  titulo: string
  resumo: string
  corpo: string[]
  imagem?: string
  destaque: boolean
}

export type Unidade = {
  id: string
  cidade: string
  endereco: string
  latitude: number
  longitude: number
}

export type RedeSocial = {
  nome: string
  href: string
}

export type Contato = {
  nome: string
  empresa: string
  telefone: string
  email: string
  cidade: string
  assunto: string
  mensagem: string
}

export type NavLink = {
  label: string
  href: string
  id?: string
}

export type Beneficio = {
  titulo: string
  texto: string
}

export type ModernizacaoConteudo = {
  beneficios: Beneficio[]
  antes?: string
  depois?: string
}

export type TecnologiaConteudo = {
  corpo: string
  itens: string[]
  imagemDesktop?: string
  imagemMobile?: string
}

export type ExperienciaConteudo = {
  palavras: string[]
}

export type CtaConteudo = {
  apoio: string
  whatsappTexto: string
}

export type ContatoConteudo = {
  sucesso: string
}
