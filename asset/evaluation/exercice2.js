function TableMultiplication ()
{ 
    var i = 1
    var X = Number(prompt("Donnez un entier"))
    var N = Number(prompt("Nombre de multiple"))
    do {
        var SaisieTab = X, N;
        var resultat = i * X
        console.log(i+" x "+X+" = "+resultat) ;
        i++;
       } while (i <= N)
}
TableMultiplication () ;