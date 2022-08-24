/* Ejercicio 1 */

var edad = parseInt(prompt("Ingrese su edad"))

if( edad => 18) {
    document.write("Bienvenido a la página")
} else {
    document.write("Usted es menor de edad, no podrá ingresar a la página")
}

/* Ejercicio 2 */

var usuario = prompt("¿Cuál es su nombre de usuario?")


if (usuario == "admin") {
    var clave = prompt("¿Cuál es su clave?")
        if(clave=="1234"){
            document.write("<h1>Hola " + usuario +", bienvenida a nuestra aplicación.</h1>")
    } else {
        document.write("Ha habido un error, pregunte a su supervisor rol y contraseñas correctas.")
    }

} else {

    document.write("Ha habido un error, pregunte a su supervisor rol y contraseñas correctas.")
}

var titulo =document.getElementById('titulo1'); // POR ID
alert (titulo.innerHTML)

titulo.innerHTML = "Bienvenido al sistema";

var enunciado = document.querySelector("#textogral") // Por clase
enunciado = document.querySelector("p")