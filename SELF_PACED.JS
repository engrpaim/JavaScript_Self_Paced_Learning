let fName;
let lName;
let wName;



againButton.style.display = "none";


document.getElementById("submitButton").onclick = function () {
    fName = document.getElementById("firstName").value;
    lName = document.getElementById("lastName").value;
    wName = fName + lName;
    if (fName !== "") {
        if (lName !== "") {
        
            console.log(fName);
            document.getElementById("userName").innerHTML = "Hello " + fName + " " + lName + "!";
            document.getElementById("luserName").innerHTML = "";
            document.getElementById("errorMessage").innerHTML = "";
            firstName.style.display = "none";
            lastName.style.display = "none";
            submitButton.style.display = "none";
            againButton.style.display = "block";
        }
        else {
            document.getElementById("errorMessage").innerHTML = "Please enter your last name.";
        }
       
    }
    else if(fName === ""  && lName === "" ){
        document.getElementById("errorMessage").innerHTML = "Please Enter your first name & lastname ";
    }
    else {
        document.getElementById("errorMessage").innerHTML = "Please Enter your first name ";
        
    }
    
}

againButton.onclick = function () {
    
    document.getElementById("userName").innerHTML = "Enter Firstname";
    document.getElementById("luserName").innerHTML = "Enter Surname";
    firstName.value = "";
    lastName.value = "";
    firstName.style.display = "block";
    lastName.style.display = "block";
    submitButton.style.display = "block";
    againButton.style.display = "none";
}