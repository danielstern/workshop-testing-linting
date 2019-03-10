const passwordMinLength = 6,
    usernameMinLength = 4;

function validateUsername (username, errors) {

    if (username.length < usernameMinLength) {
        errors.push({
            description: "Username must be at least 4 characters",
            type: "USERNAME_MIN_LENGTH"
        });
    }

    if (username.match(/@"^[A-Z0-9_-]+$"/u)) {
        errors.push({
            description: "Username contains an invalid character",
            type: "USERNAME_INVALID_CHARACTER"
        });
    }
}

function validatePassword (password, errors) {
    if (password.length < passwordMinLength) {
        errors.push({
            description: "Password must be at least 6 characters",
            type: "PASSWORD_MIN_LENGTH"
        });
    }

    if (!password.match(/.*[0-9].*/u)) {
        errors.push({
            description: "Password must include at least one number.",
            type: "PASSWORD_NO_NUMBER"
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

