import type {
  Banner,
  CategoriaPost,
  Cliente,
  Diferencial,
  EquipeConteudo,
  ExperienciaConteudo,
  HomeSection,
  Indicador,
  Institucional,
  ModernizacaoConteudo,
  NavLink,
  Post,
  Projeto,
  RedeSocial,
  SeoConfig,
  Servico,
  SiteConfig,
  TecnologiaConteudo,
  Unidade,
  UniversoConteudo,
  CtaConteudo,
  ContatoConteudo,
} from "@/types/site"

export const siteConfig: SiteConfig = {
  nome: "Goldtech",
  frase: "Elevando conforto e eficiência",
  telefone: "(21) 99232-8170",
  telefoneHref: "tel:+5521992328170",
  whatsapp: "(21) 99201-6050",
  whatsappHref: "https://wa.me/5521992016050",
  email: "comercial@goldtechelevadores.com",
  emails: [
    { rotulo: "Comercial", email: "comercial@goldtechelevadores.com" },
    { rotulo: "Administrativo", email: "administrativo@goldtechelevadores.com" },
  ],
  contatos: [
    { rotulo: "Comercial", telefone: "(21) 99232-8170", href: "tel:+5521992328170" },
  ],
  horario: "Segunda a sexta, das 8h às 18h",
  endereco: "Rua do Bonfim, 428 - Vasco da Gama, Rio de Janeiro - RJ",
}

export const seoConfig: SeoConfig = {
  title: "Goldtech — Elevando conforto e eficiência",
  description:
    "A Goldtech transforma a mobilidade vertical em condomínios, empresas e residências no Rio de Janeiro. Elevando conforto e eficiência.",
}

export const menu: NavLink[] = [
  { id: "inicio", label: "Início", href: "/#inicio" },
  { id: "gold-tech", label: "Goldtech", href: "/#gold-tech" },
  { id: "servicos", label: "Serviços", href: "/#servicos" },
  { id: "diferenciais", label: "Diferenciais", href: "/#diferenciais" },
  { id: "clientes", label: "Clientes", href: "/#clientes" },
  { id: "conteudo", label: "Conteúdo", href: "/#conteudo" },
  { id: "contato", label: "Contato", href: "/#contato" },
]

export const footerNav = {
  empresa: [
    { label: "Sobre", href: "/sobre" },
    { label: "Equipe", href: "/#equipe" },
    { label: "Clientes", href: "/clientes" },
  ],
  solucoes: [
    { label: "Manutenção", href: "/servicos/manutencao-preventiva" },
    { label: "Modernização", href: "/servicos/modernizacao" },
    { label: "Vistoria técnica", href: "/servicos/vistoria-tecnica" },
    { label: "Instalação", href: "/servicos/instalacao" },
  ],
  conteudo: [
    { label: "Artigos", href: "/conteudos" },
    { label: "Notícias", href: "/conteudos#noticias" },
  ],
}

const instagram = "https://www.instagram.com/goldtechelevadores/"

export const redesSociais: RedeSocial[] = [
  { nome: "Instagram", href: instagram },
  { nome: "LinkedIn", href: instagram },
  { nome: "Facebook", href: instagram },
]

export const banners: Banner[] = [
  {
    id: "hero-movimento",
    ativo: true,
    ordem: 1,
    rotulo: "Goldtech",
    linhas: ["Movemos pessoas.", "Elevamos confiança."],
    apoio: "O elevador conecta pessoas à vida delas. A Goldtech mantém isso funcionando.",
    botaoPrimarioTexto: "Solicitar avaliação técnica",
    botaoPrimarioLink: "#contato",
    botaoSecundarioTexto: "Conhecer soluções",
    botaoSecundarioLink: "#servicos",
    imagem: "/imagens/hero imagem.webp",
    variante: "Seu elevador não pode parar. A Goldtech também não.",
    dataInicio: null,
    dataFim: null,
  },
]

export const indicadores: Indicador[] = [
  { id: "elevadores", valor: 250, prefixo: "+", rotulo: "Elevadores atendidos" },
  { id: "clientes", valor: 80, prefixo: "+", rotulo: "Clientes" },
  { id: "experiencia", valor: 25, prefixo: "+", sufixo: " anos", rotulo: "Experiência" },
  { id: "atendimento", valor: 24, sufixo: "h", rotulo: "Atendimento" },
]

export const institucional: Institucional = {
  rotulo: "Goldtech",
  titulo: "Engenharia que mantém tudo em movimento.",
  corpo:
    "A Goldtech tem mais de 25 anos de atuação em condomínios, empresas e residências em todo o Estado do Rio de Janeiro. Com a mudança do quadro societário, os novos donos Felipe e Fábio reformularam completamente a empresa, tornando-a mais eficiente e confiável. A operação segue em instalação, manutenção preventiva e corretiva, modernização e acessibilidade, com atendimento direto e foco na causa de cada problema.",
  historia: [
    "A Goldtech nasceu do trabalho de campo, há mais de 25 anos: técnicos que conhecem poço, máquina, comando e a rotina de quem administra o prédio.",
    "A mudança do quadro societário colocou Felipe Pimentel e Fábio Silveira à frente da empresa. A reformulação alcançou processo, registro e atendimento.",
    "Hoje a equipe une procedimento, histórico técnico e presença nas unidades atendidas, com uma operação mais eficiente e confiável.",
  ],
  linkTexto: "Conheça nossa história",
  link: "/sobre",
  imagem: "/imagens/sobre.webp",
  pilares: [
    {
      titulo: "Segurança",
      texto: "Procedimento e verificação em cada intervenção.",
      icone: "shield",
    },
    {
      titulo: "Excelência técnica",
      texto: "Diagnóstico feito por quem vive o equipamento.",
      icone: "precision",
    },
    {
      titulo: "Tecnologia",
      texto: "Histórico e rotina acompanhados com método.",
      icone: "cpu",
    },
  ],
}

export const servicos: Servico[] = [
  {
    slug: "manutencao-preventiva",
    titulo: "Manutenção Preventiva e Conservação de Elevadores",
    imagem: "/imagens/manutencao-preventiva.webp",
    frase: "Evitar paradas antes que elas aconteçam",
    descricao:
      "Visitas periódicas com foco na causa-raiz de problemas para evitar paradas inesperadas e custos extras. Entregamos transparência total em cada vistoria, relatórios claros e comunicação direta com a nossa equipe para garantir a segurança dos moradores. Atendimento em todo o Rio de Janeiro.",
    inclui: [
      "Visitas periódicas com foco na causa-raiz",
      "Relatórios claros de cada vistoria",
      "Comunicação direta com a equipe",
      "Atendimento em todo o Rio de Janeiro",
    ],
    paraQuem: "Condomínios e edifícios que querem evitar paradas inesperadas e custos extras.",
  },
  {
    slug: "modernizacao",
    titulo: "Modernização Tecnológica e Estética de Elevadores",
    imagem: "/imagens/modernizacao.webp",
    frase: "Economia, suavidade e valorização do patrimônio",
    descricao:
      "Atualização de comandos, painéis, cabines e sistemas de tração para gerar economia de energia, viagens suaves e valorização do seu patrimônio. Projetos personalizados com diagnósticos honestos, respeitando a realidade do orçamento do seu condomínio ou empresa.",
    inclui: [
      "Atualização de comandos e painéis",
      "Modernização de cabines",
      "Sistemas de tração mais eficientes",
      "Diagnóstico honesto e projeto no orçamento",
    ],
    paraQuem: "Condomínios e empresas que querem modernizar o elevador sem ignorar o orçamento.",
  },
  {
    slug: "manutencao-corretiva",
    titulo: "Assistência Técnica e Manutenção Corretiva",
    imagem: "/imagens/manutencao-corretiva.webp",
    frase: "Resolução definitiva de paralisações",
    descricao:
      "Atendimento ágil e suporte técnico sem burocracia para resolução definitiva de paralisações emergenciais. Foco na identificação exata do problema com diagnósticos transparentes e peças de alta qualidade para garantir a máxima disponibilidade do equipamento.",
    inclui: [
      "Atendimento ágil, sem burocracia",
      "Diagnóstico transparente da falha",
      "Peças de alta qualidade",
      "Acionamento prioritário em emergências",
    ],
    paraQuem: "Quem precisa recolocar o elevador em operação com a identificação exata do problema.",
  },
  {
    slug: "vistoria-tecnica",
    titulo: "Vistoria Técnica e Avaliação de Equipamento",
    imagem: "/imagens/vistoria-tecnica.webp",
    frase: "Um raio-X imparcial do elevador",
    descricao:
      "Avaliação rigorosa e imparcial das condições do seu elevador. Entregamos um raio-X completo sobre o estado do equipamento, apontando soluções definitivas e prioridades de segurança, sem invenção de problemas e alinhado à gestão do síndico.",
    inclui: [
      "Avaliação rigorosa e imparcial",
      "Prioridades de segurança",
      "Soluções definitivas, sem invenção de problemas",
      "Alinhamento com a gestão do síndico",
    ],
    paraQuem: "Síndicos e gestores que precisam saber o estado real do equipamento antes de decidir.",
  },
  {
    slug: "adequacao-tecnica",
    titulo: "Adequação de Acessibilidade e Normas de Segurança",
    imagem: "/imagens/adequacao-tecnica.webp",
    frase: "Conformidade e mobilidade inclusiva",
    descricao:
      "Projetos e adaptações técnicas para garantir conformidade com as normas vigentes e promover mobilidade inclusiva. Segurança, autonomia e conforto para todos os passageiros com a responsabilidade e o respeito que o seu prédio exige.",
    inclui: [
      "Projetos alinhados às normas vigentes",
      "Adaptações de acessibilidade",
      "Segurança e autonomia dos passageiros",
      "Conforto para todos os usuários",
    ],
    paraQuem: "Prédios que precisam de conformidade técnica e mobilidade inclusiva.",
  },
  {
    slug: "instalacao",
    titulo: "Instalação",
    imagem: "/imagens/instalacao.webp",
    frase: "Novos projetos",
    descricao:
      "Planejamento e execução de elevadores novos, da obra ao comissionamento, com acompanhamento técnico.",
    inclui: [
      "Acompanhamento da obra",
      "Instalação do equipamento",
      "Comissionamento",
      "Início da rotina de manutenção",
    ],
    paraQuem: "Novos empreendimentos que precisam do elevador entregue e já acompanhado.",
  },
]

export const diferenciais: Diferencial[] = [
  {
    numero: "01",
    titulo: "Segurança",
    texto: "Procedimentos e manutenção orientados à segurança",
  },
  {
    numero: "02",
    titulo: "Agilidade",
    texto: "Resposta e acompanhamento do atendimento",
  },
  {
    numero: "03",
    titulo: "Especialização",
    texto: "Equipe técnica preparada",
  },
  {
    numero: "04",
    titulo: "Tecnologia",
    texto: "Ferramentas modernas para gestão e manutenção",
  },
  {
    numero: "05",
    titulo: "Transparência",
    texto: "Informações e histórico disponíveis ao cliente",
  },
]

export const tecnologia: TecnologiaConteudo = {
  imagemDesktop: "/imagens/elivus-desktop.png",
  imagemMobile: "/imagens/elivus-mobile.png",
  corpo: "A Goldtech usa tecnologia para organizar e acompanhar a operação.",
  itens: [
    "Equipamentos",
    "Chamados",
    "Manutenções",
    "Ordens de serviço",
    "Histórico técnico",
    "Documentos",
    "Relatórios",
    "Contratos",
  ],
}

export const experiencia: ExperienciaConteudo = {
  palavras: [
    "Segurança",
    "Precisão",
    "Monitoramento",
    "Manutenção",
    "Engenharia",
    "Confiança",
  ],
  imagens: [
    "/imagens/goldtech_parallax_secao_01.webp",
    "/imagens/goldtech_parallax_secao_02.webp",
    "/imagens/goldtech_parallax_secao_03.webp",
    "/imagens/goldtech_parallax_secao_04.webp",
    "/imagens/goldtech_parallax_secao_05.webp",
  ],
}

export const universo: UniversoConteudo = {
  itens: [
    {
      codigo: "CM",
      titulo: "Casa de máquinas",
      texto:
        "O motor, o freio e a máquina de tração ficam acima do poço. É dali que a viagem começa, e é dali que boa parte do diagnóstico sai.",
      fato: "A casa de máquinas concentra o que a cabine só revela como sintoma.",
    },
    {
      codigo: "QC",
      titulo: "Quadro de comando",
      texto:
        "O comando decide partida, parada e nivelamento. Quando ele envelhece, o mesmo defeito volta depois do reparo.",
      fato: "Comando antigo não se resolve só com troca de peça.",
    },
    {
      codigo: "CB",
      titulo: "Cabine",
      texto:
        "Nivelamento, botoeira, luz e o que o passageiro sente na viagem. É o trecho visível da manutenção.",
      fato: "O passageiro sente na cabine o que nasceu na máquina.",
    },
    {
      codigo: "PT",
      titulo: "Portas",
      texto:
        "Fechamento, reabertura e o tempo de espera. A maioria das ocorrências do dia a dia começa aqui.",
      fato: "A maioria das ocorrências começa nas portas.",
    },
    {
      codigo: "PÇ",
      titulo: "Poço e cabos",
      texto:
        "Cabos, polias e o que fica fora do lobby. Só a equipe técnica entra nesse trecho.",
      fato: "Poço e cabos ficam com quem tem a atribuição técnica.",
    },
  ],
}

export const modernizacao: ModernizacaoConteudo = {
  antes: "/imagens/modernizacao-old.webp",
  depois: "/imagens/modernizacao-new.webp",
  beneficios: [
    {
      titulo: "Desempenho",
      texto: "Partidas mais suaves e menos paradas no uso diário.",
    },
    {
      titulo: "Atualização",
      texto: "Comando, cabine e sistemas alinhados ao uso atual.",
    },
    {
      titulo: "Vida útil",
      texto: "O equipamento existente ganha anos de operação.",
    },
  ],
}

export const clientes: Cliente[] = [
  { nome: "Eletronuclear - Usina em Angra", imagem: "/imagens/nuclear.png" },
  { nome: "Prefeitura do Rio", imagem: "/imagens/prefeitura.png" },
  { nome: "Prezunic", imagem: "/imagens/prezunic.png" },
  { nome: "Superprix", imagem: "/imagens/prix.png" },
  { nome: "SESC", imagem: "/imagens/sesc.png" },
]

export const projetos: Projeto[] = [
  {
    slug: "tce-rj",
    nome: "Tribunal de Contas do Estado do Rio de Janeiro (TCE-RJ)",
    equipamentos: "8 equipamentos",
    servico: "Manutenção preventiva e corretiva",
    cidade: "Rio de Janeiro",
    imagem: "/imagens/tce.webp",
    resumo:
      "Contrato de manutenção para oito elevadores de um órgão público de grande circulação, com rotina preventiva e corretiva.",
    problema:
      "Oito elevadores em uso intenso, com rotina irregular e paradas que se repetiam sem histórico claro.",
    diagnostico:
      "A manutenção anterior não deixava registro consistente de componentes e chamados.",
    solucao:
      "Contrato de manutenção preventiva e corretiva, com visitas programadas e registro de cada intervenção.",
    resultado:
      "A administração passou a acompanhar o que foi feito em cada equipamento, em vez de depender da memória da última visita.",
    depoimento: {
      texto: "Passamos a saber o que acontece em cada elevador, e não só quando alguém liga.",
      autor: "Administração do TCE-RJ",
      cargo: "Rio de Janeiro",
    },
  },
  {
    slug: "condominio-edificio-flamboyant",
    nome: "Condomínio do Edifício Flamboyant",
    equipamentos: "2 equipamentos",
    servico: "Modernização de comando e cabine",
    cidade: "Rio de Janeiro",
    imagem: "/imagens/flamboyam.webp",
    resumo:
      "Modernização de comando e cabine em um edifício residencial, com o equipamento existente mantido em operação.",
    problema:
      "Dois elevadores antigos, com paradas que voltavam e viagens irregulares no horário de pico.",
    diagnostico:
      "O equipamento ainda tinha estrutura útil, mas o comando não acompanhava o uso atual.",
    solucao:
      "Modernização de comando e cabine, com o elevador existente mantido sempre que a obra permitia.",
    resultado:
      "Partidas mais estáveis e uma cabine alinhada ao uso do prédio, sem troca integral.",
    depoimento: {
      texto: "O prédio ganhou desempenho sem parar a operação por uma substituição completa.",
      autor: "Síndico do Edifício Flamboyant",
      cargo: "Rio de Janeiro",
    },
  },
  {
    slug: "condominio-residencial-ibiza",
    nome: "Condomínio do Edifício Residencial Ibiza",
    equipamentos: "3 equipamentos",
    servico: "Manutenção preventiva",
    cidade: "Rio de Janeiro",
    imagem: "/imagens/ibiza.webp",
    resumo:
      "Contrato de manutenção preventiva para três elevadores, com histórico técnico desde a primeira visita.",
    problema:
      "Três elevadores em uso diário, sem registro do que já tinha sido feito em cada equipamento.",
    diagnostico:
      "A administração dependia da memória da última visita para decidir o próximo passo.",
    solucao:
      "Contrato de manutenção preventiva, com roteiro de visita e registro de cada intervenção.",
    resultado:
      "O condomínio passou a acompanhar o histórico de cada elevador, em vez de recomeçar a cada chamado.",
    depoimento: {
      texto: "Saímos da primeira visita com o que foi visto e o que ficou pendente.",
      autor: "Síndico do Edifício Residencial Ibiza",
      cargo: "Rio de Janeiro",
    },
  },
]

export const equipe: EquipeConteudo = {
  pessoas: [
    { nome: "Felipe Pimentel", cargo: "Sócio e Dono", imagem: "/imagens/felipe.webp" },
    { nome: "Fábio Silveira", cargo: "Sócio e Dono", imagem: "/imagens/fabio.webp" },
    { nome: "Milena Filgueira", cargo: "Supervisora Administrativa", imagem: "/imagens/milena.webp" },
  ],
}

export const categoriasPost: CategoriaPost[] = [
  { slug: "manutencao", nome: "Manutenção" },
  { slug: "seguranca", nome: "Segurança" },
  { slug: "modernizacao", nome: "Modernização" },
  { slug: "tecnologia", nome: "Tecnologia" },
  { slug: "condominios", nome: "Condomínios" },
]

export const posts: Post[] = [
  {
    slug: "o-que-acontece-na-manutencao-preventiva",
    categoria: "Manutenção",
    titulo: "O que realmente acontece durante uma manutenção preventiva?",
    resumo:
      "Uma visita preventiva não é uma olhada rápida no painel. É uma sequência de verificações para o elevador seguir disponível.",
    corpo: [
      "Quem administra o prédio costuma ver a manutenção preventiva como uma visita marcada. O que importa, na prática, é a sequência: o técnico percorre o equipamento com um roteiro, e não só quando alguém reclama de um barulho.",
      "A passagem começa pelo que está à vista da operação. Portas, nivelamento na parada, botoeiras e o comportamento da cabine durante uma viagem. Ruído novo, tranco ou desalinhamento já indicam o que precisa de atenção antes de virar parada.",
      "Em seguida entra o que fica fora do lobby: casa de máquinas, quadro de comando e os itens de segurança que só a equipe técnica deve verificar. Lubrificação, folgas e sinais de desgaste fazem parte desse trecho. O síndico não precisa executar nada disso. Precisa saber que foi feito e o que ficou pendente.",
      "O fechamento da visita é o registro. O que foi inspecionado, o que foi ajustado e o que pede troca numa próxima etapa. Sem esse histórico, a próxima falha começa do zero.",
      "Uma preventiva bem feita não promete que o elevador nunca para. Ela reduz surpresa e deixa a administração com informação para decidir, em vez de depender da memória da última visita.",
    ],
    imagem: "/imagens/diagnostico.webp",
    destaque: true,
  },
  {
    slug: "sete-sinais-de-modernizacao",
    categoria: "Modernização",
    titulo: "7 sinais de que seu elevador precisa de modernização",
    resumo:
      "Ruído, parada recorrente e comando antigo são sinais de que o equipamento pede atualização, não só mais um reparo.",
    corpo: [
      "Modernizar não é trocar o elevador inteiro. É atualizar o que já não acompanha o uso do prédio: comando, cabine, portas ou sistemas que nasceram para outro ritmo de viagem.",
      "Há sinais que a administração percebe antes do laudo. O primeiro é a parada que volta. O mesmo defeito reaparece depois do reparo, porque a peça ou o comando já chegou no limite.",
      "O segundo é a viagem irregular no horário de pico: tranco na partida, nivelamento ruim ou espera que cresceu sem mudança no número de moradores. O terceiro é ruído novo na cabine ou na casa de máquinas, constante, não um episódio isolado.",
      "O quarto é porta que fecha com hesitação ou reabre sem motivo claro. O quinto é peça de reposição cada vez mais difícil, sinal de que o conjunto saiu de linha. O sexto é cabine, botoeira ou sinalização visivelmente defasadas em relação ao restante do prédio.",
      "O sétimo é a falta de histórico. Quando ninguém consegue dizer o que já foi trocado, a próxima decisão vira chute. Nesses casos, uma avaliação técnica separa o que ainda se resolve com manutenção do que pede modernização.",
    ],
    imagem: "/imagens/modernizacao2.webp",
    destaque: false,
  },
  {
    slug: "checklist-de-seguranca-para-o-sindico",
    categoria: "Segurança",
    titulo: "Checklist de segurança para quem administra o prédio",
    resumo:
      "O que o síndico pode observar no dia a dia, e o que precisa ficar com a equipe técnica.",
    corpo: [
      "Segurança de elevador não é uma lista para o síndico executar na casa de máquinas. É uma divisão clara: o que a administração observa no uso diário, e o que permanece com a equipe técnica.",
      "No dia a dia, vale notar se a cabine nivela com o pavimento, se a porta fecha por completo e se a viagem segue sem tranco ou ruído novo. Luz de cabine apagada, botão sem resposta e aviso de morador sobre uma parada recente também entram nessa observação.",
      "Alarme, interfone e a informação de quem acionar quando o elevador para precisam estar acessíveis para quem usa o prédio. Isso é gestão. Não é manutenção.",
      "Casa de máquinas, poço, freio, cabos e dispositivos de segurança ficam com o técnico. Abrir esses pontos sem procedimento expõe pessoas e o equipamento. O papel da administração é cobrar o registro da visita, não repetir o trabalho de campo.",
      "Quando algo sai do uso normal, o caminho é acionar o atendimento e manter as pessoas fora da cabine até a liberação. O checklist útil é curto: observar, registrar e chamar quem tem a atribuição técnica.",
    ],
    imagem: "/imagens/checklist.webp",
    destaque: false,
  },
]

export const unidades: Unidade[] = [
  {
    id: "rio-de-janeiro",
    cidade: "Rio de Janeiro",
    endereco: siteConfig.endereco,
    latitude: -22.89093,
    longitude: -43.22552,
  },
]

export const ctaConteudo: CtaConteudo = {
  apoio: "Fale com a nossa equipe e conheça mais sobre a Goldtech.",
  whatsappTexto: "Falar pelo WhatsApp",
}

export const contatoConteudo: ContatoConteudo = {
  sucesso: "Recebemos sua mensagem.",
}

const shell = {
  dataInicio: null,
  dataFim: null,
} as const

export const homeSections: HomeSection[] = [
  {
    id: "hero",
    anchor: "inicio",
    ativo: true,
    ordem: 1,
    titulo: banners[0].linhas.join(" "),
    subtitulo: banners[0].apoio,
    fundo: "graphite",
    imagem: banners[0].imagem,
    video: banners[0].video,
    botaoTexto: banners[0].botaoPrimarioTexto,
    botaoLink: banners[0].botaoPrimarioLink,
    andar: "07",
    ...shell,
  },
  {
    id: "indicadores",
    anchor: "indicadores",
    ativo: true,
    ordem: 2,
    titulo: "Indicadores",
    fundo: "mist",
    conteudo: indicadores,
    andar: "06",
    ...shell,
  },
  {
    id: "sobre",
    anchor: "gold-tech",
    ativo: true,
    ordem: 3,
    titulo: institucional.titulo,
    subtitulo: institucional.corpo,
    tema: institucional.rotulo,
    fundo: "white",
    conteudo: institucional,
    botaoTexto: institucional.linkTexto,
    botaoLink: institucional.link,
    andar: "06",
    ...shell,
  },
  {
    id: "servicos",
    anchor: "servicos",
    ativo: true,
    ordem: 4,
    titulo: "Cuidamos de todas as etapas da vida do seu elevador.",
    tema: "Soluções Goldtech",
    fundo: "mist",
    conteudo: servicos,
    andar: "05",
    ...shell,
  },
  {
    id: "experiencia",
    anchor: "experiencia",
    ativo: true,
    ordem: 5,
    titulo: "Tecnologia por trás de cada viagem.",
    fundo: "image",
    conteudo: experiencia,
    andar: "04",
    ...shell,
  },
  {
    id: "diferenciais",
    anchor: "diferenciais",
    ativo: true,
    ordem: 6,
    titulo: "Por que Goldtech?",
    fundo: "white",
    conteudo: diferenciais,
    andar: "04",
    ...shell,
  },
  {
    id: "tecnologia",
    anchor: "tecnologia",
    ativo: true,
    ordem: 7,
    titulo: "Seu elevador não deveria ser gerenciado no escuro.",
    tema: "Tecnologia Goldtech",
    fundo: "mist",
    conteudo: tecnologia,
    andar: "04",
    ...shell,
  },
  {
    id: "modernizacao",
    anchor: "modernizacao",
    ativo: true,
    ordem: 8,
    titulo: "Dê uma nova vida ao seu elevador.",
    fundo: "white",
    conteudo: modernizacao,
    botaoTexto: "Conhecer soluções de modernização",
    botaoLink: "/servicos/modernizacao",
    andar: "04",
    ...shell,
  },
  {
    id: "universo",
    anchor: "universo",
    ativo: true,
    ordem: 9,
    titulo: "Por dentro da máquina.",
    tema: "Universo da manutenção",
    fundo: "graphite",
    conteudo: universo,
    andar: "04",
    ...shell,
  },
  {
    id: "clientes",
    anchor: "clientes",
    ativo: true,
    ordem: 10,
    titulo: "Empresas e empreendimentos que escolheram a Goldtech.",
    tema: "Confiança",
    fundo: "mist",
    conteudo: clientes,
    andar: "03",
    ...shell,
  },
  {
    id: "projetos",
    anchor: "projetos",
    ativo: true,
    ordem: 11,
    titulo: "Projetos Goldtech",
    fundo: "white",
    conteudo: projetos,
    andar: "03",
    ...shell,
  },
  {
    id: "equipe",
    anchor: "equipe",
    ativo: true,
    ordem: 12,
    titulo: "Quem faz a Goldtech",
    subtitulo: "Pessoas por trás de cada movimento.",
    fundo: "mist",
    conteudo: equipe,
    andar: "02",
    ...shell,
  },
  {
    id: "conteudos",
    anchor: "conteudo",
    ativo: true,
    ordem: 13,
    titulo: "Informação para quem administra elevadores.",
    tema: "Goldtech Conteúdo",
    fundo: "white",
    conteudo: posts,
    botaoTexto: "Ver conteúdos",
    botaoLink: "/conteudos",
    andar: "01",
    ...shell,
  },
  {
    id: "cta",
    anchor: "cta",
    ativo: true,
    ordem: 14,
    titulo: "Seu elevador merece uma gestão à altura.",
    subtitulo: ctaConteudo.apoio,
    fundo: "image",
    imagem: "/imagens/chamada-final.webp",
    conteudo: ctaConteudo,
    botaoTexto: "Solicitar avaliação técnica",
    botaoLink: "#contato",
    andar: "00",
    ...shell,
  },
  {
    id: "contato",
    anchor: "contato",
    ativo: true,
    ordem: 15,
    titulo: "Contato",
    fundo: "white",
    conteudo: contatoConteudo,
    botaoTexto: "Solicitar contato",
    andar: "00",
    ...shell,
  },
  {
    id: "localizacao",
    anchor: "localizacao",
    ativo: true,
    ordem: 16,
    titulo: "Localização",
    fundo: "mist",
    conteudo: unidades,
    andar: "00",
    ...shell,
  },
]
