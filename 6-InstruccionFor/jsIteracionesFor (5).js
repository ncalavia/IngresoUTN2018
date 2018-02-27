function Mostrar()
{
    var numero;
    var nPar;

    numero = parseint(prompt("Ingrese Numero :"));

    for(var i=1; i<numero;i++)
    {
        if((numero%2) == 0)
        {
            console.log(numero + " ");
            nPar++;
        }
    }    


}//FIN DE LA FUNCIÓN