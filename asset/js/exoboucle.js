/*function tableau ()
{ 
    var tableau = [];
    var nbBoucle = 1
    do {
      var SaisieTab = prompt("Invite de scrpit : "+ "\n\nsaisissez le prénom N° "+nbBoucle+ "\nou Clic sur Annuler pour arrêter le saisie. ");
      if (SaisieTab === null || SaisieTab === "")
      {
        return tableau;
        break;
      }
      var nbprenom = tableau.push(SaisieTab)
      console.log(nbprenom)
      console.log(tableau)
      nbBoucle++;
       } while (SaisieTab)
}
var tableau = tableau ()
console.log(tableau)
alert("les prénoms sont :"+tableau)*/


/*var N = 9
while (N >=0)
{
    console.log(N) ;
    N--;
}*/

/*function GetInteger ()
{
    var y = Number(prompt("Donnez un entier"));
    console.log(y)
    return y;
}


function tableau ()
{ 
    var tableau = [];
    do {
        var SaisieTab = GetInteger()
      if (SaisieTab === null || SaisieTab === "" || SaisieTab === 0)
      {
        return tableau;
        break;
      }
      var nbposte = tableau.push(SaisieTab)
      console.log(nbposte)
      console.log(tableau)
       } while (SaisieTab)
} Week-end 
/*function multiple ()
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
multiple () ;*/


function getVowels(str) {
    var vowelsCount = 0;

    //turn the input into a string
    var string = str.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }
  var nbvoyelle = getVowels(prompt(" Combien des voyelles sont-elles? "))
  console.log("Le(s) voyelle(s) est/sont : "+nbvoyelle);
  



