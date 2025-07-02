window.addEventListener("load", function () {
    // SELETOR CORRIGIDO: Procura por qualquer input do tipo checkbox
    // que esteja dentro de um item de lista da classe 'task-list-item'.
    const allCheckboxes = document.querySelectorAll("li.task-list-item input[type=checkbox]");
    const container = document.getElementById('progress-container');
    
    // Se não houver checkboxes na página, o script para aqui.
    if (allCheckboxes.length === 0) {
        return;
    }

    // Se encontramos checkboxes, tornamos o container visível.
    if (container) {
        container.classList.add('visivel');
    }

    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const radius = progressBar.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
    
    function updateProgress() {
        // SELETOR CORRIGIDO para os itens marcados
        const checkedCount = document.querySelectorAll("li.task-list-item input[type=checkbox]:checked").length;
        const totalCount = allCheckboxes.length;
        
        progressText.textContent = `${checkedCount}/${totalCount}`;

        const percent = totalCount > 0 ? (checkedCount / totalCount) : 0;
        const offset = circumference - percent * circumference;
        
        progressBar.style.strokeDashoffset = offset;
    }

    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateProgress);
    });

    updateProgress();
});
