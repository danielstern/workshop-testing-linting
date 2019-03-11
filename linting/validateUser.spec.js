const {
    validatePassword,
    validateUsername,
    ValidationError
} = require('./validateUser-finish');

describe("User validation",()=>{
    let errors;
    beforeEach(()=>{
        errors = [];
    });

    describe("Username validation",()=>{
        it("Should accept a valid username",()=>{
           validateUsername("Daniel");
           expect(errors.length).toBe(0);
        });
        it("Should reject usernames that have invalid characters ",()=>{
            let invalidCharacters = [`#`,`$`,`%`];
            for (let char of invalidCharacters) {
                errors = [];
                validateUsername(`Bob${char}`,errors);
                expect(errors.map(error=>error.type)).toContain(ValidationError.USERNAME_INVALID_CHARACTER);
            }
        });
        it("Should reject usernames that are too short",()=>{
            validateUsername("Bob",errors);
            expect(errors.map(error=>error.type)).toContain(ValidationError.USERNAME_MIN_LENGTH);
        });
    });

    describe("Password validation",()=>{
        it("Should reject a password that's too short",()=>{
            validatePassword("42",errors);
            expect(errors.map(error=>error.type)).toContain(ValidationError.PASSWORD_MIN_LENGTH);
        });

        it("Should reject a password without a number",()=>{
            validatePassword("Password",errors);
            expect(errors.map(error=>error.type)).toContain(ValidationError.PASSWORD_NO_NUMBER);
        })
    })
});