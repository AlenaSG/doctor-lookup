var apiKey = require('./../.env').apiKey;

function DoctorLookup(){
}
DoctorLookup.prototype.displayDoctors = function(dataLength, resultData) {
  var output = [];
  for (var i = 0; i < dataLength; i++) {
    output.push(resultData[i]);
    console.log("results data:" + output[i]);
  }
  return output;
};

DoctorLookup.prototype.getDoctors = function(medicalIssue, doctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      console.log(result.data[0]);
      console.log(result.data.length);
      console.log(result.meta);
      var doctorNames = doctor.displayDoctors(result.data.length, result.data);
      $('#showDoctors').empty();
      doctorNames.forEach(function(name) {
        $('#showDoctors').append('<li>' + name.profile.first_name + ' ' + name.profile.last_name + ", " + name.profile.title + '</li>');
        console.log(name.profile.first_name + ' ' + name.profile.last_name);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = DoctorLookup;
