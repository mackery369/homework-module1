//Time data function
function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    
    var utchr = d.getUTCHours();
    var timeDiff;
    timeDiff = utchr - hr; // difference between UTC and Current Time
    var adjTimeDiff;

    // 5,6,7,8
    var timeZone;

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" +min;
    }
    if (hr == 12) {
        ampm = "PM";
    } else if ( hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
   
    if (timeDiff == 5) {
        timeZone = "EST";
    } else if (timeDiff == 6) {
        timeZone = "CST";
    } else if (timeDiff == 7) {
        timeZone = "MT";
    } else {
        timeZone = "PST";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time;
    setInterval(currentTime,1000);
}
currentTime();