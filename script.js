document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".content p");
  let i = 0;

  function showLine() {
    if (i < lines.length) {
      lines[i].style.display = "block";
      i++;
      setTimeout(showLine, 400);
    }
  }

  lines.forEach(p => p.style.display = "none");
  showLine();
});
