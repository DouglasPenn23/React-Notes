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