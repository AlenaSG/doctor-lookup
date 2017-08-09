var DoctorLookup = require('./../js/doctor-lookup.js').doctorModule;

$(document).ready(function() {
  $('#find-doctor').click(function() {

    var medicalIssue = $('#medicalIssue').val();
    var doctor = new DoctorLookup();
    doctor.getDoctors(medicalIssue, doctor);
  });
});
