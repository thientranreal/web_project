$(document).ready(function() {
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

    // $('#submit-reset > input[value=Submit]').on('click', function() {

    // });
// End sign Up Account ===========================================================
});