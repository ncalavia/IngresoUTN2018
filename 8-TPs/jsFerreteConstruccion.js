/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var RectanguloTotal = 0;
        
    var Largo = parseInt(document.getElementById("Largo").value);
    var Ancho = parseInt(document.getElementById("Ancho").value);
    
    RectanguloTotal= (2*Largo*3)+(2*Ancho*3);
    alert("La Cant de alambre de un terreno rectangular es " + RectanguloTotal + "mts de alambre")

}
function Circulo () 
{
    var CirculoTotal = 0;
    
    var radio = parseInt(document.getElementById("Radio").value);
    
    CirculoTotal= (2* 3,14 * radio)*3;
    alert("La Cant de alambre de un terreno Circular es: " + CirculoTotal + "mts de alambre")
}
function Materiales () 
{
	
}