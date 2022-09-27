
function checkForm(f) 
{
    var x  = document.querySelector('#votrenom').value;
    var filtre = new RegExp("^[A-Za-z]+$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("Entrez seulement des caracteres dans la case de votrenom");
        return false;
    }
    
    var x  = document.querySelector('#votreprenom').value;
    var filtre = new RegExp("^[A-Za-z]+$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("Entrez seulement des caracteres dans la case de votreprenom");
        return false;
    }

    var x  = document.querySelector('#codepostal').value;
    var filtre = new RegExp("^[0-9]{5}$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("Entrez le code postal de 5 chiffres s.v.p.!");
        return false;
    }

    var x  = document.querySelector('#adress').value;
    var filtre = new RegExp("^[0-9A-Za-z\ \'\-]+$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("Adresse Invalide");
        return false;
    }

    var x  = document.querySelector('#ville').value;
    var filtre = new RegExp("^[A-Za-z]+$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("Entrez seulement des caracteres dans la case Ville");
        return false;
    }

    var x  = document.querySelector('#mail').value;
    var filtre = new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("E-mail invalide");
        return false;
    }

    var x  = document.querySelector('#votrequestion').value;
    var filtre = new RegExp("^[0-9A-Za-z\ \'\-]+$");
    var resultat = filtre.test(x);
    console.log(resultat);
    if (resultat==false) 
    {
        alert("Entrez seulement des caracteres dans la case de votre question");
        return false;
    } 
}