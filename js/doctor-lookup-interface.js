var DoctorLookup = require('./../js/doctor-lookup.js').doctorModule;


var displayDoctors = function(data) {
  // if (docData.length<1){
  //   $('#showDoctors').text("no doctors found");
  // } else {
    $('#showDoctors').empty();
    data.forEach(function(doctor){
    $('#showDoctors').append('<li>' + "call " + doctor.profile.last_name + '</li>');

  });
};


$(document).ready(function() {


  $('#find-doctor').click(function() {
    var medicalIssue = $('#medicalIssue').val();
    //$('#medicalIssue').val("");
    var docObject = new DoctorLookup();

    docObject.getDoctors(medicalIssue);
  });

    });
