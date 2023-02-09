function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

const listaTeclas = document.querySelectorAll(".tecla");

listaTeclas[0].addEventListener("click", tocaSomPom);
