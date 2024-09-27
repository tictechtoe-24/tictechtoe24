function updateTimer() {
    future = Date.parse("September 27, 2024 18:00:00");
    now = new Date();
    diff = future - now;
 
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);
 
    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;
 
    document.getElementById("timer")
        .innerHTML =
        '<div>' + "0" + '<span>days</span></div>' + 
        '<div>' + "00" + '<span>hours</span></div>' +
        '<div>' + "00" + '<span>minutes</span></div>' +
        '<div>' + "0" + '<span>seconds</span></div>'; 
 }
setInterval('updateTimer()', 1000);