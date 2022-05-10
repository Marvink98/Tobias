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
    
    var time = "Tage   " + tage + "  ||||  Stunden  " + stunden + "  ||||  Minuten  " + minuten + "  ||||  Sekunden  " + sekunden;
    document.getElementById("hsv").innerText = time;
    document.getElementById("hsv").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();