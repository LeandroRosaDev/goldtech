# Prompts para gerar as imagens

Cada bloco traz a dimensão que o site espera, o campo em `src/content/site.ts` e um prompt pronto em português e em inglês. Cole o prompt na ferramenta de imagem (ou de vídeo, no caso do hero). Peça o arquivo na proporção indicada e salve em `public/imagens/` com o nome sugerido.

Enquanto o arquivo não existir, a dimensão aparece escrita no próprio espaço da página.

## Hero — vídeo de fundo

- Dimensão: 1920×1080 (16:9), 8 a 12 segundos, sem legenda e sem áudio obrigatório.
- Campo: `banners`, item `hero-movimento`, `video: "/videos/hero.mp4"`. A capa, se quiser, vai em `imagem`.
- O vídeo fica atrás das portas. Quando elas abrem, a cena aparece.

Português: Plano cinematográfico, 1920×1080, dentro de um elevador moderno com acabamento grafite e um detalhe dourado discreto. As portas se abrem e três pessoas saem com naturalidade para um lobby elegante de prédio no Rio de Janeiro, luz suave, fim de tarde. Câmera estável, na altura dos olhos, sem texto, sem logotipo, sem marca d'água. Clima de confiança e movimento.

English: Cinematic 1920×1080 shot inside a modern elevator with graphite finishes and a discreet gold detail. The doors open and three people step out naturally into an elegant Rio de Janeiro lobby, soft late-afternoon light. Stable eye-level camera, no text, no logo, no wate    rmark. Mood of confidence and movement.

## Sobre — técnico uniformizado

- Dimensão: 1000×1250 (4:5).
- Campo: `institucional.imagem`. Arquivo sugerido: `public/imagens/tecnico.jpg`.

Português: Retrato vertical 4:5 de um técnico de elevadores brasileiro, cerca de 35 anos, uniforme azul-marinho com uma faixa dourada discreta e o nome Goldtech no peito. Ele está na casa de máquinas, com uma prancheta, luz natural lateral, expressão calma e atenta. Fotografia realista, sem texto extra, sem logotipo de terceiros.

English: Vertical 4:5 portrait of a Brazilian elevator technician, about 35, navy uniform with a discreet gold stripe and the name Goldtech on the chest. He stands in a machine room holding a clipboard, natural side light, calm and attentive. Photorealistic, no extra text, no third-party logos.

## Tecnologia por trás de cada viagem

Ideia desta seção: não é um produto e não é um retrato. É a atmosfera da engenharia. A imagem (ou um vídeo curto) deve mostrar o poço ou a casa de máquinas em perspectiva: cabos de aço, polia e estrutura, quase no escuro, com um fio de luz dourada. O texto claro do site fica por cima, então a foto precisa ter áreas escuras e não pode ter letras.

- Dimensão: 1920×1080.
- Campo: `homeSections`, id `experiencia`, `imagem`. Arquivo sugerido: `public/imagens/poco.jpg`.

Português: Fotografia cinematográfica 16:9 do poço de um elevador visto de cima, cabos de aço paralelos descendo, polia ao fundo, concreto escuro e uma única linha de luz dourada. Sem pessoas, sem texto, sem painel legível. Clima preciso e silencioso.

English: Cinematic 16:9 photograph looking down an elevator shaft, parallel steel cables, a pulley in the distance, dark concrete and a single line of gold light. No people, no text, no readable panel. Precise and quiet mood.

## Cards de serviços

Todos usam 1600×1000. O campo é `imagem` de cada item em `servicos`. O texto do card cobre a parte de baixo, então deixe o assunto principal no terço superior.

1. `manutencao-preventiva` — Técnico inspecionando o quadro de comando de um elevador, luz de lanterna, peças organizadas, sensação de prevenção e cuidado. Sem texto.
2. `modernizacao` — Cabine de elevador recém-modernizada, painel novo, espelho e luz dourada suave, contraste entre o prédio antigo e o interior novo. Sem texto.
3. `manutencao-corretiva` — Técnico ajoelhado na casa de máquinas resolvendo uma parada, ferramentas à mão, expressão concentrada, atendimento urgente porém calmo. Sem texto.
4. `vistoria-tecnica` — Close de uma inspeção: mão com lanterna sobre cabos e uma prancheta fora de foco, clima de diagnóstico honesto. Sem texto legível.
5. `adequacao-tecnica` — Cabine com corrimão, botoeira em braile e espaço para cadeira de rodas, luz clara, sensação de acesso para todos. Sem texto.
6. `instalacao` — Elevador em obra, guias e cabine sendo posicionados, capacete, luz de canteiro, sensação de começo. Sem texto.

English, reuse for each card: Photorealistic 1600×1000 elevator scene, graphite and warm gold accents, Rio de Janeiro building, no text, no logo, no watermark. Then add the scene from the matching item above.

## Chamada final

- Dimensão: 1920×1080.
- Campo: `homeSections`, id `cta`, `imagem`. Arquivo sugerido: `public/imagens/predio.jpg`.

Português: Fachada noturna de um prédio residencial no Rio, algumas janelas acesas, um elevador de vidro sugerido no centro, céu escuro e um reflexo dourado. Sem texto, sem marca. A foto precisa de área escura no centro para o texto branco do site.

English: Night facade of a residential building in Rio, a few lit windows, a glass elevator suggested at the center, dark sky and a gold reflection. No text, no logo. Leave a dark area in the center for white type.

## Antes e depois da modernização

- Dimensão: 1600×900 cada, o mesmo enquadramento nas duas.
- Campos: `modernizacao.antes` e `modernizacao.depois`.

Português, antes: Mesma cabine de elevador, enquadramento frontal fixo, painel antigo gasto, luz amarelada, piso marcado. Sem texto.

Português, depois: A mesma cabine, exatamente o mesmo enquadramento, painel novo, luz branca uniforme, detalhe dourado no corrimão, piso limpo. Sem texto.

English: Two matching frontal frames of the same elevator cabin, 1600×900. Before: worn panel, warm yellow light, marked floor. After: new panel, even white light, gold handrail detail, clean floor. No text.

## Elivus — telas do sistema

As capturas reais já estão em `public/imagens/elivus-desktop.png` (1600×1000 no notebook) e `public/imagens/elivus-mobile.png` (750×1600 no celular), ligadas em `tecnologia.imagemDesktop` e `tecnologia.imagemMobile`. Se quiser gerar variações no lugar delas:

Português, desktop: Interface de um sistema de gestão de elevadores chamado Elivus, tela 1600×1000, fundo claro, cartões com números de receita, gráfico de barras verde e laranja, menu lateral azul. Sem dados pessoais reais, nomes fictícios.

Português, mobile: A mesma interface empilhada em um celular, 750×1600, cartão azul de boas-vindas, aviso de agenda e atalhos. Sem dados pessoais reais.

## Projetos e equipe

Use só quando for substituir os cases e os nomes provisórios.

- Capa de projeto: 1600×1000. Campo `projetos[].imagem`. Fachada ou cabine do empreendimento, sem texto.
- Foto da equipe: 1600×720. Campo `equipe.imagemColetiva`. Grupo de técnicos uniformizados em frente a um prédio, luz de dia.
- Retrato: 900×1200. Campo `equipe.pessoas[].imagem`. Fundo neutro, uniforme Goldtech, olhar para a câmera.

English: Photorealistic, no text, no watermark. Project cover 1600×1000 of a building or cabin. Team photo 1600×720 of uniformed technicians in daylight. Portrait 900×1200, neutral background, Goldtech uniform, looking at the camera.
