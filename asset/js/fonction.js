/*window.alert("Salut")
function exemple(texte)
{
   alert(texte);
}
exemple("il y a quelqu'un ici")*/

/*function exemple1(papa, enfant, maman)
{
    var mariage = papa + maman; 
    alert(enfant+" "+mariage);
    console.log(mariage);
}
exemple1("papa", " enfant", "maman" );*/

/*function carre(nombre) 
{
  var resultat = nombre+nombre;
  alert(resultat);
  return resultat; 
}
var resultat2 = carre(7);
console.log(resultat2)*/

function boucle(x) 
{
    if (x >= 10) 
    { 
        return; 
    }

    console.log("x : "+x);

    boucle(x + 1); // appel récursif
}