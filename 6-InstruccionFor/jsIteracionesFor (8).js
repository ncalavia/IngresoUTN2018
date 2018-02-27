function Mostrar()
{
    var numero;
    var nDiv = 0;
    var bandPrimo = 0;

    numero = parseInt(prompt("Ingrese Numero :"));

    for(var i=numero; i>0; i--)
    {
        if(  numero % i == 0 )
        {
            nDiv++;  
        }
        if (nDiv > 2)
        {
            bandPrimo++;
            break;
        }
       
    }    

    if (bandPrimo != 0)
    {
    console.log("El numero No es primo ");
    }
    else
    {
    console.log("El numero es primo ");    
    }




}//FIN DE LA FUNCIÓN