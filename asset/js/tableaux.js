/*var tab1 = [];
tab1[0] = ["poireau", "tomate", "carotte"];
tab1[1] = ["pomme", "poire", "banane"];  
console.log(tab1[1][2]); */

/*var tab1 = []
var legumes = ["poireau", "tomate", "carotte"];
var fruits = ["pomme", "poire", "banane"];  
tab1[0] = legumes;
tab1[1] = fruits;
console.log(tab1[1][2]) 
console.log(tab1[0][2])*/

function GetInteger (Lire)
{
    var y = Lire
    console.log(y)
    return y;
}
/*var M = Number(GetInteger(prompt("Donnez un entier")));
console.log(M)*/




function InitTab (nbposte)
{
    var myTableau = Array(Number(nbposte)); 
    return myTableau;

}
var myTableau = InitTab(prompt("Donnez le nombre des postes"));
console.log(myTableau);

function SaisieTab ()
{
    for (var i = 0; i < myTableau.length; i++) 
{
   myTableau[i] = Number(GetInteger(prompt("Donnez un entier")));
   console.log("Contenu du poste: ["+i+"] : "+myTableau[i]);
}
   return myTableau;

}
var myTableau = SaisieTab ();
console.log(myTableau);

function AfficheTab ()
{
    for (var i = 0; i < myTableau.length; i++) 
    {
        console.log("Contenu du poste: ["+i+"] : "+myTableau[i]);
    }
       
}
AfficheTab ();

function RechercheTab (nposte)
{
   console.log("Contenu du poste: ["+nposte+"] : "+myTableau[nposte])
}var tableau = tableau 
RechercheTab (prompt("Quel poste souhaitez-vous voir? poste n° : "));

function InfoTab ()
{
     function compareNombres (x, y)
     {
        return x - y
     }
    console.log("le tableau trié en ordre croissant : "+myTableau.sort(compareNombres))
    console.log("la plus grandes valeurs est : "+myTableau[myTableau.length-1])
    console.log("la plus petites valeurs est : "+myTableau[0])
    console.log("le tableau trié en ordre décroissant : "+myTableau.reverse(compareNombres))
    const initialValue = 0;
    const sumWithInitial = myTableau.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    console.log("la somme des valeurs = "+sumWithInitial);
    console.log("la moyenne est "+sumWithInitial/myTableau.length);
}   
InfoTab ()

function sort(myTableau){
    var changed;var tableau = tableau 
    do{
        changed = false;
        for(var i=0; i < myTableau.length-1; i++) {
            if(myTableau[i] > myTableau[i+1]) {
                var tmp = myTableau[i];
                myTableau[i] = myTableau[i+1];
                myTableau[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}

sort(myTableau);
console.log(myTableau);