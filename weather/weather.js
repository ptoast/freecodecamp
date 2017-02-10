var temp = 0;
var metric = false;
var loc = '';

$(document).ready(function(){

  $('#s_weather').click(function(e) {
    e.preventDefault();
    var zip = $('#zip_code').val();
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=ad75be96f1a700e43f904674b3eaa49d&callback=parseWeather',
      dataType: 'jsonp'
    });
  });

  $('#t_units').click(function(e) {
    e.preventDefault();
    metric = !metric;
    if (metric) {
      $('#t_units').html("°C");
    } else {
      $('#t_units').html("°F");
    }
    $('#temperature').html(getTemp());
  });

  $('#my_location').click(function(e) {
    e.preventDefault();
    getLocation();
  });
})

function parseWeather(data){
  temp = data.main.temp;
  loc = data.name;
  $('#location').html(loc);
  $('#temperature').html(getTemp());
  $('#condition').html(data.weather[0].description);
}

function getTemp(){
  if (metric) {
    return Math.round((temp - 32) / 1.8) + "°C";
  } else {
    return Math.round(temp) + "°F";
  }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(usePosition);
    }
}

function usePosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=ad75be96f1a700e43f904674b3eaa49d&callback=parseWeather',
    dataType: 'jsonp'
  });
}
