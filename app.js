/*
Java Skript für Darkmode und Echtzeituhr
Autor: Gruppe 3 
Erstellt: 09.04.2022
Zuletzt geändert: 22.05.2022
*/
//Fordert saubere Programmierung. Dadurch hat kein Browser Probleme
'use strict'

//Konstante erstellen und mit HTML Button befüllen
const switcher = document.querySelector('.btn');

//Listener erstellen der bei Klick auf Button auslöst
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

//Vergleich welche Farbe gewählt werden muss
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = 'Dark';
    }
    else{
        this.textContent = 'Light';
    }
});



function showtime(){
    var date = new Date(); 
    var stunden = date.getHours(); //0-23 Stunden
    var minuten = date.getMinutes(); //0-59 Minuten
    var sekunden = date.getSeconds(); //0-59 Sekunden

    stunden = (stunden < 10) ? "0" + stunden : stunden;
    minuten = (minuten < 10) ? "0" + minuten : minuten;
    sekunden = (sekunden < 10) ? "0" + sekunden : sekunden;

    var time = stunden + ":" + minuten + ":" + sekunden;
    document.getElementById("uhr").innerText = time;
    document.getElementById("uhr").textContent = time;

    setTimeout(showtime, 1000)
}

showtime();

//Quelle:https://docs.microsoft.com/de-de/learn/modules/build-simple-website/S