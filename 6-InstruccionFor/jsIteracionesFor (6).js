function Mostrar()
{
    var numeros;
    var nPar = 0;

    numero = parseInt(prompt("Ingrese Numero :"));

    for(var i=1; i<=numero; i++)
    {
        if((i%2) != 0)
        {
            continue;
        }
        console.log(i + " ");
        nPar++;
    }    

    console.log("La cantidad de numeron Pares es : "+ nPar)



}//FIN DE LA FUNCIÓN