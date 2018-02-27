/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var suma=0;

    var Prec1 = document.getElementById("PrecioUno").value;
    var Prec2 = document.getElementById("PrecioDos").value;
    var Prec3 = document.getElementById("PrecioTres").value;

    suma = Prec1 + Prec2 + Prec3;
    alert("La suma es : " + suma)

}
function Promedio () 
{
	PrecioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    PrecioTres = document.getElementById("PrecioTres").value;


}
function PrecioFinal () 
{
	PrecioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    PrecioTres = document.getElementById("PrecioTres").value;
}