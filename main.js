var h = 0;
var m = 0;
var s = 0;
var ms = 0;
var timer = false;
function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    document.getElementById("h").innerHTML = "00";
    document.getElementById("m").innerHTML = "00";
    document.getElementById("s").innerHTML = "00";
    document.getElementById("ms").innerHTML = "00";
}
function stopwatch() {
    if (timer == true) {
        ms = ms + 1;
        if (ms == 100) {
            ms = 0;
            s = s + 1;
        }
        if (s == 60) {
            s = 0;
            m = m + 1;
        }
        if (m == 60) {
            s = 0;
            m = 0;
            h = h + 1;
        }
        if (h == 60) {
            s = 0;
            m = 0;
            h = 0;
        }
        if (ms < 10) {
            document.getElementById("ms").innerHTML = "0" + ms;
        }
        else
        {
            document.getElementById("ms").innerHTML = ms;
        }
        if (s < 10) {
            document.getElementById("s").innerHTML = "0" + s;
        }
        else
        {
            document.getElementById("s").innerHTML = s;
        }
        if (m < 10) {
            document.getElementById("m").innerHTML = "0" + m;
        }
        else
        {
            document.getElementById("m").innerHTML = m;
        }
        if (h < 10) {
            document.getElementById("h").innerHTML = "0" + h;
        }
        else
        {
            document.getElementById("h").innerHTML = h;
        }

        setTimeout("stopwatch()", 9);
    }
}