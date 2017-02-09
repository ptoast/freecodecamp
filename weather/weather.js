$(document).ready(function(){

  $('#s_weather').click(function(e) {
    e.preventDefault();
    var zip = $('#zip_code').val();
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=ad75be96f1a700e43f904674b3eaa49d&callback=parseWeather',
      dataType: 'jsonp'
    });
  });
})

function parseWeather(data){
  $('#location').html('Location >> ' + data.name);
  $('#temperature').html('Temp >> ' + data.main.temp + "&degF");
  $('#condition').html('Conditions >> ' + data.weather[0].description);
}
