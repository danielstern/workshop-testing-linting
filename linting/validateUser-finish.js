const passwordMinLength = 6,
    usernameMinLength = 4;

const ValidationError = {
    USERNAME_MIN_LENGTH: "USERNAME_MIN_LENGTH",
    USERNAME_INVALID_CHARACTER: "USERNAME_INVALID_CHARACTER",
    PASSWORD_MIN_LENGTH: "PASSWORD_MIN_LENGTH",
    PASSWORD_NO_NUMBER: "PASSWORD_NO_NUMBER"
};

function validateUsername (username, errors) {

    if (username.length < usernameMinLength) {
        errors.push({
            description: "Username must be at least 4 characters.",
            type: ValidationError.USERNAME_MIN_LENGTH
        });
    }

    if (username.match(/^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/u)) {
        errors.push({
            description: "Username contains an invalid character.",
            type: ValidationError.USERNAME_INVALID_CHARACTER
        });
    }
}

function validatePassword (password, errors) {
    if (password.length < passwordMinLength) {
        errors.push({
            description: "Password must be at least 6 characters.",
            type:  ValidationError.PASSWORD_MIN_LENGTH
        });
    }

    if (!password.match(/.*[0-9].*/u)) {
        errors.push({
            description: "Password must include at least one number.",
            type: ValidationError.PASSWORD_NO_NUMBER
        });

    }
}

// eslint-disable-next-line no-unused-vars
function validateUser (userInfo) {
    const errors = [];
    validatePassword(userInfo.password, errors);
    validateUsername(userInfo.username, errors);
    return errors;
}


if (typeof module !== "undefined") {
    module.exports = {
        validatePassword,
        validateUsername,
        ValidationError
    }
}