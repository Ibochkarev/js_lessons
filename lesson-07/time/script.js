window.addEventListener('DOMContentLoaded', function () {
  function myClock() {
    let siteTime = new Date();
    let hour = siteTime.getHours();
    let minute = siteTime.getMinutes();
    let second = siteTime.getSeconds();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
  }

  setInterval(myClock, 1000);
});