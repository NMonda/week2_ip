let malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalenames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let dayofweek =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


function calc() {

var DD = document.getElementById("Day").value;
var year = document.getElementById("Year").value;
var MM = document.getElementById("Month").value;
var male = document.getElementById("Man").checked;
var female = document.getElementById("Woman").checked;


var YY = year.slice(0, 2);
var YY = year.slice(2, 4);
var CC = (YY - 1) / 100 + 1;
var output= parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
  alert("PLEASE INSERT A VALID MONTH");

} else if (DD < 1 || DD > 31) {
  alert("PLEASE INSERT A VALID DAY");
}


  
if (female) {
  if (output == 1) {
    document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Monday, your  Akan name is " + femalenames[1]);
} else if (output == 2) {
  document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Tuesday, your Akan name is " + femalenames[2]);
} else if (output == 3) {
  document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Wednesday, your  Akan name is " + femalenames[3]);
} else if (output == 4) {
  document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Thursday, your  Akan name is " + femalenames[4]);
} else if (output == 5) {
  document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Friday, your  Akan name is " + femalenames[5]);
} else if (output == 6) {
  document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Saturday, your  Akan name is " + femalenames[6]);
} else if (output == 0) {
  document.getElementById("output").innerHTML =
    alert("Hey Missy!! You were born on a Sunday, your  Akan name is " + femalenames[0]);
}
}

 

else if (male) {
  if (output == 1) {
    document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Monday, your  Akan name is " + malenames[1]);
} else if (output == 2) {
  document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Tuesday, your  Akan name is " + malenames[2]);
} else if (output == 3) {
  document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Wednesday, your  Akan name is " + malenames[3]);
} else if (output == 4) {
  document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Thursday, your  Akan name is " + malenames[4]);
} else if (output == 5) {
  document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Friday, your  Akan name is " + malenames[5]);
} else if (output == 6) {
  document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Saturday, your  Akan name is " + malenames[6]);
} else if (output == 0) {
  document.getElementById("output").innerHTML =
    alert("Hey Buddy!! You were born on a Sunday, your  Akan name is " + malenames[0]);
}
} else {
alert("INVALID INPUT,PLEASE INSERT YOUR DETAILS BELOW!");
}
}  



(document).ready(function () {

('#Form').submit(function (a) {
  
  a.refresh();

});
});