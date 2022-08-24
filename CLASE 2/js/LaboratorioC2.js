var rol = prompt("¿Cuál es su rol?")


if (rol == "admin" || rol == "recursos") {
    var clave = prompt("¿Cuál es su clave?")
        if(clave=="1234"){
            var nombre = prompt("¿Cuál es su nombre de usuario?")
            document.write("<h1>Hola " + nombre +", bienvenida a nuestra aplicación.</h1>")
    } else {
        document.write("Ha habido un error, pregunte a su supervisor rol y contraseñas correctas.")
    }


} else {

    document.write("Ha habido un error, pregunte a su supervisor rol y contraseñas correctas.")
}