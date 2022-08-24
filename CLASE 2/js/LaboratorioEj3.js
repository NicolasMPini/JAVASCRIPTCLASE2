var sueldo = parseFloat(prompt("Ingrese su sueldo"));
var bonus = parseFloat(prompt("Ingrese su bonus"));
var suma = sueldo + bonus;
var resultado = suma > 0; 
if (resultado == true) {

    alert("La suma total es: " + suma)
    document.write("La suma total es: " + suma)

} else {

    alert("Debe ingresar números positivos solamente")
    document.write("Debe ingresar números positivos solamente")
    
}