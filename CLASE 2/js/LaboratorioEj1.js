var nombre = prompt("Ingrese su nombre") // prompt para ingresar. Guarda una variable tipo string
var apellido = prompt("Ingrese su apellido")

var edad = parseInt(prompt("Ingrese su edad"))
/* 
var edad = prompt("Ingrese su edad") // Toma como string
var edadNum = parseInt(edad)
*/

var saludo = "Bienvenido " + nombre + " " + apellido + ", usted tiene " + edad + " años."

alert(saludo)

