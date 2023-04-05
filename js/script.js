/* 
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito23
*/
alert("Compila tutto grazie!")

const firstname = window.prompt("Inserisci il tuo nome");
const surname = window.prompt("Inserisci il tuo cognome");
const favoritecolor = window.prompt("Inserisci il tuo colore preferito")

const password = firstname + surname + favoritecolor + 23;

document.getElementById("password").innerHTML=password;


    