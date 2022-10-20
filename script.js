const firstname = document.getElementById ("firstName");
const lastname = document.getElementById ("lastName");
const email = document.getElementById ("email");
const password = document.getElementById ("password");
const repeatPassword = document.getElementById ("repeatPassword");
const terms = document.getElementById ("terms");
const form = document.getElementById ("validationForm");

 

const validateTextFirstName = (input) => {
    if (input.value.trim() === "") {
         message.innerHTML = "First Name kan inte lämnas tomt.";
         console.log("First Name kan inte lämnas tomt.");
        
    }
    if (input.value.length < 2) { 
        message2.innerHTML = "First Name måste innehålla minst två tecken.";
        console.log("First Name måste innehålla minst två tecken.");
        return false
    }
    return true
    
}

const validateTextLastName = (input) => {
    if (input.value.trim() === "") {
    message3.innerHTML = "Last Name kan inte lämnas tomt.";
   console.log("Last Name kan inte lämnas tomt.");
   

    }
    if (input.value.length < 2 ) {
        message4.innerHTML = "Last Name måste innehålla minst två tecken.";
        console.log("Last Name måste innehålla minst två tecken.");
        return false
    }
    return true
    
}

const validateEmail = (email) => {

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if (email.value.trim() === ""){
        messageEmail.innerHTML = "Du måste skriva in en email address!";
        console.log("Du måste skriva in en email address!");
        return false;
    }
    else if (!regEx.test(email.value)) {
        messageEmail2.innerHTML = "Du har inte inkluderat alla de tecken som krävs för en giltig email address";
        console.log("Du har inte inkluderat alla de tecken som krävs för en giltig email address");
        return false;
    }
    else {
        return true;
        
    }

}


const validatePassword = (input) => {

    // const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const regExPassword = /^\d$/
  
     if(input.value.trim() === ""){
        console.log("Ditt lösenord kan inte vara tomt");
        messagePassword.innerHTML = ("Ditt lösenord kan inte vara tomt");
        return false;
     } 
     else if (input.value.length < 6) {
        console.log("Ditt lösenord måste innehålla minst 6 tecken!");
        messagePassword2.innerHTML = ("Ditt lösenord måste innehålla minst 6 tecken!");
        return false;
     }
    //  else if (!regExPassword.test (password.value)) {
    //     console.log("Ditt lösenord innehåller inte rätt tecken!")
    //     return false;
    // }
     else if (password.value !== repeatPassword.value){
        console.log("Dina lösenord måste stämma överens");
        messagePassword3.innerHTML = ("Dina lösenord måste stämma överens");
        return false;
     }
     else{
        return true;
     }

}

    const validateTerms = (input) => {
    
        if (!input.checked) {
            console.log("Du måste kryssa i boxen!")
            messageTerms.innerHTML = "Du måste kryssa i boxen!"
            return false
        }
        else {
            return true
        }
    
    }

const error = () => {
    errorMessage.classlist.remove("d.none");
    return false;
}


const success = () => {
    console.log("Du har skapat ett formulär!")
    errorMessage.classList.add("d-none");
    messageUser.innerHTML = ("Du har skapat ett formulär! ")
    const user = {
        firstname: firstname.value, 
        lastname: lastname.value,
        email: email.value,
        password: password.value
    }
    console.log(user)
    return true;
}


form.addEventListener( "submit", (e) =>  {
    e.preventDefault ();
    
    if (validateTextFirstName (firstname) && 
        validateTextLastName (lastname) && 
        validateEmail (email) &&
        validatePassword (password) &&
        validateTerms (terms)) {
            console.log('Du har skapat ett formulär!')
        return success();
        } else {
            return error()
        }
           
})

