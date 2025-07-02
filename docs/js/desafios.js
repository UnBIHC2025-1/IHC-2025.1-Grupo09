document.addEventListener("DOMContentLoaded", function () {
  const desafios = [
    {
      titulo: "Desafio da Semana: A Caça aos Contrastes Baixos",
      descricao:
        "Sua missão esta semana é garantir que todos os textos do seu site sejam fáceis de ler para todos. Navegue pelas suas páginas e utilize a ferramenta <strong>Adobe Color Contrast Checker</strong>, que recomendamos em nosso checklist, para encontrar e corrigir qualquer combinação de cores de texto e fundo que não atenda à proporção mínima de 4.5:1 (para textos normais) ou 3:1 (para textos grandes).",
    },
    {
      titulo: "Desafio da Semana: A Prova dos Leitores de Tela",
      descricao:
        "Uma boa estrutura de cabeçalhos (H1, H2, H3...) é vital para a navegação. Esta semana, ative um leitor de tela (como o NVDA para Windows ou o VoiceOver para Mac) e tente navegar pelo seu site usando apenas os cabeçalhos. A estrutura faz sentido? É lógica e sequencial? Use também a extensão <strong>WAVE</strong> para visualizar a ordem da sua estrutura de títulos e identificar falhas.",
    },
    {
      titulo: "Desafio da Semana: Imagens que Falam por Si",
      descricao:
        'Nenhuma imagem pode ficar para trás! O desafio desta semana é auditar todas as imagens do seu site. Verifique se cada uma delas possui um atributo `alt` descritivo e conciso. Para imagens puramente decorativas, o atributo `alt` deve estar presente, mas vazio (`alt=""`). Utilize a extensão <strong>AXE DevTools</strong> para escanear suas páginas e encontrar rapidamente imagens sem texto alternativo.',
    },
    {
      titulo: "Desafio da Semana: O Teste do Tab",
      descricao:
        'Muitos usuários navegam sem um mouse. Sua tarefa é testar a navegabilidade completa do seu site usando apenas o teclado. Use a tecla "Tab" para navegar por todos os links, botões e campos de formulário. A ordem da navegação é lógica e intuitiva? O foco do teclado (o contorno que indica onde você está) é sempre visível? Corrija qualquer elemento que não possa ser alcançado ou que tenha um indicador de foco pouco visível.',
    },
  ];

  function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNo;
  }

  const hoje = new Date();
  const numeroSemana = getWeekNumber(hoje);
  const desafioDaSemana = desafios[numeroSemana % desafios.length];
  const containerDesafio = document.getElementById("desafio-semanal");
  if (containerDesafio) {
    containerDesafio.innerHTML = `
      <h2>${desafioDaSemana.titulo}</h2>
      <p>${desafioDaSemana.descricao}</p>
    `;
  }
});
