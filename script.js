// this function for date and time
function dateTimes() {
  let d = document.getElementById("dateTimes");
  d.innerHTML = Date();
  d.style.fontSize = "40px";
  d.style.color = "green";
}

function timeAndDate() {
    const dt = new Date();
    var day = document.getElementById("day");
    var dat = document.getElementById("date");
    var t = document.getElementById("time");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dy = days[dt.getDay()];
  day.innerHTML=dy;
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  t.innerHTML = ""+h+" : "+m+" : "+s;
  let ddt ;
  let dd = dt.getDate();
  if(dd<10){
    ddt="0"+dd;
  }else{
    ddt=dd;
  }
  let dmd;
  let md = dt.getMonth();
  if (md <= 9) {
    dmd = "0" + (md + 1);
  }
  else {
    dmd = md;
  }
  let yy = dt.getFullYear();
  dat.innerHTML = ddt + "/" + dmd + "/" + yy;
}
setInterval(time, 1000);
