
function tableau ()
{
    var tableau = [] ;
    do
    {
        var Saisie = Number(window.prompt("Donnez un entier Numérique")) ;
        if (Saisie === null || Saisie === "" || Saisie === 0) 
        {
            return tableau ;
            break ;
        } 
        tableau.push(Saisie)
    } while (Saisie != null && Saisie != "" )
}
var tableau = tableau() ;
console.log(tableau) ;
console.log("nombre des entier numérique saisie "+tableau.length) ;
const initialValue = 0 ;
const sumWithInitial = tableau.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
console.log("La somme est = "+sumWithInitial) ;
console.log("la moyenne est = "+sumWithInitial/tableau.length) ;


/*cl = console.log
function tableau()
{
    var tableau = [];
    do
    {
    var  Saisie = window.prompt("Donnez une valeur numérique");
    if (Saisie == null || Saisie == "" || Saisie == 0) 
    {
        return tableau;
        break;
    }

    var nbsaisie = tableau.push(Saisie)
    console.log(tableau);
        } while (Saisie != null && Saisie != "")


}
var tableau =tableau();
cl(tableau);
cl("nombre de valeur saisie : "+tableau.length);
const initialValue = 0;
const sumWithInitial = tableau.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
cl("la somme des valeurs = "+sumWithInitial);
cl("la moyenne est "+sumWithInitial/tableau.length);*/