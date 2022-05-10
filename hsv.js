//Fordert saubere Programmierung. Dadurch hat kein Browser Probleme
'use strict'

//Konstante erstellen und mit HTML Button befüllen
const switcherHSV = document.querySelector('.btnHSV');

//Listener erstellen der bei Klick auf Button auslöst
switcherHSV.addEventListener('click', function() {
    document.body.classList.toggle('dark-themeHSV');

//Vergleich welche Farbe gewählt werden muss
    var className = document.body.className;
    if(className == "light-themeHSV") {
        this.textContent = 'Dark';
    }
    else{
        this.textContent = 'Light';
    }
});

function showTime(){
    var dateNow = new Date();
    var date = new Date('2018-05-12T14:13:00');
    var tage = Math.floor((date.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24) * (-1));
    var stunden = Math.floor((date.getTime() - dateNow.getTime()) / (1000 * 60 * 60) * (-1)) - tage * 24;
    var minuten = Math.floor((date.getTime() - dateNow.getTime()) / (1000 * 60) * (-1)) - ((stunden + tage * 24) * 60);
    var sekunden = Math.floor((date.getTime() - dateNow.getTime()) / (1000) * (-1)) - Math.floor((date.getTime() - dateNow.getTime()) / (1000 * 60) * (-1)) * 60;
     
    //stunden = (stunden < 10) ? "0" + stunden : stunden;
    //minuten = (minuten < 10) ? "0" + minuten : minuten;
    //sekunden = (sekunden < 10) ? "0" + sekunden : sekunden;
    
    var time = tage + " Tage, " + stunden + " Stunden, " + minuten + " Minuten, " + sekunden + " Sekunden";
    document.getElementById("hsv").innerText = time;
    document.getElementById("hsv").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//Quelle:https://docs.microsoft.com/de-de/learn/modules/build-simple-website/S