document.addEventListener("DOMContentLoaded", function () {
  const desafios = [
    {
      titulo: "Desafio: A Caça aos Contrastes",
      descricao:
        "Use o <strong>Adobe Color Contrast Checker</strong> para garantir que os textos do seu site tenham contraste de cor suficiente.",
    },
    {
      titulo: "Desafio: A Prova dos Leitores de Tela",
      descricao:
        "Ative um leitor de tela e navegue pelo site usando só os cabeçalhos. A estrutura faz sentido? Use a extensão <strong>WAVE</strong> para ajudar.",
    },
    {
      titulo: "Desafio: Imagens que Falam",
      descricao:
        "Use a extensão <strong>AXE DevTools</strong> para encontrar e corrigir imagens sem texto alternativo descritivo (`alt`).",
    },
    {
      titulo: "Desafio: O Teste do Tab",
      descricao:
        "Navegue em seu site usando apenas a tecla 'Tab'. Todos os links e botões são alcançáveis e visíveis?",
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

  const notificacaoFechada = localStorage.getItem(
    "desafioFechadoSemana" + numeroSemana
  );

  if (!notificacaoFechada) {
    const notification = document.createElement("div");
    notification.className = "desafio-notificacao";
    notification.innerHTML = `
          <button class="close-btn" aria-label="Fechar">&times;</button>
          <h3>${desafioDaSemana.titulo}</h3>
          <p>${desafioDaSemana.descricao}</p>
      `;

    document.body.appendChild(notification);

    notification
      .querySelector(".close-btn")
      .addEventListener("click", function () {
        notification.classList.remove("visivel");
        // Salva no localStorage que o usuário fechou a notificação desta semana
        localStorage.setItem("desafioFechadoSemana" + numeroSemana, "true");
      });

    setTimeout(() => {
      notification.classList.add("visivel");
    }, 500);
  }
});
