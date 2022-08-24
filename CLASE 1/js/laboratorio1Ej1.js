document.write("EJERCICICIO 1<br>");

var salXA, salXB, salXC, salXD, salXE;
var salYA, salYB, salYC, salYD, salYE;

var x = 10;
var y = 20;
/* Test A */
x = x + x + 1;
y = y - y - x;

salXA = x;
salYA = y;

/* Test B */
var x = 10;
var y = 20;

x = (x - y) + 4;
y = 4 + (y + 5);

salXB = x;
salYB = y;

/* Test C */
var x = 10;
var y = 20;

x = x * 2 - 4;
y = 4 - y * 2;

salXC = x;
salYC = y;

/* Test D */
var x = 10;
var y = 20;

x = (20 - x) / y;
y = x + 2 / y;

salXD = x;
salYD = y;

/* Test E */
var x = 10;
var y = 20;

x = ((1 - x) * (y / 8)) * 4 * 0;
y = (x + 3) / x;

salXE = x;
salYE = y;




// alert("Valor de X: " + x);
// alert("Valor de Y: " + y);

document.write("<br>Test A<br> Salida X: " + salXA + ". Salida Y: " + salYA);

document.write("<br>Test B<br> Salida X: " + salXB + ". Salida Y: " + salYB);

document.write("<br>Test C<br> Salida X: " + salXC + ". Salida Y: " + salYC);

document.write("<br>Test D<br> Salida X: " + salXD + ". Salida Y: " + salYD);

document.write("<br>Test E<br> Salida X: " + salXE + ". Salida Y: " + salYE);

