const firstname = document.getElementById ("firstName")
const lastname = document.getElementById ("lastName")
const email = document.getElementById ("email")
const password = document.getElementById ("password")
const repeatPassword = document.getElementById ("repeatPassword")
const terms = document.getElementById ("terms")
const form = document.getElementById ("validationForm")



const validateText = (input) => {
    if (input.value.trim() === "") {
    message.innerHTML = `Värdet ${input.value} är för lågt.`;
   console.log("Du kan inte lämna fältet tomt!")
   error (input)
    }
    else if (input.value.length <= 2) {
        console.log("Du måste ange ett namn med minst 2 bokstäver")
    }
    
}

const validateEmail = (email) => {

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if (email.value.trim() === ""){
    console.log("din mailadress kan inte vara tom")
    return error (email)
    }
    else if (!regEx.test (email.value)) {
        
    }
    else {

    }

}



const validatePassword = (input) => {

//    const regExPassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
     if(input.value.trim() === ""){
        console.log("Ditt lösenord kan inte vara tomt")
     } 
     else if (input.value.length < 6) {
        console.log("Ditt lösenord måste innehålla minst 6 tecken!")
     }
     else if (password.value !== repeatPassword.value){
        console.log("Dina lösenord måste stämma överens")
     }
     else{
        // console.log("success")
     }

    }

    const validateTerms = (input) => {
    
        if (!terms.checked) {
            console.log("Du måste kryssa i boxen!")
            return error (input)
        }
        else {
            return success(input)
        }
    
    }


const success = (input) => {
    return true;
}

const error = (input) => {
    return false;
}
















form.addEventListener( "submit", (e) =>  {
    e.preventDefault ();
   
    validateText (firstname)
    validateText (lastname)
    validateEmail (email)
    validatePassword (password)
    validateTerms (terms)

    if (validateText (firstname) && 
        validateText (lastname) && 
        validateEmail (email) &&
        validatePassword (password) &&
        validateTerms (terms)
        ) {
        console.log(first)("Grattis du har fyllt i formuläret korrekt!")
    }





})

const user = []






