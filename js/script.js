const sections = document.querySelectorAll(".js-scroll");

function iniciarAnimacaoScroll() {
  if (sections.length) {
    const window60 = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - window60 < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

iniciarAnimacaoScroll();
