# Onde colocar imagens e o que ainda pode melhorar

Todas as fotos entram pelo arquivo `src/content/site.ts`. O site não tem painel administrativo: você salva o arquivo em `public/` e aponta o caminho no conteúdo.

Exemplo: salve a foto em `public/imagens/hero.jpg` e use o caminho `"/imagens/hero.jpg"`. Enquanto o campo estiver vazio, o próprio espaço da imagem mostra a dimensão que o arquivo deve ter (por exemplo, `1600 × 1000 px`). Logos de cliente, se não tiverem arquivo, aparecem como a inicial do nome dentro de um quadrado com `400 × 400`. Os prompts para gerar essas imagens estão em `PROMPTS-IMAGENS.md`.

Formatos: JPG ou WebP para fotos. PNG ou SVG com fundo transparente para logos. Vídeo em MP4, sem áudio obrigatório (o site deixa o vídeo mudo).

## Home

| Onde aparece | Campo em `src/content/site.ts` | Proporção sugerida |
| --- | --- | --- |
| Primeira tela, em tela cheia | `banners`, item `hero-movimento`: `video` (e `imagem` como capa) | 1920×1080. O vídeo toca atrás das portas. |
| Bloco "Tecnologia por trás de cada viagem" | `homeSections`, id `experiencia`: `imagem` e `video` | 1920×1080. Casa de máquinas / poço, tom escuro. |
| Chamada final | `homeSections`, id `cta`: `imagem` e `video` | 1920×1080. |
| "Goldtech" / sobre | `institucional.imagem` e `institucional.video` | 1000×1250. Técnico uniformizado. Vale também em `/sobre`. |
| Cards de serviços (6) | `servicos`, campo `imagem` | 1600×1000. Vale na home, em `/servicos` e na página do serviço. |
| "Não deveria ser gerenciado no escuro" | `tecnologia.imagemDesktop` e `tecnologia.imagemMobile` | 1600×1000 no notebook e 750×1600 no celular. Já há capturas do Elivus em `public/imagens/`. |
| Faixa de clientes | `clientes`, campo `imagem` | Logo quadrada, 400×400, PNG ou SVG. O nome fica acima do quadrado. Vale em `/clientes`. |
| Projetos | `projetos`, campo `imagem` | 1600×1000. Vale em `/projetos` e na página do projeto. |
| Comparador antigo / modernizado | `modernizacao.antes` e `modernizacao.depois` | 1600×900, as duas no mesmo enquadramento. |
| Equipe, foto larga | `equipe.imagemColetiva` | 1600×720. |
| Equipe, retrato de cada pessoa | `equipe.pessoas`, campo `imagem` | 900×1200. |
| Artigo em destaque | `posts`, campo `imagem` | 1600×900. |

Os outros artigos da home não mostram foto na lista. A foto do post aparece na página do artigo (`/conteudos/...`).

## Páginas internas

Não há campos extras além dos da tabela. Cada página reutiliza o mesmo arquivo:

- `/sobre` — `institucional.imagem` e `institucional.video`
- `/servicos` e `/servicos/[slug]` — `servicos[].imagem`
- `/clientes` — `clientes[].imagem`
- `/projetos` e `/projetos/[slug]` — `projetos[].imagem`
- `/conteudos/[slug]` — `posts[].imagem`

Ainda não existe campo para ícone do site (favicon) nem para a imagem de compartilhamento no WhatsApp. Se quiser esses dois, peça numa próxima etapa.

## Conteúdo que ainda é provisório

Estes trechos continuam com texto ou nomes de exemplo. Vale trocar quando tiver o material real:

- Projetos (Residencial Atlântico, Edifício Horizonte, Condomínio Serra Verde), inclusive cidades fora do Rio. Os clientes reais não apontam para esses cases.
- Nomes da equipe: João da Silva, Carlos Santos e Marcos Oliveira.
- Números da faixa de indicadores: 250 elevadores, 80 clientes, 15 anos e 24h.
- Horário "Segunda a sexta, das 8h às 18h" — não veio um horário novo, então o anterior foi mantido.
- Texto de Instalação — os outros serviços foram reescritos; este ficou como estava. Emergências foi incorporada à Assistência Técnica.
- LinkedIn e Facebook apontam, por enquanto, para o Instagram (`https://www.instagram.com/goldtechelevadores/`).
- Os três parágrafos de história em `/sobre` (`institucional.historia`) ainda são o texto anterior. A descrição nova está em `institucional.corpo`.
- Artigos em `/conteudos`.

## Como incluir uma imagem, na prática

1. Crie a pasta `public/imagens/` se ela ainda não existir.
2. Coloque o arquivo lá, com nome simples, sem acento e sem espaço. Exemplo: `public/imagens/cabine-moderna.jpg`.
3. No item correspondente de `src/content/site.ts`, preencha o campo. Exemplo, no banner:

```ts
imagem: "/imagens/cabine-moderna.jpg",
```

4. Salve o arquivo. Com o site em desenvolvimento aberto, a foto aparece ao recarregar a página.
