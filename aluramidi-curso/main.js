function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

const listaTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaTeclas.length) {
  listaTeclas[contador].addEventListener("click", tocaSomPom);
  contador++;
  console.log(contador);
}
