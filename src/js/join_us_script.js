$(document).ready(function() {
// Regular Expression =======================================================
let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let regexPass = new RegExp('.{8,}$');
let regexUsername = new RegExp('^[a-zA-Z0-9]+$');

// End Regular Expression ===================================================
// Sign Up Account ===========================================================
    let checkInputData = function() {
        //check input is blank
        if ($(this).val().trim() == '') {
            $(this).css('background-color', 'rgb(246 66 66 / 70%)');
        }
        else {
            $(this).css('background-color', '');
        }
    }

    $('#join_us-form-wrapper form > input').on('focusout', checkInputData);

    $('#submit-reset > input[value=Submit]').on('click', function() {
        let inputs = $('#join_us-form-wrapper form > input');
        // check username is valid
        if (!regexUsername.test(inputs[0].value)) {
            alert('Invalid Username.');
            return;
        }
        // check if a user exists or not
        if (localStorage[inputs[0].value]) {
            alert('User is already existed.');
            return;
        }
        // check password is valid
        if (!regexPass.test(inputs[1].value)) {
            alert('Invalid Password. Minimum eight characters, at least one letter and one number.');
            return;
        }
        // check retype password is correct
        if (!inputs[1].value == inputs[2].value) {
            alert('Password does not match.');
            return;
        }
        // check email is valid
        if (!regexEmail.test(inputs[3].value)) {
            alert('Invalid Email.');
            return;
        }
        // add new user to local storage
        localStorage.setItem(inputs[0].value, new User('', inputs[0].value, inputs[1].value, inputs[3].value));
    });
// End sign Up Account ===========================================================
});