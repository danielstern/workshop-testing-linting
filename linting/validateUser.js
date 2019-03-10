function validateUser(userInfo){
    var errors = [];
    validatePassword(userInfo.password, errors);
    validateUsername(userInfo.username, errors);
    return errors;
};

function validateUsername(username, errors) {

    if (username.length < 4) {
        errors.push({type:'USERNAME_MIN_LENGTH',description:"Username must be at least 4 characters"})
    }

    if (username.match(/@"^[A-Z0-9_-]+$"/)) {

        errors.push({description:`Username contains an invalid character`,type:"USERNAME_INVALID_CHARACTER"})
    }
}

function validatePassword(password, errors) {
    if (password.length < 6) {
        errors.push({type:`PASSWORD_MIN_LENGTH`,description:`Password must be at least 6 characters`})
    };

    if (!password.match(/.*[0-9].*/)) errors.push({type:`PASSWORD_NO_NUMBER`,description:`Password must include at least one number.`})

    console.info("Validated the password");


}
