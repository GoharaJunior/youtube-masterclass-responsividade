let show = true;

// Selecionando no 'DOM' as seguintes classes:
      // Opcional   // Selecioando          // Classes
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

// Adicionando um evento de 'Click'
menuToggle.addEventListener("click", () => {

  // Tirando a rolagem
  document.body.style.overflow = show ? "hidden" : "initial"

  // Selecionando e adicionando ou removendo caso exista
  menuSection.classList.toggle("on", show)
  show = !show;
})