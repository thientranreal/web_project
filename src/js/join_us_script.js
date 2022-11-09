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
        if ($(this).val() == '') {
            $(this).next().next().hide();
        }
        else {
            $(this).next().next().show();
        }
    });
    // change icon eye to eyeslash and the opposite
    $('.eye').on('click', function() {
        let eye_slash = '<i class="fa-regular fa-eye-slash"></i>';
        let eye = '<i class="fa-regular fa-eye"></i>';
        // user wants to see password
        if ($(this).html() == eye) {
            $(this).html(eye_slash);
            $(this).prev().prev().attr('type','text');
        }
        // user does not want to see password
        else if($(this).html() == eye_slash) {
            $(this).html(eye);
            $(this).prev().prev().attr('type','password');
        }
    });

    $('#submit-reset > input[value=Submit]').on('click', function() {
        let inputs = $(this).parent().siblings('input');
        // check username is valid
        let input_tmp = inputs.eq(0);
        if (!regexUsername.test(input_tmp.val()) ) {
            alert('Invalid Username.');
            input_tmp.focus();
            return;
        }
        // check password is valid
        input_tmp = inputs.eq(1);
        if (!regexPass.test(input_tmp.val()) ) {
            alert('Invalid Password. Minimum eight characters, at least one letter and one number.');
            input_tmp.focus();
            return;
        }
        // check retype password is correct
        input_tmp = inputs.eq(2);
        if (input_tmp.val() != inputs.eq(1).val() ) {
            alert('Password does not match.');
            input_tmp.focus();
            return;
        }
        // check email is valid
        input_tmp = inputs.eq(3);
        if (!regexEmail.test(input_tmp.val()) ) {
            alert('Invalid Email.');
            input_tmp.focus();
            return;
        }
        // check username or email is already existed
        for (let user of users) {
            if (user.username == inputs.eq(0).val() ) {
                alert('Username is already in use. Please choose another name.');
                inputs.eq(0).focus();
                return;
            }
            if (user.email == inputs.eq(3).val() ) {
                alert('Email is already in use. Please choose another email.');
                inputs.eq(3).focus();
                return;
            }
        }
        // add new user to local storage
        users.push(new User('', inputs.eq(0).val(), inputs.eq(1).val(), inputs.eq(3).val()) );
        localStorage.setItem('accounts', JSON.stringify(users));
        localStorage.setItem('active', inputs.eq(0).val() );
        // reset input field
        for (let inp of inputs) {
            $(inp).val('');
        }
        alert('Success.');
        window.location.replace('./index.html');
    });
// End sign Up Account ===========================================================
});