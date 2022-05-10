//Fordert saubere Programmierung. Dadurch hat kein Browser Probleme
'use strict'

//Konstante erstellen und mit HTML Button befüllen
const switcherHSV = document.querySelector('.btn');

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
