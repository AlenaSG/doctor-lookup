var DoctorLookup = require('./../js/doctor-lookup.js').doctorModule;


var displayKelvinTemp = function(city, tempData) {
  $('#showKelvinTemp').text("Kelvin Temperature in  " + city + " is " + tempData + "  degrees.");
};




$(document).ready(function() {
  var currentDoctorObject = new DoctorLookup();


  $('#kelvin-temp').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemp(city, displayKelvinTemp);
  });

    });
