// No abusar de los comentarios
/* 
Tampoco se recomiendan hacer comentarios de más de 30 líneas
*/

// alert("Mensaje desde código externo de JS");
// Si bien no es necesario el ; se recomienda
// num = 120; // Puede guardar números, palabras y frases
/* NO ES LO MISMO QUE Num = 120; */
// resultado = Num; 
// Variables
// String: Cadenas de caracteres. Para que sea texto, tienen que estar las comillas
var nombre = "Hola mundo"
var apellido = 'NN'
// El espacio es un caractérer
var direccion = "Levalle"
var dir_numero = "150"
// Numéricas
var numeroUno = 100; // Entero
var numeroDecimal = 3.1415; // FLOAT
// Lógicas
var encendido = true; //Verdadero
var estado = false; // Falso 
//"Clase de JS"
//true 

// OUTPUT (salidas en JS)
// alert y write son funciones, por eso siempre necesitan algo que escribir
// document.write("<h2>Búsqueda de clientes</h2>") // Se refiere al archivo que lo llamó
// document.write("<p>Nombre: " + nombre + ", " + apellido + "</p>")
// console.log("Se mostraron los datos del cliente en pantalla") // Manda un mensaje a consola sin que el cliente lo vea

// Operaciones con variable
// Asignación (=)
// Incremento 

var num = 1; // DECLARACIÓN DE VARIABLE. (cuando se reutiliza no hace falta poner "var")
// Incrementa en 1
++num;
num = 5; 
// Decremento en 1
--num;
// alert(num)

// Operaciones matemáticas (+,-,*,/) SOLO CON VARIABLES NUMERICAS (enteras o punto flotante
var num1 = 10;
var num2 = 5;
var resultado = num1 + num2 + 3.15;
// alert(resultado)
resultado = num1 - num2;
resultado = num1 * 2;
resultado = num1 / 2; 
num1 += 4; // num1 = num1 + 4
num1 -= 8; // num1 = num1 - 8
num1 *= 2; // num1 = num1 * 2
num1 /= 2; // num1 = num1 / 2
// alert(num1)

// Operaciones entre String

// Concatenaciones 
var mensaje = "La dirección es " + direccion + " " + dir_numero;
alert(mensaje)