$(document).ready(function() {
// intialize=============================================================
    $('#modal-container, #modal-sign-in').hide();
    let randomNum;
    if (active != undefined) {
        $('.gap span').html(`Hello ${active}`);
        $('#show-sign-in-res').html('Log out');
        $('#show-sign-in').children().html('Log out');
    }
//======================================================================

// Play game===============================================================
    let checkAnswer = function() {
        if ($(this).html() == question_list[randomNum].answer) {
            $(this).addClass('correct');
        }
        else {
            $(this).addClass('wrong');
        }
    }
    
    let startGame = function() {
        // random number for random access to question_list
        randomNum = Math.floor(Math.random() * question_list.length);
        $('#question-img').attr('src', question_list[randomNum].img_url);
        let op;
        // add event listener for options
        let options = $('.option');
        for (let i = 0; i < options.length; i++) {
            op = `op${i + 1}`;
            options[i].innerHTML = question_list[randomNum][op];
        }
        options.on('click', checkAnswer);
    }
    
    let playGame = function() {
        $('#guessing-game').css('display', 'block');
        $('.option').removeClass('correct').removeClass('wrong');
        startGame();
    }

    $('#trochoi').on('click', playGame);
    $('#trochoires').on('click', function() {
        playGame();
        close_menu();
    });
// End play game=================================================================

// On / off sider bar====================================================
    let close_menu = function() {
        $('.modal-sidebar').animate({ right: '-310px' }, function() {
            $(this).parent().hide();
        });
    }
    let show_menu = function() {
        $('#modal-container').show(1, function() {
            $(this).find('.modal-sidebar').animate({ right: '0px' });
        });
    }

    $('#menu-close').on('click', close_menu);
    $('#menu-bars').on('click', show_menu);
// End on / off sider bar=================================================

// On / off sign in========================================================
    function resetFormLogin() {
        $('#pass').val('').css('border-bottom', 'solid 1px #f5f5f5');
        $('#email').val('').css('border-bottom', 'solid 1px #f5f5f5');
    }

    let close_signin = function() {
        $('#modal-sign-in').slideUp();
        resetFormLogin();
    }

    function signInLogOut() {
        let sign_in = $('#show-sign-in a');
        let sign_in_res = $('#show-sign-in-res');
        if (sign_in.html() == 'Sign In' && sign_in_res.html() == 'Sign In') {
            $('#modal-sign-in').slideDown();
        }
        else {
            sign_in.html('Sign In');
            sign_in_res.html('Sign In');
            localStorage.removeItem('active');
            $('.gap span').html('');
        }
    }

    // add event listener
    $('#show-sign-in').on('click', signInLogOut);
    $('#show-sign-in-res').on('click', function() {
        close_menu();
        signInLogOut();
    });

    $('#modal-sign-in').on('click', close_signin);

    $('#modal-sign-in-wrapper').on('click', function(event) {
        event.stopPropagation();
    });
    $('#login-form > span, #a-join-us, #join-us-res').on('click', function() {
        window.location.replace('./join_us.html');
    });
// End on / off sign in========================================================

// Validate sign in ==========================================================
    $('#modal-sign-in form input:last-child').on('click', function() {
        let pass = $('#pass');
        let userinput = $('#email');

        for (let user of users) {
            if ( (user.username == userinput.val() || user.email == userinput.val()) && user.password == pass.val()) {
                // say Hello user and change sign in to logout
                $(this).closest('#modal-sign-in').siblings('.gap').children().html(`Hello ${user.username}`);
                $(this).closest('#modal-sign-in').siblings('#navbar').find('#show-sign-in').children().html('Log out');
                $(this).closest('#modal-sign-in').siblings('#modal-container').find('#show-sign-in-res').html('Log out');
                localStorage.setItem('active', user.username);
                close_signin();
                return;
            }
        }
        pass.css('border-bottom', 'solid 2px rgb(246, 66, 66)');
        userinput.css('border-bottom', 'solid 2px rgb(246, 66, 66)');
        userinput.focus();
    });

    let inputChange = function() {
        if ($(this).val() == '') {
            $(this).css('border-bottom', 'solid 1px #f5f5f5');
        }
        else {
            $(this).css('border-bottom', 'solid 2px rgb(131,58,180)');
        }
    }
    $('#pass').on('input', inputChange);
    $('#email').on('input', inputChange);
// End validate sign in ======================================================

// Show eye for password input ===============================================
    $('#pass').on('input', function() {
        let css_selector = '#pass+.eye';
        if ($(this).val() == '') {
            $(css_selector).hide();
        }
        else {
            $(css_selector).show();
        }
    });

    $('.eye').on('click', function() {
        let eye_slash = '<i class="fa-regular fa-eye-slash"></i>';
        let eye = '<i class="fa-regular fa-eye"></i>';
        // user wants to see password
        if ($(this).html() == eye) {
            $(this).html(eye_slash);
            // eye for password
            $('#pass').attr('type','text');
        }
        // user does not want to see password
        else if($(this).html() == eye_slash) {
            $(this).html(eye);
            // eye for password
            $('#pass').attr('type','password');
        }
    });
// End show eye for password input ===========================================
});