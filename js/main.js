function jugar() {
    var cant_intentos = 4;
    var acerto = false;
    var respuesta_correcta = "Bosque";
    var respuesta;

    var respuesta = document.getElementById("respuesta").value;
    if (respuesta == "") {
      alert("Por favor ingrese una respuesta");
    } else {
      while (cant_intentos > 0 && acerto != true) {
        cant_intentos--;
        if (respuesta == respuesta_correcta) {
          alert("Acertaste! Cuidemos nuestros bosques :)");
          acerto = true;
        } else if (cant_intentos > 2) {
          respuesta = prompt("Casi.. Otro intento!");
        } else if (cant_intentos == 2) {
          respuesta = prompt(
            "Te quedan 2 intentos, una pista: lo habitan muchos seres vivos"
          );
        } else if (cant_intentos == 1) {
          respuesta = prompt(
            "Te queda 1 intento, ultima pista: una sola palabra, contiene 3 vocales, primer letra en mayuscula!!"
          );
        } else {
          alert("Maldicion ! Perdiste :(");
        }
      }
    }
  }