document.addEventListener("DOMContentLoaded", function () {
  const allCheckboxes = document.querySelectorAll(
    "input.task-list-item-checkbox"
  );
  if (allCheckboxes.length === 0) {
    const container = document.getElementById("progress-container");
    if (container) container.style.display = "none";
    return;
  }

  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const radius = progressBar.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  progressBar.style.strokeDasharray = `${circumference} ${circumference}`;

  function updateProgress() {
    const checkedCount = document.querySelectorAll(
      "input.task-list-item-checkbox:checked"
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
