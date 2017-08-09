var apiKey = require('./../.env').apiKey;

function DoctorLookup(){
}



DoctorLookup.prototype.getDoctors = function(medicalIssue, showData) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    //showData(result.data);
//showData
    console.log(result);
    console.log(JSON.stringify(result));
    console.log(result.data);
  }).fail(function(error) {
console.log("epic fail");
//alert("no doctor")
    //$('#showDoctors').text(error.responseJSON.message);

  });

};



exports.doctorModule = DoctorLookup;
