// Operaciones con variables lógicas

var valUno = true; 
var valDos = true; 

// Negación

var dato = !valUno;
// alert(dato)

// AND (&&) -> Conjunción 
// Devuelve True cuando: solo si ambos lados de la operación son True
//                       caso contrario devuelve False
dato = valUno && valDos;

// OR (||) ASCII Alt + 124;
/* En servidores, donde los caractéres no se encuentran, se utiliza el código ASCII
Siempre es ALT + "Num"
*/
// Devuelve Flase: solo si ambos lados de la operación son False,
//                   caso contrario, devuelve true

// Es 
dato = valUno || valDos;

// alert(dato)

// Relacionales (Operaciones de Comparación)

num1 = 5; 
num2 = 10; 
dato = num2 > num1; // Mayor
dato = num2 > 2; 

dato = num2 < num1; // Menor

dato = num2 >= num1; // Mayor o igual

dato = num2 <= num1; // Menor o igual

dato = num2 == num1; // Igualdad

dato = num2 != num1; // Distinto 

var texto = "Juan "
dato = texto == "Clase"
dato = texto == "" // Pregunta si texto es vacío

dato = (num1 > 20) && (texto == "Juan ")

var nombre = prompt("Ingrese su nombre") // prompt para ingresar. Guarda una variable tipo string
var apellido = prompt("Ingrese su apellido")

var edad = parseInt(prompt("Ingrese su edad"))
/* 
var edad = prompt("Ingrese su edad") // Toma como string
var edadNum = parseInt(edad)
*/
var edadFuturo = edad + 10

var saludo = "Bienvenido " + nombre + " " + apellido + ", usted tiene " + edad + " años."

document.write(saludo);
// alert(saludo)
alert("Edad a futuro: " + edadFuturo)
// alert("Bienvenido " + nombre + " " + apellido)


/*--------------------------------------------------------*/

var respuesta = confirm("¿Seguro que quiere continuar?");

alert("La respuesta es " + respuesta);

/* Else if: permite usar el if de la condición anterior */