var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);
function recherche (prenom)
{
    var i = 0
    while (i<tab.length) 
    {
      if (tab[i] == prenom)
      {
        console.log("le prénom trouvé est : "+prenom)
        tab.splice(i,1);
        tab.length = 10;
        console.log(tab);
        i=0;
        var prenom=prompt("Saisissez un prénom");
      }
      i++;
    }
    alert("erreur")
} 
recherche(prompt("Saisissez un prénom"))