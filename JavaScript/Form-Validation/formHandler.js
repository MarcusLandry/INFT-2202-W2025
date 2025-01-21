//Validate From Informatio 
//1. Grab the form the DOM
//2. Iterate through all the elements and ensure there are no empty fields
// 

let registrationForm = document.getElementById("registrationForm")

registrationForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(eventObj) {
    eventObj.preventDefault();
    console.dir(eventObj.target)
    let formInputs = eventObj.target.elements
    console.log(formInputs.inputEmail4.value)
    // Email validation
    if (formInputs.inputEmail4.includes("@") || formInputs[inputEmail4].includes(".")) {
        alert("Email needs to have @ and .")
    }
    // Phone #, Password, ZIP code
}