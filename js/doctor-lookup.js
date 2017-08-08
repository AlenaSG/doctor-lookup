var apiKey = require('./../.env').apiKey;

DoctorLookup = function(){
};



DoctorLookup.prototype.getTemp = function(city, displayKelvinTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayKelvinTemp(city, response.main.temp);
  }).fail(function(error) {
    $('#showKelvinTemp').text(error.responseJSON.message);
  });
};






exports.doctorModule = DoctorLookup;
