export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const funcionamentoP = document.querySelector(".funcionamento");

  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horaioSemana = funcionamento.dataset.horario.split(",").map(Number);
  const diasfimSemana = funcionamento.dataset.fim.split(",").map(Number);
  const horarioSabado = funcionamento.dataset.sabado.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) != -1;
  const sabadoAberto = diasfimSemana.indexOf(diaAgora) != -1;

  const horarioSabadoAberto =
    horarioAgora >= horarioSabado[0] && horarioAgora < horarioSabado[1];

  const horarioAberto =
    horarioAgora >= horaioSemana[0] && horarioAgora < horaioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamentoP.innerHTML = "Aberto agora";
    funcionamentoP.classList.add("aberto");
  } else if (sabadoAberto && horarioSabadoAberto) {
    funcionamentoP.innerHTML = "Aberto agora";
    funcionamentoP.classList.add("aberto");
  }
}

/* teste 
console.log("SEMANA " + semanaAberto);
console.log("HORARIO " + horarioAberto);

console.log("---------------//-----------");

console.log("SABADO ABERTO " + sabadoAberto);
console.log("HORARIO ABERTO " + horarioSabadoAberto);
*/
