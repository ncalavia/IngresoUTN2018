/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numUno;
    var numDos;
    var Suma;


    numUno =  parseInt(document.getElementById("numeroUno").Value) ;
    numDos = parseInt(document.getElementById("numeroDos").Value) ;

    Suma = numUno + numDos ;

    alert("La Suma es : " + Suma);

}

