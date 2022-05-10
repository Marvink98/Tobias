function showClock(){
    var date = new Date();
    var stunden = date.getHours();
    var minuten = date.getMinutes();
    var sekunden = date.getSeconds();
     
    stunden = (stunden < 10) ? "0" + stunden : stunden;
    minuten = (minuten < 10) ? "0" + minuten : minuten;
    sekunden = (sekunden < 10) ? "0" + sekunden : sekunden;
    
    var time = stunden + ":" + minuten + ":" + sekunden;
    document.getElementById("uhr").innerText = time;
    document.getElementById("uhr").textContent = time;
    
    setTimeout(showClock, 1000);
    
}

showClock();