const firstname = document.getElementById ("firstName")
const lastname = document.getElementById ("lastName")
const email = document.getElementById ("email")
const password = document.getElementById ("password")
const repeatPassword = document.getElementById ("repeatPassword")
const terms = document.getElementById ("terms")
const form = document.getElementById ("validationForm")
// const message = document.getElementById ("#message")



const validateText = (input) => {
    if (input.value.trim() === "") {
    // message.innerHTML = `Värdet ${input.value} är för lågt.`;
   console.log("Du kan inte lämna fältet tomt!")
   return false
   error (input)
    }
    else if (input.value.length < 2) {
        console.log("Du måste ange ett namn med minst 2 bokstäver")
        return false
    }
    return true
    
}

const validateEmail = (email) => {

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if (email.value.trim() === ""){
        console.log("din mailadress kan inte vara tom")
        return false;
    // return error (email)
    }
    else if (!regEx.test (email.value)) {
        console.log("du m¨ste ha en giltig email")
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
        console.log("Ditt lösenord kan inte vara tomt")
        return false;
     } 
     else if (input.value.length < 6) {
        console.log("Ditt lösenord måste innehålla minst 6 tecken!")
        return false;
     }
    //  else if (!regExPassword.test (password.value)) {
    //     console.log("Ditt lösenord innehåller inte rätt tecken!")
    //     return false;
    // }
     else if (password.value !== repeatPassword.value){
        console.log("Dina lösenord måste stämma överens")
        return false;
     }
     else{
        return true;
     }

}

    const validateTerms = (input) => {
    
        if (!input.checked) {
            console.log("Du måste kryssa i boxen!")
            //return error (input)
            return false
        }
        else {
            //return success(input)
            return true
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
        validateTerms (terms)) 
        {
        let test = success ()
        const user = {
            firstname: firstname.value, 
            lastname: lastname.value,
            email: email.value,
            password: password.value
        }
        console.log("Du har skapat ett formulär!")
        
        console.log(user)
        }
    
   


        
        
        
})