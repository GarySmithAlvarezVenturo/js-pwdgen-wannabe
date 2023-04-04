/* 
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito23
*/
alert("Compila tutto grazie!")

var nome = window.prompt("Inserisci il tuo nome");
var cognome = window.prompt("Inserisci il tuo cognome");
var colorePreferito = window.prompt("Inserisci il tuo colore preferito")

document.getElementById("Dati").innerHTML="Benvenuto " +nome +cognome +colorePreferito;

    