const validateEmail = (email) => {
    if(email === ""){
        alert("Email cannot be empty");
        return false;
    }

    const re = /\S+@\S+\.\S+/;
    if(re.test(email)){
        return true;
    }
    alert("Email should be in proper format");
    return false;
}

const validatePassword = (password, confirmpassword) => {
    if(password === ""){
        alert("Password cannot be empty");
        return false;
    }
    if(confirmpassword === ""){
        alert("Confirm Password cannot be empty");
        return false;
    }

    if (password === confirmpassword) {
        return true;
    }
    alert("Password and Confirm Password should be same");
    return false;
}

const validateName = (name) => {
    if(name === ""){
        alert("Name cannot be empty");
        return false;

    }

    const re = /^[a-zA-Z]+$/;
    if(re.test(name)){
        return true;
    }
    alert("Name should be in alphabets");
    return false;
}

const validatePhone = (phone) => {
    const re = /^[0-9]+$/;
    if(re.test(phone)){
        return true;
    }
    alert("Phone should be in numbers");
    return false;
}


export { validateEmail, validatePassword, validateName, validatePhone };