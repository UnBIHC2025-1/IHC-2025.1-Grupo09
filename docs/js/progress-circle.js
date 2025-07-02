window.addEventListener("load", function () {
  const allCheckboxes = document.querySelectorAll(
    "li.task-list-item input[type=checkbox]"
  );
  const container = document.getElementById("progress-container");

  if (allCheckboxes.length === 0) {
    return;
  }

  if (container) {
    container.classList.add("visivel");
  }

  // --- LÓGICA DE RECOLHER/EXPANDIR ---
  const header = document.getElementById("progress-header");

  // 1. Verifica no localStorage se o usuário já deixou a caixa recolhida
  if (localStorage.getItem("progressCollapsed") === "true") {
    container.classList.add("is-collapsed");
  }

  // 2. Adiciona o evento de clique no cabeçalho
  header.addEventListener("click", () => {
    const isCollapsed = container.classList.toggle("is-collapsed");
    // 3. Salva o estado (aberto/fechado) no localStorage
    localStorage.setItem("progressCollapsed", isCollapsed);
  });
  // --- FIM DA LÓGICA DE RECOLHER ---

  // --- LÓGICA DO CÍRCULO (continua a mesma) ---
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const radius = progressBar.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  progressBar.style.strokeDasharray = `${circumference} ${circumference}`;

  function updateProgress() {
    const checkedCount = document.querySelectorAll(
      "li.task-list-item input[type=checkbox]:checked"
    ).length;
    const totalCount = allCheckboxes.length;

    progressText.textContent = `${checkedCount}/${totalCount}`;
    const percent = totalCount > 0 ? checkedCount / totalCount : 0;
    const offset = circumference - percent * circumference;
    progressBar.style.strokeDashoffset = offset;
  }

  allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });

  updateProgress();
});
