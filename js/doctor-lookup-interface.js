var Doctor = require('./../js/doctor-lookup.js').doctorModule;

$(document).ready(function() {
  $('#find-doctor').click(function() {

    var medicalIssue = $('#medicalissue').val();
    var doctorData = new Doctor();
    doctorData.getDoctors(medicalIssue, doctorData);
  });
});
