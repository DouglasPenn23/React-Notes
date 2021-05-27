// HTML Form Validation Can be done by JS.
// If a form field (fname) is empty, this function alerts a message
// & returns false, to prevent the form from being submitted.

function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
}

// Commented Version
// Creates function valled validate form
function validateForm(){
    // creates a variable x that is equal to 
    // . forms returns an HTMl collection listing all the <form> elements contained in the doc
    // Then returns a value of the selected form
    var x = document.forms["myForm"]["fname"].vagilue;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
}

// You can call this function when the form is submitted. 

// Example of a Validation on a form that checks to make sure the number
// submitted is between 1 & 10


// Basically just figures out conditions where number is not between 1 & 10
// Makes two variables text & x.
// If number is not between 1-10, text changes e.g. text= Not a number. 
// sets X equal to the inner text html to input id. 
 
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Can Validate Input</h2>

<p>Please input a number between 1 and 10:</p>

<input id="numb">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html> 
