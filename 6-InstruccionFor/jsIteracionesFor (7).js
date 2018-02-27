function Mostrar()
{
    var numero;
    var nDiv = 0;

    numero = parseInt(prompt("Ingrese Numero :"));

    for(var i=1; i<=numero; i++)
    {
        if(  numero%i != 0)
        {
            continue;
        }
        console.log(i + " ");
        nDiv++;
    }    

    console.log("La cantidad de numeros divisibles son : "+ nDiv);




}//FIN DE LA FUNCIÓN