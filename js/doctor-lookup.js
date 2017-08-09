var apiKey = require('./../.env').apiKey;

function DoctorLookup(){
}
DoctorLookup.prototype.displayDoctors = function(resultLength, resultData) {
  var output = [];
  for (var i = 0; i < resultLength; i++) {
    output.push(resultData[i]);
    console.log("resultData:" + output[i]);
  }
  return output;
};

DoctorLookup.prototype.getDoctors = function(medicalIssue, doctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      console.log(result.data.length);
      var doctorContacts = doctor.displayDoctors(result.data.length, result.data);
      $('#showDoctors').empty();
      doctorContacts.forEach(function(contact) {
        $('#showDoctors').append('<li>' + contact.profile.first_name + ' ' + contact.profile.last_name + ", " + contact.profile.title + '</li>');
        console.log(contact.profile.first_name + ' ' + contact.profile.last_name);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = DoctorLookup;
