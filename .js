var numeroSecreto = Math.floor(Math.random() * 11);
var numeroDeChutes = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (numeroDeChutes == 0 || numeroDeChutes <= 0) {
    elementoResultado.innerHTML =
      "Você errou, não possui mais tentativas.<br>O número era " +
      numeroSecreto;
  } else {
    if (chute == numeroSecreto) {
      --numeroDeChutes;
      elementoResultado.innerHTML = "Você acertou, Parabéns!!!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Digite apenas números de 0 a 10";
    } else {
      if (numeroSecreto > chute && numeroDeChutes > 0) {
        --numeroDeChutes;
        elementoResultado.innerHTML =
          "Você errou!<br>Tente outra vez com um número MAIOR!<br>Você possui " +
          numeroDeChutes +
          " tentativas";
      } else if (numeroSecreto < chute && numeroDeChutes > 0) {
        --numeroDeChutes;
        elementoResultado.innerHTML =
          "Você errou!<br>Tente outra vez com um número MENOR!<br>Você possui " +
          numeroDeChutes +
          " tentativas";
      }
    }
  }
}
