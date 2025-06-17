# Desenvolvimento

"Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no mercado para testes e padronizações. Também é importante que a equipe saiba como as pessoas com deficiência usam os sítios web e aplicativos". Nesse caso, foram incluídas técnicas relacionadas ao desenvolvimento e também formas de verificar.

#### 1. Estrutura e Semântica (HTML)
- [ ] **Usar elementos HTML nativos e semanticamente corretos para apresentar o conteúdo.** (Referência: NBR 17225 - Diretriz 1.3.1: Informações e Relações)
- [ ] **Definir o idioma principal da página com o atributo `lang`.** (Referência: NBR 17225 - Diretriz 3.1.1: Idioma da Página)
    - > **Certo:** `<html lang="pt-br">`
    - > **Errado:** `<html>` (Sem o atributo de idioma)
- [ ] **Garantir que a hierarquia de títulos (`h1` a `h6`) seja lógica e não pule níveis.** (Referência: NBR 17225 - Diretriz 2.4.6: Cabeçalhos e Rótulos)
- [ ] **Toda página contém um único `h1` que descreve seu propósito principal.** (Referência: NBR 17225 - Diretriz 2.4.6: Cabeçalhos e Rótulos)
- [ ] **Usar o elemento `<table>` apenas para dados tabulares, não para layout.** (Referência: NBR 17225 - Diretriz 1.3.1: Informações e Relações)
- [ ] **Em tabelas, associar células de dados aos seus cabeçalhos com `<th>` e o atributo `scope`.** (Referência: NBR 17225 - Diretriz 1.3.1: Informações e Relações)
    - > **Certo:** `<tr> <th scope="row">Nome</th> <td>Maria</td> </tr>`
    - > **Errado:** `<tr> <td><b>Nome</b></td> <td>Maria</td> </tr>`
- [ ] **Fornecer um título para tabelas com o elemento `<caption>`.** (Referência: NBR 17225 - Diretriz 1.3.1: Informações e Relações)
- [ ] **O código-fonte é lógico e a ordem dos elementos faz sentido mesmo sem CSS.** (Referência: NBR 17225 - Diretriz 1.3.2: Sequência Significativa)
- [ ] **Garantir que o código não tenha erros de análise (parsing) que interfiram com tecnologias assistivas.** (Referência: NBR 17225 - Diretriz 4.1.1: Análise)
    - > **Certo:** `<h2><a href="#">Título</a></h2>`
    - > **Errado:** `<a href="#"><h2>Título</a></h2>` (Tags aninhadas incorretamente)

#### 2. Navegação por Teclado e Foco
- [ ] **Todas as funcionalidades interativas estão disponíveis e são operáveis por teclado.** (Referência: NBR 17225 - Diretriz 2.1.1: Teclado)
- [ ] **Não há "armadilhas de teclado", ou seja, o foco nunca fica preso em um componente.** (Referência: NBR 17225 - Diretriz 2.1.2: Nenhuma Armadilha para o Teclado)
    - > **Certo:** Um modal que, ao ser aberto, permite navegar por todos os seus elementos e pode ser fechado com a tecla `Esc`, devolvendo o foco para o item que o abriu.
    - > **Errado:** Um modal que, ao ser aberto, não permite que o usuário saia dele usando a tecla `Tab` ou `Esc`, ficando preso.
- [ ] **A ordem de navegação com a tecla `Tab` é lógica e intuitiva.** (Referência: NBR 17225 - Diretriz 2.4.3: Ordem do Foco)
- [ ] **O indicador de foco do teclado é sempre visível e com bom contraste.** (Referência: NBR 17225 - Diretriz 2.4.7: Foco Visível)
- [ ] **Elementos que recebem foco não devem ficar obscurecidos por outros elementos (ex: banners, menus fixos).** (Referência: NBR 17225 - Diretriz 2.4.11: Foco Não Obscurecido (Mínimo))
- [ ] **Fornecer um link no início da página para "pular" blocos de navegação e ir direto ao conteúdo principal (skip link).** (Referência: NBR 17225 - Diretriz 2.4.1: Ignorar Blocos)
    - > **Certo:** `<a href="#conteudo" class="skip-link">Pular para o conteúdo</a> ... <main id="conteudo">...</main>`
- [ ] **Oferecer atalhos de teclado (accesskey), se aplicável, e informar o usuário sobre eles.** (Referência: NBR 17225 - Diretriz 2.1.4: Atalhos de Caractere)

#### 3. Formulários e Controles
- [ ] **Todos os campos de formulário (`input`, `textarea`, `select`) têm um rótulo (`<label>`) associado via `for`/`id`.** (Referência: NBR 17225 - Diretriz 3.3.2: Rótulos ou Instruções)
    - > **Certo:** `<label for="nome">Nome:</label> <input type="text" id="nome">`
    - > **Errado:** `Nome: <input type="text">`
- [ ] **Agrupar campos de formulário relacionados (ex: checkboxes, radio buttons) com `<fieldset>` e `<legend>`.** (Referência: NBR 17225 - Diretriz 1.3.1: Informações e Relações)
- [ ] **Usar o atributo `autocomplete` para campos que solicitam informações do usuário (nome, endereço, etc.).** (Referência: NBR 17225 - Diretriz 1.3.5: Identificar a Finalidade da Entrada)
- [ ] **Erros de validação são identificados de forma clara, em texto, e o foco é movido para o campo com erro.** (Referência: NBR 17225 - Diretriz 3.3.1: Identificação de Erro)
- [ ] **Usar `aria-describedby` para associar campos de entrada a instruções ou mensagens de erro específicas.** (Referência: NBR 17225 - Diretriz 3.3.1: Identificação de Erro)
    - > **Certo:** `<input id="senha" type="password" aria-describedby="req_senha"> <p id="req_senha">A senha deve ter 8 caracteres.</p>`
- [ ] **Garantir que links sejam identificáveis (com `href`) e que o texto do link descreva seu destino.** (Referência: NBR 17225 - Diretriz 2.4.4: Finalidade do Link (Em Contexto))
- [ ] **Botões são implementados com o elemento `<button>` ou `input type="button"` e seu propósito é claro.** (Referência: NBR 17225 - Diretriz 4.1.2: Nome, Função, Valor)

#### 4. Imagens, Mídia e Conteúdo Dinâmico
- [ ] **Fornecer texto alternativo (`alt`) descritivo para todo conteúdo não textual (imagens, gráficos).** (Referência: NBR 17225 - Diretriz 1.1.1: Conteúdo não textual)
    - > **Certo:** `<img src="grafico.png" alt="Gráfico de pizza mostrando 70% de aprovação.">`
    - > **Errado:** `<img src="grafico.png" alt="Imagem">`
- [ ] **Usar `alt=""` para imagens puramente decorativas, para que sejam ignoradas.** (Referência: NBR 17225 - Diretriz 1.1.1: Conteúdo não textual)
- [ ] **Fornecer legendas e transcrições para conteúdo de áudio e vídeo.** (Referência: NBR 17225 - Diretriz 1.2: Mídia Baseada em Tempo)
- [ ] **Evitar conteúdo que pisque mais de três vezes por segundo.** (Referência: NBR 17225 - Diretriz 2.3.1: Três Flashes ou Abaixo do Limite)
- [ ] **Áudio que toca automaticamente por mais de 3 segundos pode ser pausado ou ter seu volume alterado.** (Referência: NBR 17225 - Diretriz 1.4.2: Controle de Áudio)
- [ ] **Fornecer controles para pausar, parar ou ocultar qualquer conteúdo em movimento (carrosséis, animações).** (Referência: NBR 17225 - Diretriz 2.2.2: Pausar, Parar, Ocultar)

#### 5. ARIA e Interatividade (Modais, etc.)
- [ ] **Usar atributos ARIA (Accessible Rich Internet Applications) apenas quando o HTML semântico não for suficiente.** (Referência: NBR 17225 - Diretriz 4.1.2: Nome, Função, Valor)
- [ ] **Modais e pop-ups podem ser fechados com a tecla `Esc` e o foco retorna ao elemento que o acionou.** (Referência: NBR 17225 - Diretriz 2.1.2: Nenhuma Armadilha para o Teclado)
- [ ] **Mensagens de status e atualizações de conteúdo são comunicadas a tecnologias assistivas (ex: usando `aria-live`).** (Referência: NBR 17225 - Diretriz 4.1.3: Mensagens de Status)
    - > **Certo:** `<div id="alerta" role="alert" aria-live="polite">Item adicionado ao carrinho!</div>` (O leitor de tela anunciará a mensagem sem mover o foco).
- [ ] **Avisar o usuário quando um link abrir em uma nova janela ou aba.** (Referência: NBR 17225 - Diretriz 3.2.2: Na Entrada)
    - > **Certo:** `<a href="#" target="_blank">Relatório Anual (abre em nova janela)</a>`

#### 6. Design Responsivo e Mobile
- [ ] **O conteúdo flui em uma única coluna sem rolagem horizontal em telas pequenas (Refluxo).** (Referência: NBR 17225 - Diretriz 1.4.10: Refluxo)
- [ ] **A orientação do dispositivo (retrato ou paisagem) não impede a visualização ou operação do conteúdo.** (Referência: NBR 17225 - Diretriz 1.3.4: Orientação)
- [ ] **O tamanho dos alvos de toque (botões, links) é de no mínimo 24x24 pixels CSS.** (Referência: NBR 17225 - Diretriz 2.5.8: Tamanho do Alvo)
- [ ] **O zoom do navegador não é desabilitado.** (Referência: NBR 17225 - Diretriz 1.4.4: Redimensionamento de Texto)
    - > **Errado:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`

---
### Bibliografia e Referências

> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 17225**: Acessibilidade para conteúdo web. Rio de Janeiro: ABNT, 2025.
>
> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital.** Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf. Acesso em: 17 jun. 2025.
>
> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2.** Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: 17 jun. 2025.