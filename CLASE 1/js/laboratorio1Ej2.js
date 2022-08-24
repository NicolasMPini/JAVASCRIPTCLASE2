document.write("<br><br>EJERCICICIO 2 <br>");
/* Test A */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

frase = palabra1 + " mundo";

document.write("<br>TEST A <br>Palabra 1: " + palabra1 + ". Palabra 2: " + palabra2 + ". Frase: " + frase + "<br>"); 

/* Test B */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";

document.write("TEST B <br>Palabra 1: " + palabra1 + ". Palabra 2: " + palabra2 + ". Frase: " + frase + "<br>");

/* Test C */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;

document.write("TEST C <br>Palabra 1: " + palabra1 + ". Palabra 2: " + palabra2 + ". Frase: " + frase + "<br>");

/* Test D */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";

document.write("TEST D <br>Palabra 1: " + palabra1 + ". Palabra 2: " + palabra2 + ". Frase: " + frase + "<br>");

// alert(palabra1);
// alert(palabra2);
// alert(frase);