$(document).ready(function() {
// intialize=============================================================
    close_menu_fast();
    $('#modal-sign-in').hide();
    let randomNum;
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
    function close_menu_fast() {
        $('.modal-sidebar').animate({ right: '-310px' });
        $('#modal-container').hide();
    }
    let close_menu = function() {
        $('.modal-sidebar').animate({ right: '-310px' });
        $('#modal-container').hide(600);
    }
    let show_menu = function() {
        $('#modal-container').show();
        $('.modal-sidebar').animate({ right: '0px' });
    }

    $('#menu-close').on('click', close_menu);
    $('#menu-bars').on('click', show_menu);
// End on / off sider bar=================================================

// On / off sign in========================================================
    function resetFormLogin() {
        $('#pass').val('').css('border-bottom', 'solid 1px #f5f5f5');
        $('#email').val('').css('border-bottom', 'solid 1px #f5f5f5');
    }

    let show_signin = function() {
        $('#modal-sign-in').slideDown();
    }

    let close_signin = function() {
        $('#modal-sign-in').slideUp();
        resetFormLogin();
    }

    // add event listener
    $('#show-sign-in').on('click', show_signin);
    $('#show-sign-in-res').on('click', function() {
        close_menu();
        show_signin();
    });
    $('#modal-sign-in').on('click', close_signin);

    $('#modal-sign-in-wrapper').on('click', function(event) {
        event.stopPropagation();
    });
    $('#login-form > span, #a-join-us').on('click', function() {
        window.location.replace('./join_us.html');
    });
// End on / off sign in========================================================

// Validate sign in ==========================================================
    $('#modal-sign-in form input:last-child').on('click', function() {
        let pass = $('#pass');
        let userinput = $('#email');

        for (let user of users) {
            if ( (user.username == userinput.val() || user.email == userinput.val()) && user.password == pass.val()) {
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
});