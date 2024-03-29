function tocaSom(seletorAudio) {
  const el = document.querySelector(seletorAudio);
  if (el && el.localName != "audio") {
    console.log("Esse elemento não existe");
  } else {
    el.play();
  }
}

const listaTeclas = document.querySelectorAll(".tecla");

for (let index = 0; index < listaTeclas.length; index++) {
  const tecla = listaTeclas[index];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.addEventListener("click", function () {
    tocaSom(idAudio);
  });

  tecla.onkeydown = function (e) {
    if (e.key == "Enter" || e.code == "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
