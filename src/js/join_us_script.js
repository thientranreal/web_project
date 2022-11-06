$(document).ready(function() {
// Regular Expression =======================================================
let regexEmail = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
let regexPass = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
let regexUsername = new RegExp(/^[a-zA-Z0-9]+$/);
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

    // show icon eye for show and retype password
    $('#password, #r-password').on('input', function() {
        let css_selector = `#${$(this).attr('id')}+.underline+.eye`;
        if ($(this).val() == '') {
            $(css_selector).hide();
        }
        else {
            $(css_selector).show();
        }
    });
    // change icon eye to eyeslash and the opposite
    $('.eye').on('click', function() {
        let eye_slash = '<i class="fa-regular fa-eye-slash"></i>';
        let eye = '<i class="fa-regular fa-eye"></i>';
        // user wants to see password
        if ($(this).html() == eye) {
            $(this).html(eye_slash);
            // eye for password
            if ($(this).attr('id') == 'eye1') {
                $('#password').attr('type','text');
            }
            // eye for retype password
            else if ($(this).attr('id') == 'eye2') {
                $('#r-password').attr('type','text');
            }
        }
        // user does not want to see password
        else if($(this).html() == eye_slash) {
            $(this).html(eye);
            // eye for password
            if ($(this).attr('id') == 'eye1') {
                $('#password').attr('type','password');
            }
            // eye for retype password
            else if ($(this).attr('id') == 'eye2') {
                $('#r-password').attr('type','password');
            }
        }
    });

    $('#submit-reset > input[value=Submit]').on('click', function() {
        let inputs = $('#join_us-form-wrapper form > input');
        // check username is valid
        let input_tmp = inputs[0];
        if (!regexUsername.test(input_tmp.value)) {
            alert('Invalid Username.');
            input_tmp.focus();
            return;
        }
        // check password is valid
        input_tmp = inputs[1];
        if (!regexPass.test(input_tmp.value)) {
            alert('Invalid Password. Minimum eight characters, at least one letter and one number.');
            input_tmp.focus();
            return;
        }
        // check retype password is correct
        input_tmp = inputs[2];
        if (input_tmp.value != inputs[1].value) {
            alert('Password does not match.');
            input_tmp.focus();
            return;
        }
        // check email is valid
        input_tmp = inputs[3];
        if (!regexEmail.test(input_tmp.value)) {
            alert('Invalid Email.');
            input_tmp.focus();
            return;
        }
        // check username or email is already existed
        for (let user of users) {
            if (user.username == inputs[0].value) {
                alert('Username is already in use. Please choose another name.');
                inputs[0].focus();
                return;
            }
            if (user.email == inputs[3].value) {
                alert('Email is already in use. Please choose another email.');
                inputs[3].focus();
                return;
            }
        }
        // add new user to local storage
        users.push(new User('', inputs[0].value, inputs[1].value, inputs[3].value));
        localStorage.setItem('accounts', JSON.stringify(users));
        // reset input field
        for (let inp of inputs) {
            inp.value = '';
        }
        alert('Success.');
        window.location.replace('./index.html');
    });
// End sign Up Account ===========================================================
});