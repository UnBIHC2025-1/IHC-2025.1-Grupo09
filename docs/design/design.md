# Design 

"Existe uma lenda de que a acessibilidade torna um sítio web muito simples ou feio. Não é verdade: um sítio web bem estruturado pode ser bonito e criativo. É possível, inclusive, criar apresentações visuais diferentes para a mesma estrutura HTML de um sítio web com o uso de CSS e atender a diferentes necessidades". Dessa forma, nessa seção encontra-se checklist que garantam a acessibilidade no design.

#### 1. Layout, Tipografia e Espaçamento

- [ ] **O layout se adapta a diferentes tamanhos de tela (responsividade) sem perda de conteúdo ou funcionalidade.** (Referência: NBR 17225 - Diretriz 1.4.10: Refluxo)
- [ ] **O texto pode ser ampliado em até 200% pelo usuário sem quebrar o layout.** (Referência: NBR 17225 - Diretriz 1.4.4: Redimensionamento de Texto)
- [ ] **O espaçamento entre linhas, parágrafos, palavras e letras pode ser ajustado pelo usuário sem perda de funcionalidade.** (Referência: NBR 17225 - Diretriz 1.4.12: Espaçamento de Texto)
- [ ] **As fontes utilizadas são legíveis e sem serifa para blocos longos de texto.** (Referência: NBR 17225 - Princípio 3: Compreensível)
- [ ] **Parágrafos têm uma largura de linha que facilita a leitura (recomendação de até 80 caracteres).** (Referência: NBR 17225 - Diretriz 3.1: Legível)
- [ ] **Evitar o uso de texto justificado, pois cria espaçamentos irregulares que dificultam a leitura.** (Referência: NBR 17225 - Diretriz 3.1: Legível)
    - > **Certo:** Texto alinhado à esquerda.
    - > **Errado:** Texto com alinhamento justificado, que pode criar "rios" de espaços em branco entre as palavras.
- [ ] **Evitar o uso de textos longos em caixa alta (maiúsculas) ou com fontes muito condensadas.** (Referência: NBR 17225 - Diretriz 3.1: Legível)

#### 2. Uso da Cor e Contraste

- [ ] **A cor não é o único meio utilizado para transmitir informação ou distinguir elementos.** (Referência: NBR 17225 - Diretriz 1.4.1: Uso de Cor)
    - > **Certo:** Um campo de formulário com erro é indicado por uma borda vermelha, um ícone de alerta e uma mensagem de texto.
    - > **Errado:** Um campo de formulário com erro é indicado apenas por uma borda vermelha.
- [ ] **O contraste entre o texto e o fundo é de, no mínimo, 4.5:1 para textos normais.** (Referência: NBR 17225 - Diretriz 1.4.3: Contraste Mínimo)
- [ ] **O contraste entre o texto e o fundo é de, no mínimo, 3:1 para textos grandes (18pt ou 14pt em negrito).** (Referência: NBR 17225 - Diretriz 1.4.3: Contraste Mínimo)
- [ ] **O contraste de componentes de interface (ícones, bordas de inputs) é de, no mínimo, 3:1 em relação ao fundo.** (Referência: NBR 17225 - Diretriz 1.4.11: Contraste de Componentes não textuais)
    - > **Certo:** Um ícone de busca cinza escuro (`#555555`) sobre um fundo branco (`#FFFFFF`).
    - > **Errado:** Um ícone de busca cinza claro (`#CCCCCC`) sobre um fundo branco (`#FFFFFF`).
- [ ] **O texto sobreposto a imagens ou vídeos possui contraste suficiente ou um fundo sólido para garantir a leitura.** (Referência: NBR 17225 - Diretriz 1.4.3: Contraste Mínimo)
- [ ] **Uma opção de alto contraste (como um "modo escuro" bem implementado) é oferecida.** (Referência: NBR 17225 - Diretriz 1.4: Distinguível)

#### 3. Interação, Foco e Alvos

- [ ] **Todos os elementos interativos possuem um indicador de foco de teclado visível e com bom contraste.** (Referência: NBR 17225 - Diretriz 2.4.7: Foco Visível)
    - > **Certo:** Estilizar o estado `:focus` com uma borda colorida e grossa (ex: `outline: 2px solid blue;`).
    - > **Errado:** Remover o indicador de foco padrão com `outline: none;` sem fornecer uma alternativa visual clara.
- [ ] **O tamanho de alvos clicáveis (botões, links) é grande o suficiente para ser facilmente acionado (mínimo de 24x24 pixels CSS).** (Referência: NBR 17225 - Diretriz 2.5.8: Tamanho do Alvo)
- [ ] **Botões possuem rótulos textuais claros; se apenas um ícone for usado, ele deve ter um nome acessível.** (Referência: NBR 17225 - Diretriz 4.1.2: Nome, Função, Valor)
- [ ] **Instruções para operar controles não dependem apenas de características sensoriais (forma, localização visual).** (Referência: NBR 17225 - Diretriz 1.3.3: Características Sensoriais)
    - > **Certo:** "Para continuar, selecione o botão 'Avançar'."
    - > **Errado:** "Para continuar, clique no botão redondo à direita."
- [ ] **O conteúdo que aparece em hover (ao passar o mouse) ou foco pode ser dispensado e não obscurece outro conteúdo.** (Referência: NBR 17225 - Diretriz 1.4.13: Conteúdo em Hover ou Foco)
- [ ] **Ter cuidado com `display:none` e `visibility:hidden` para não esconder conteúdo de tecnologias assistivas indevidamente.** (Referência: NBR 17225 - Diretriz 4.1.2: Nome, Função, Valor)

#### 4. Animação e Conteúdo Dinâmico

- [ ] **Evitar conteúdo que pisque mais de três vezes por segundo.** (Referência: NBR 17225 - Diretriz 2.3.1: Três Flashes ou Abaixo do Limite)
- [ ] **Oferecer ao usuário controles para pausar, parar ou ocultar qualquer conteúdo que se mova ou atualize automaticamente.** (Referência: NBR 17225 - Diretriz 2.2.2: Pausar, Parar, Ocultar)
    - > **Certo:** Um carrossel de imagens que possui botões visíveis de "pausar", "anterior" e "próximo".
    - > **Errado:** Um carrossel que gira automaticamente sem nenhuma opção para o usuário pará-lo.
- [ ] **Animações decorativas ou não essenciais devem ser desativadas caso o usuário prefira movimento reduzido (`prefers-reduced-motion`).** (Referência: NBR 17225 - Diretriz 2.3.3: Animação de Interações)

---
### Bibliografia e Referências

> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 17225**: Acessibilidade para conteúdo web. Rio de Janeiro: ABNT, 2025.
>
> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital.** Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf. Acesso em: 17 jun. 2025.
>
> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2.** Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: 17 jun. 2025.