var days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function loadOptions() {
  if(alldark === true) {
    $('.pill').attr("style", "background-color:#444;");
    $('.barthingy').attr("style", "background-color:#666;");
    $('#month').attr("style", "color:#444;");
    $('#year').attr("style", "color:#444;");
    $('#time').attr("style", "color:#444;");
    $('input').attr("style", "background-color:#444;color: #fff;");
  }
  if(pillfloat === true) {
    $('.barthingy').attr("style", "display:none;");
  }
  if(hidedate === true) {
    $('#date').html('');
  } else {
    if(showweather === true) {
    } else {
      loadDate();
      setInterval("loadDate();", 20000);
    }
if (hidetime === true) {
    $('#time').html('');
  } 
if (hideboth === true) {
    $('#time').html('');
    $('#date').html('');
  } 
  }
  if(textcolor === "") {
  } else {
    $('#month').attr("style", "color:"+textcolor+";");
    $('#year').attr("style", "color:"+textcolor+";");
  }
  if(pillcolor === "") {
  } else {
    $('.pill').attr("style", "background-color:"+pillcolor+";");
  }
  if(pillbarcolor === "") {
  } else {
    $('.barthingy').attr("style", "background-color:"+pillbarcolor+";");
  }
  if(searchbarcolor === "") {
  } else {
    $('input').attr("style", "background-color:"+searchbarcolor+";");
  }
}

function loadDate() {
  var date = new Date();
  $("#month").html(months[date.getMonth()] + ' ' + date.getDate());
  $("#year").html(days[date.getDay()] + ' ' + date.getFullYear());
}
function loadTime() {
  $("#hour").html(hours[time.getHour()] + ' ' + time.getHour());
  $("#minute").html(minutes[time.getMinute()] + ' ' + time.getMinute());
}
function onlyYear() {
  var date = new Date();
  $("#year").html(days[date.getDay()] + ' ' + date.getFullYear());
}

var barhidden = true;

function hideDate() {
  $("#date").attr("style", "display:none;");
  $(".launcher").attr("style", "display:none;");
}
function showDate() {
  $("#date").attr("style", "display:inherit;");
  $(".launcher").attr("style", "display:inherit;");
}

function showBar() {
  barhidden = false;
  hideDate();
  $("#searchbar").attr("style", "display:inherit;");
  document.getElementById("search").focus();
}
function hideBar() {
  barhidden = true;
  showDate();
  $("#searchbar").attr("style", "display:none;");
}
function openSafari(){
  var search = document.getElementById("search");
  value = search.value;
  value = encodeURIComponent(value);
  document.getElementById("safari").href = "googlechrome://www.google.com/search?q="+value;
  setTimeout(function(){
    search.value = "";
  },5000);
}
function keyTap(key){
  var two;
  window.event?two = window.event.keyCode:key && (two=key.which);
  13 == two && searchIt();
}
function searchIt(){
  var search = document.getElementById("search");
  search.blur();
  var safari = document.getElementById("safari");
  safari.setAttribute("href", "googlechrome://www.google.com/search?q=" + search.value);
  setTimeout(function(){
    search.value = "";
  },5000);
  safari.click();
}