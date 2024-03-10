alert("¡Bienvenida y bienvenido a nuestro sitio web!");
//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * 10 + 1);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
console.log(numeroSecreto);
let maximosIntentos = 10|||||;
while (numeroUsuario != numeroSecreto) {
  let numeroUsuario = parseInt(
    prompt(`Me indicas un n�mero entre 1 y ${numeroMaximoPosible} por favor:`)
  );

  console.log(numeroUsuario);
  /*este codigo realiza
  la comparacion
   */
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste, el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("el numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    //incrementamos el contador cuando acierta
    //intentos = intentos + 1;
    //intentos += 1
    intentos++;
    //palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
      break;
    }
  }
}
