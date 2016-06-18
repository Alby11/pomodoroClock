var sec = 0,
    min = 0,
    isPaused = true,
    isTimer = true;

function resetTimer() {
    sec = 0;
    min = parseInt(document.getElementById("intervalValue").innerHTML);
    document.getElementById("time").style.color = "#396";
}

function main() {
  
    resetTimer();

    setInterval(function() {
        if (!isPaused) {
            if (sec == 0) {
                sec = 60;
                if (min == 0) {
                    if (isTimer) {
                        isTimer = false;
                        document.getElementById("time").style.color = "#cea0d1";
                        min = parseInt(document.getElementById("pauseValue").innerHTML);
                    }
                    else {
                        isTimer = true;
                        document.getElementById("time").style.color = "#396";
                        min = parseInt(document.getElementById("intervalValue").innerHTML);
                    }
                }
                min--;
            }
            sec--;
            time = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
            document.getElementById("time").innerHTML = time;
            console.log(min + ":" + sec);
        }
    }, 1000);

    document.getElementById("btnStart").onclick = function () {
        this.style.display = "none";
        document.getElementById("btnStop").style.display = "inline-block";
        isPaused = false;
    };

    document.getElementById("btnStop").onclick = function () {
        this.style.display = "none";
        document.getElementById("btnStart").style.display = "inline-block";
        isPaused = true;
    };
    
    document.getElementById("btnPauseMinus").onclick = function () {
        if (document.getElementById("pauseValue").innerHTML >= 2) {
            if (isPaused) {
                document.getElementById("pauseValue").innerHTML -= 1;
                resetTimer();
            }
        }
    };
    
    document.getElementById("btnPausePlus").onclick = function () {
        if (document.getElementById("pauseValue").innerHTML <= 9) {
            if (isPaused) {
                document.getElementById("pauseValue").innerHTML = parseInt(document.getElementById("pauseValue").innerHTML) + 1;
                resetTimer();
            }
        }
    };
    
    document.getElementById("btnIntervalMinus").onclick = function () {
        if (document.getElementById("intervalValue").innerHTML >= 2) {
            if (isPaused) {
                document.getElementById("intervalValue").innerHTML -= 1;
                resetTimer();
            }
        }
    };

    document.getElementById("btnIntervalPlus").onclick = function () {
        if (document.getElementById("intervalValue").innerHTML <= 24) {
            if (isPaused) {
                document.getElementById("intervalValue").innerHTML = parseInt(document.getElementById("intervalValue").innerHTML) + 1;
                resetTimer();
            }
        }
    };
    
}

document.addEventListener("DOMContentLoaded", main, false);




