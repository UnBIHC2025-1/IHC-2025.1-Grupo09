# Geração de Conteúdo 

"Para produzir conteúdo digital acessível, a primeira etapa é compreender que tudo o que comunicamos impacta as pessoas; por isso, é fundamental começar pela forma como abordamos nosso público e criar a cultura e o hábito de acessibilidade digital em nossas equipes". Nesse sentido, nesta seção se apresentam boas práticas em formato de checklist para garantir acessibilidade na geração de conteúdo.

#### Estrutura Geral e Navegação
- [ ] **Definir um título de página descritivo e único que reflita seu conteúdo.** (Referência: NBR 17225 - Diretriz 2.4: Navegável)
- [ ] **Utilizar uma hierarquia de cabeçalhos (H1, H2, H3...) lógica e sem pular níveis para organizar o conteúdo.** (Referência: NBR 17225 - Diretriz 1.3: Adaptável)
    - > **Certo:** H1 > H2 > H3 > H2 > H3
    - > **Errado:** H1 > H3 > H4 (Pulou o nível H2)
- [ ] **Identificar o idioma principal do conteúdo.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Oferecer mais de uma maneira de encontrar uma página (ex: busca, mapa do site, menus).** (Referência: NBR 17225 - Diretriz 2.4: Navegável)

#### Termos
- [ ] **Sempre utilize o termo "pessoas com deficiência" (PCD) e suas especificações corretas.** (visual, física, pessoa surda, pessoa cega, etc.). (Referência: NBR 17225 - Princípio 3: Compreensível)

#### Textos
- [ ] **Usar textos descomplicados e objetivos.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Usar palavras conhecidas, evitando jargões e linguagem técnica excessiva.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Evitar figuras de linguagem e frases com senso de urgência.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Usar pontuação adequada para dar clareza ao texto.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Evitar frases extensas (ideal é ter de 15 a 20 palavras).** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Usar preferencialmente a ordem direta nas orações (sujeito-verbo-objeto).** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Explicar abreviações e siglas na primeira vez que aparecerem.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
    - > **Certo:** "A Associação Brasileira de Normas Técnicas (ABNT) publicou a nova norma..."
    - > **Errado:** "A ABNT publicou a nova norma..." (sem explicar a sigla no primeiro uso).
- [ ] **Não usar apenas características sensoriais (cor, forma) para instruir o usuário.** (Referência: NBR 17225 - Diretriz 1.3: Adaptável)
    - > **Certo:** "Preencha os campos obrigatórios, marcados com um asterisco (*)."
    - > **Errado:** "Preencha os campos em vermelho."

#### Descrição de imagens
- [ ] **Fornecer texto alternativo que descreva a imagem (o que/quem, onde, como).** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
    - > **Certo:** `alt="Homem sorrindo sentado em uma mesa de madeira, usando um notebook."`
    - > **Errado:** `alt="imagem123.jpg"`
- [ ] **Marcar imagens puramente decorativas para que sejam ignoradas por leitores de tela.** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
- [ ] **Não usar imagens de texto; prefira sempre texto real formatado com CSS.** (Referência: NBR 17225 - Diretriz 1.4: Distinguível)

#### Descrição de imagens complexas
- [ ] **Fornecer uma descrição longa para gráficos, mapas e infográficos em um local próximo a eles.** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
- [ ] **Manter o texto alternativo da imagem complexa sucinto, indicando onde a descrição longa se encontra.** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
    - > **Certo:** `alt="Gráfico de pizza sobre o uso de navegadores. A descrição detalhada dos dados está na tabela a seguir."`
- [ ] **Disponibilizar os dados de um gráfico em formato de tabela, quando aplicável.** (Referência: NBR 17225 - Diretriz 1.3: Adaptável)

#### Ícones
- [ ] **Garantir que a função dos ícones seja clara, usando um rótulo textual visível junto a eles.** (Referência: NBR 17225 - Diretriz 3.2: Previsível)
- [ ] **Adicionar texto alternativo que descreva a ação para ícones que funcionam como links ou botões.** (Referência: NBR 17225 - Diretriz 4.1: Compatível)
    - > **Certo:** Um ícone de lupa com o texto alternativo `alt="Buscar no site"`.
    - > **Errado:** Um ícone de lupa com o texto alternativo `alt="lupa"`.

#### Mídias de vídeo
- [ ] **Fornecer legendas sincronizadas (Closed Captions) para todos os vídeos.** (Referência: NBR 17225 - Diretriz 1.2: Mídia Baseada em Tempo)
- [ ] **Disponibilizar audiodescrição para o conteúdo visual informativo dos vídeos.** (Referência: NBR 17225 - Diretriz 1.2: Mídia Baseada em Tempo)
- [ ] **Oferecer interpretação em Língua Brasileira de Sinais (Libras).** (Referência: NBR 17225 - Diretriz 1.2: Mídia Baseada em Tempo)
- [ ] **Não publicar conteúdo que pisque mais de três vezes por segundo para evitar convulsões.** (Referência: NBR 17225 - Diretriz 2.3: Convulsões e Reações Físicas)

#### Autodescrição
- [ ] **Adicionar a autodescrição dos participantes no roteiro e no próprio vídeo.** (Referência: NBR 17225 - Princípio 1: Perceptível)
    - > **Exemplo:** "Olá, meu nome é Ana. Sou uma mulher branca de cabelos castanhos na altura dos ombros. Uso óculos de armação preta e uma blusa azul. Ao fundo, há uma parede branca com uma estante de livros."

#### Podcasts
- [ ] **Transcrever o conteúdo completo do episódio.** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
- [ ] **Incluir na transcrição as falas, identificação dos falantes e sons importantes (efeitos sonoros, música, etc.).** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
    - > **Exemplo:** "Maria: Acredito que o futuro é promissor. [música suave começa ao fundo] João: Eu concordo plenamente."
- [ ] **Considerar um formato de vídeo para o podcast (videocast) para facilitar a inclusão de Libras e legendas.** (Referência: NBR 17225 - Diretriz 1.2: Mídia Baseada em Tempo)

#### Hashtags e Emojis
- [ ] **Em hashtags, utilizar a primeira letra de cada palavra em maiúsculas (CamelCase).** (Referência: NBR 17225 - Diretriz 3.1: Legível)
    - > **Certo:** `#AcessibilidadeDigital`
    - > **Errado:** `#acessibilidadedigital`
- [ ] **Não abusar de emojis e não usá-los como único meio para transmitir uma informação.** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)

#### Hiperlinks
- [ ] **A descrição de links e botões deve ser compreensível de maneira isolada, sem depender do contexto ao redor.** (Referência: NBR 17225 - Diretriz 2.4: Navegável)
    - > **Certo:** "Para mais detalhes, baixe o nosso [Relatório Anual de 2024]."
    - > **Errado:** "Para baixar o relatório, [clique aqui]."
- [ ] **Avisar o usuário quando um link for abrir em uma nova janela ou aba.** (Referência: NBR 17225 - Diretriz 3.2: Previsível)

#### Documentos para Download (PDF, .docx, etc.)
- [ ] **Garantir que os documentos tenham uma estrutura de cabeçalhos (tags).** (Referência: NBR 17225 - Princípio 4: Robusto)
- [ ] **Adicionar texto alternativo às imagens dentro dos documentos.** (Referência: NBR 17225 - Diretriz 1.1: Conteúdo Textual)
- [ ] **Verificar a ordem de leitura do conteúdo no documento.** (Referência: NBR 17225 - Diretriz 1.3: Adaptável)
- [ ] **Indicar o tipo e o tamanho do arquivo junto ao link de download.** (Referência: NBR 17225 - Diretriz 2.4: Navegável)
    - > **Certo:** "[Relatório de Vendas (PDF, 2.5MB)]"
    - > **Errado:** "[Baixar relatório]"

#### Bibliografia
> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 17225**: Acessibilidade para conteúdo web. Rio de Janeiro: ABNT, 2025.
>
> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf. Acesso em: 17 jun. 2025.