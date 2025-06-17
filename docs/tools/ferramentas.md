# Ferramentas de Acessibilidade

Para auxiliar no desenvolvimento e na auditoria de projetos digitais acessíveis, é fundamental contar com um conjunto diversificado de ferramentas. Cada uma possui um propósito específico, desde a validação automática de código até a simulação da experiência de pessoas com deficiência.

A seguir, apresentamos uma lista de ferramentas, organizadas por categoria, com uma breve descrição de sua finalidade e modo de uso. Esta seleção foi atualizada considerando as práticas recomendadas e as exigências da NBR 17225, que não existia na primeira versão desse pocket.
-----

## Extensões de Navegador

Extensões são ideais para auditorias rápidas e validação contínua durante o desenvolvimento, pois se integram diretamente ao navegador e permitem analisar páginas renderizadas em tempo real.

### WAVE - Web Accessibility Evaluation Tool

  * **Link:** [https://wave.webaim.org/](https://wave.webaim.org/)
  * **O que é?** Uma das ferramentas mais populares para avaliação de acessibilidade. A WAVE injeta ícones e indicadores diretamente na sua página para fornecer um feedback visual sobre problemas e boas práticas.
  * **Quando usar?** Excelente para uma primeira análise visual da página. Ajuda a identificar rapidamente erros de contraste, textos alternativos ausentes, problemas na estrutura de cabeçalhos e elementos ARIA.
  * **Como começar?** Instale a extensão para Chrome, Firefox ou Edge. Com a página que deseja analisar aberta, clique no ícone da WAVE na barra de ferramentas do seu navegador. Um painel lateral será exibido com o resumo dos erros, alertas e funcionalidades de acessibilidade.

### axe DevTools - Web Accessibility Testing

  * **Link:** [https://www.deque.com/axe/devtools/](https://www.deque.com/axe/devtools/)
  * **O que é?** Desenvolvida pela Deque Systems, esta extensão é baseada na biblioteca `axe-core`. Ela adiciona uma nova aba às ferramentas de desenvolvedor do navegador (F12) e realiza uma análise automática, categorizando os problemas por severidade.
  * **Quando usar?** Ideal para desenvolvedores integrarem a verificação de acessibilidade em seu fluxo de trabalho. É ótima para identificar problemas específicos de código (como ARIA incorreto) e oferece sugestões de correção.
  * **Como começar?** Instale a extensão, abra as Ferramentas de Desenvolvedor (F12) na sua página, vá para a aba "axe DevTools" e clique em "Scan ALL of my page".

### Lighthouse (Integrado ao Google Chrome)

  * **Link:** [https://developer.chrome.com/docs/lighthouse/accessibility/](https://developer.chrome.com/docs/lighthouse/accessibility/)
  * **O que é?** Uma ferramenta de auditoria automatizada do Google, já integrada às Ferramentas de Desenvolvedor do Chrome. Ela avalia a acessibilidade como parte de um relatório mais amplo que também inclui performance, SEO e boas práticas.
  * **Quando usar?** Útil para obter um panorama geral da qualidade da página. A pontuação de acessibilidade serve como um bom indicador inicial, mas não substitui testes manuais.
  * **Como começar?** Abra as Ferramentas de Desenvolvedor (F12), vá para a aba "Lighthouse", marque a categoria "Accessibility" e clique em "Analyze page load".

-----

## Leitores de Tela

Leitores de tela são softwares que vocalizam ou apresentam em Braille o conteúdo exibido na tela. Testar com eles é a única forma de simular a experiência de usuários cegos ou com baixa visão.

### NVDA (NonVisual Desktop Access)

  * **Link:** [https://www.nvaccess.org/](https://www.nvaccess.org/)
  * **O que é?** O leitor de tela de código aberto mais popular para Windows. É gratuito e amplamente utilizado pela comunidade de pessoas com deficiência visual.
  * **Quando usar?** Essencial para testes manuais de navegação via teclado e para verificar se a estrutura semântica (cabeçalhos, landmarks, links) e os nomes acessíveis estão sendo anunciados corretamente.
  * **Como começar?** Baixe e instale o NVDA. Use os atalhos de teclado para navegar pela sua página. Os principais são: `Insert + Seta para baixo` (ler tudo), `Tab` (pular para o próximo item focável), `H` (pular para o próximo cabeçalho), `T` (pular para a próxima tabela), etc.

### JAWS (Job Access With Speech)

  * **Link:** [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
  * **O que é?** Um dos leitores de tela mais robustos e utilizados no ambiente corporativo para Windows. É uma ferramenta paga.
  * **Quando usar?** Para garantir a compatibilidade em ambientes corporativos onde o JAWS é o padrão. Seu comportamento pode diferir ligeiramente do NVDA em alguns casos.
  * **Como começar?** A navegação é similar à do NVDA, com um conjunto próprio de atalhos. Testar com ambos (JAWS e NVDA) oferece uma cobertura mais ampla.

### Leitores de Tela Nativos (VoiceOver e TalkBack)

  * **Links:** VoiceOver (Apple), TalkBack (Android)
  * **O que são?** Leitores de tela já integrados aos sistemas operacionais macOS/iOS (VoiceOver) e Android (TalkBack).
  * **Quando usar?** Indispensáveis para testar a acessibilidade em dispositivos móveis. A interação baseada em gestos é diferente da navegação por teclado no desktop.
  * **Como começar?** Ative o leitor de tela nas configurações de acessibilidade do seu dispositivo. Aprenda os gestos básicos de navegação (ex: deslizar para a direita/esquerda para ir para o próximo/item anterior, toque duplo para ativar).

-----

## Verificadores de Contraste

Garantem que o texto e os componentes de interface tenham contraste de cor suficiente em relação ao fundo, conforme os requisitos 5.11.2, 5.11.3 e 5.11.4 da NBR 17225.

### WebAIM - Contrast Checker

  * **Link:** [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/) 
  * **O que é?** Uma ferramenta online simples e direta para verificar a relação de contraste entre duas cores (primeiro plano e fundo).
  * **Quando usar?** Durante a fase de design e desenvolvimento para validar paletas de cores e garantir que os textos sejam legíveis.
  * **Como começar?** Abra o site, insira os códigos hexadecimais das cores do texto e do fundo. A ferramenta mostrará a taxa de contraste e indicará se ela passa nos níveis AA e AAA da WCAG para textos normais e grandes.

### Adobe Color - Ferramentas de Acessibilidade

  * **Link:** [https://color.adobe.com/pt/create/color-contrast-analyzer](https://www.google.com/search?q=https://color.adobe.com/pt/create/color-contrast-analyzer)
  * **O que é?** Uma ferramenta mais completa da Adobe que não só verifica o contraste, mas também sugere cores alternativas que atendem aos requisitos, caso as cores originais falhem.
  * **Quando usar?** Muito útil na fase de design, para criar paletas de cores acessíveis desde o início do projeto.
  * **Como começar?** Acesse a ferramenta, insira as cores do seu projeto e utilize os controles deslizantes para encontrar combinações acessíveis.

-----

## Outras Ferramentas Úteis

### HeadingsMap

  * **Link:** [Extensão para Chrome](https://www.google.com/search?q=https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhphjdmk) / [Extensão para Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/headingsmap/)
  * **O que é?** Uma extensão que gera um mapa ou sumário interativo da estrutura de cabeçalhos (`h1` a `h6`) de uma página.
  * **Quando usar?** Para verificar rapidamente se a hierarquia de cabeçalhos está lógica e sem pular níveis (Requisito 5.3.5 da NBR 17225), o que é crucial para a navegação de usuários de leitores de tela.
  * **Como começar?** Instale a extensão, navegue até a página desejada e clique no ícone da HeadingsMap. Ela exibirá a estrutura de títulos, destacando possíveis erros.

### ACHECKS - Caixa de ferramentas para acessibilidade

  * **Link:** [https://www.achecks.org/](https://www.achecks.org/)
  * **O que é?** Um verificador de acessibilidade online que permite testar páginas web colando a URL ou o código-fonte.
  * **Quando usar?** Para obter um relatório de conformidade com diferentes padrões, incluindo WCAG e Section 508.
  * **Como começar?** Acesse o site, escolha a aba "Verificar por URL", cole o endereço da página e clique em "Verificar". O site irá gerar um relatório detalhado dos problemas encontrados.

