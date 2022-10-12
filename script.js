function validate() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let iVC= document.getElementById('i-v-c').checked;
  let error = false;
  //first name condition
  if (firstName.length >= 2) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
    error = true;
  }

  //last name condition
  if (lastName.length >= 2) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
    error = true;
  }
 
  //email condition
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") >= 1 &&
    email.lastIndexOf(".") < email.length - 2
  ) 
  {
    document.getElementById("valid-email").style.display = "block";
    document.getElementById("invalid-email").style.display = "none";
  } 
  else {
    document.getElementById("invalid-email").style.display = "block";
    document.getElementById("valid-email").style.display = "none";
    error = true;
  }

  //city condition
  if(city.length>=3){
    document.getElementById("valid-city").style.display = "block";
    document.getElementById("invalid-city").style.display = "none";
  } else {
    document.getElementById("invalid-city").style.display = "block";
    document.getElementById("valid-city").style.display = "none";
    error = true;
  }

  //isNaN = it checks output is number or Not a number
  //!isNaN = it returns true if there is a number
  //zip condition
  let zipCode = parseInt(zip);
  if(zip.length==6 && !isNaN(zipCode)){
    document.getElementById("valid-zip").style.display = "block";
    document.getElementById("invalid-zip").style.display = "none";
  } else {
    document.getElementById("invalid-zip").style.display = "block";
    document.getElementById("valid-zip").style.display = "none";
    error = true;
  }

  //state condition
  if(state != 'none'){
    document.getElementById("valid-state").style.display = "block";
    document.getElementById("invalid-state").style.display = "none";
  } else {
    document.getElementById("invalid-state").style.display = "block";
    document.getElementById("valid-state").style.display = "none";
    error = true;
  }

  // terms and condition check condition
  if(iVC){
    document.getElementById("ivc-invalid").style.display = "none";
  }
  else{
    document.getElementById("ivc-invalid").style.display = "block";
    error = true;
  }

  //validation on submit form
  // if no errors in form 
  // 1- reset the form, clear all valid and invalid messages
  // 2- Alert popup - your form has been submitted successfully
  if(!error){
    alert('Your form has been submitted')


    // first way to reset form
    // let firstName = document.getElementById("first-name").value = ''
    // let lastName = document.getElementById("last-name").value = ''
    // let email = document.getElementById("email").value = ''
    // let city = document.getElementById("city").value = ''
    // let state = document.getElementById("state").value = ''
    // let zip = document.getElementById("zip").value = ''
    // let iVC= document.getElementById('i-v-c').checked = ''

    //second way to reset form
    document.getElementById('form-registration').reset();



    let validFeedback = document.getElementsByClassName('valid-feedback')
    for(i=0; i<validFeedback.length; i++){
      validFeedback[i].style.display = 'none'
    }
    let invalidFeedback = document.getElementsByClassName('invalid-feedback')
    for(i=0; i<invalidFeedback.length; i++){
      invalidFeedback[i].style.display = 'none'
    }
    
  }


}
