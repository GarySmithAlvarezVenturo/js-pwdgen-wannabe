/* 
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito23
*/
alert("Compila tutto grazie!")

var name = window.prompt("Inserisci il tuo nome");
var surname = window.prompt("Inserisci il tuo cognome");
var favoritecolor = window.prompt("Inserisci il tuo colore preferito")

document.getElementById("Dati").innerHTML="Benvenuto " +name +surname +favoritecolor + 23;


    