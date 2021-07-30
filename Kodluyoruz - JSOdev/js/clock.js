function soru() {
    var isim = prompt("Adınızı giriniz:")
    document.getElementById("myName").innerText = isim;
}
function showTime() {
    var date = new Date();
    var saat=date.getHours();
    var dakika=date.getMinutes();
    var saniye=date.getSeconds();
    var session = date.getDay();

    if (session == 0) {
        session = "Pazartesi";
    }
    else if (session == 1) {
        session = "Salı";
    }
    else if (session == 2) {
        session = "Çarşamba";
    }
    else if (session == 3) {
        session = "Perşembe";
    }
    else if (session == 4) {
        session = "Cuma";
    }
    else if (session == 5) {
        session = "Cumartesi";
    }
    else if (session == 6) {
        session = "Pazar";
    }
    if(saat=="0"){
        saat="00"
    }
    var tarih=`${date.getDay()}.${date.getMonth()}.${date.getFullYear()} - ${session} ${saat}:${dakika}:${saniye}`
    document.getElementById("myClock").innerHTML = tarih;

    setTimeout(showTime, 1000);
}
soru();
showTime();