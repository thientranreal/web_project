$(document).ready(function() {
// intialize=============================================================
    let randomNum;
    if (active != undefined) {
        let $gap = $('.gap');
        $gap.children(':first').html(`Hello ${active}`);
        $gap.siblings('#navbar').find('#show-sign-in').children(':first').html('Log out');
        $gap.siblings('#modal-container').find('#show-sign-in-res').html('Log out');
    }
//======================================================================

// Navbar navigation =======================================================
    $('#navbar .navbar-main li > a').on('click', function() {
        if ($(this).is('.active')) {
            return;
        }
        let $navbar_nav = $(this).closest('.navbar-nav');
        $navbar_nav.find('a.active').removeClass('active');
        $(this).addClass('active');

        let $panelToShow = $(this).attr('rel');
        let $toBodyContainer = $(this).closest('#navbar').siblings('#body-container');
        $toBodyContainer.find('.panel.active').hide(300, function() {
            $(this).removeClass('active');

            $toBodyContainer.find('#'+$panelToShow).show(300, function() {
                $(this).addClass('active');
            });
        });
    })
// End navbar navigation =================================================

// Navbar navigation res =======================================================
$('#modal-container .sidebar-content li > a').on('click', function() {
    close_menu();
    if ($(this).is('.active')) {
        return;
    }
    let $sidebar_content = $(this).closest('.sidebar-content');
    $sidebar_content.find('a.active').removeClass('active');
    $(this).addClass('active');

    let $panelToShow = $(this).attr('rel');
    let $toBodyContainer = $(this).closest('#modal-container').siblings('#body-container');
    $toBodyContainer.find('.panel.active').hide(300, function() {
        $(this).removeClass('active');

        $toBodyContainer.find('#'+$panelToShow).show(300, function() {
            $(this).addClass('active');
        });
    });
})
// End navbar navigation res =================================================

// Play game===============================================================
    function loadGuessingGame(pointer, options, randomNum, array) {
        pointer.attr('src', array[randomNum].img_url);
        let op;
        for (let i = 0; i < options.length; i++) {
            op = `op${i + 1}`;
            options.eq(i).html(array[randomNum][op]);
        }
    }
    
    function startGame() {
        // random number for random access to question_list
        randomNum = Math.floor(Math.random() * question_list.length);
        let $question_img = $('#question-img');
        let options = $question_img.parent().siblings('.option-list').find('.option');
        
        // reset css for options
        options.removeClass('correct').removeClass('wrong');
        loadGuessingGame($question_img, options, randomNum, question_list);

        // add event listener for options
        options.on('click', function() {
            // stop user from clicking it again
            $(this).css('pointer-events', 'none');

            if ($(this).html() == question_list[randomNum].answer) {
                $(this).addClass('correct');

                //restart game after 1 second
                setTimeout(function() {
                    options.removeClass('correct').removeClass('wrong').css('pointer-events', '');
                    randomNum = Math.floor(Math.random() * question_list.length);
                    loadGuessingGame($question_img, options, randomNum, question_list);
                }, 1000);
            }
            else {
                $(this).addClass('wrong');
            }
        });
    }
    
    $('#trochoi, #trochoires').on('click', startGame);
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

    let close_signin = function() {
        let $modal_sign_in = $('#modal-sign-in');
        $modal_sign_in.slideUp();
        //reset form
        $modal_sign_in.find('#email, #pass').val('').css('border-bottom', 'solid 1px #f5f5f5');
    }

    function signInLogOut() {
        let $sign_in = $('#show-sign-in a');
        let $sign_in_res = $sign_in.closest('#navbar').siblings('#modal-container').find('#show-sign-in-res');
        let $modal_sign_in = $sign_in.closest('#navbar').siblings('#modal-sign-in');

        if ($sign_in.html() == 'Sign In' && $sign_in_res.html() == 'Sign In') {
            $modal_sign_in.slideDown();
        }
        else {
            $sign_in.html('Sign In');
            $sign_in_res.html('Sign In');
            localStorage.removeItem('active');
            $modal_sign_in.siblings('.gap').children(':first').html('');
        }
    }

    // add event listener
    $('#show-sign-in').on('click', signInLogOut);
    $('#show-sign-in-res').on('click', function() {
        close_menu();
        signInLogOut();
    });

    $('#modal-sign-in').on('click', function() {
        $(this).slideUp();
        $(this).find('#email, #pass').val('').css('border-bottom', 'solid 1px #f5f5f5');
    });

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
                $(this).closest('#modal-sign-in').siblings('.gap').children(':first').html(`Hello ${user.username}`);
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
    $('#pass, #email').on('input', inputChange);
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

// Ghep cau game =============================================================
    function loadDataGhepCau(pointer, options, randomNum, array) {
        pointer.html(array[randomNum].img_url);
        let op;
        options.css({
            "pointer-events": "",
            "opacity": ""
        });
        for (let i = 0; i < options.length; i++) {
            op = `op${i + 1}`;
            options.eq(i).html(array[randomNum][op]);
        }
    }
    function startGhepCau() {
        randomNum = Math.floor(Math.random() * question_sentence.length);
        // fill data for game
        let sentence_game = $(this).attr('rel');
        let $toBodyContainer = $('#body-container');
        let $sgquestion = $toBodyContainer.find('#' + sentence_game + ' #sgquestion');
        let options = $toBodyContainer.find('#' + sentence_game + ' .option');
        loadDataGhepCau($sgquestion, options, randomNum, question_sentence);
        let sentence = "Your answer is: ", count = 0, $sganswer = $('#sganswer > span');
        $sganswer.html(sentence);

        options.on('click', function() {
            $(this).css({
                "pointer-events": "none",
                "opacity": "0.5"
            });
            sentence += $(this).html() + ' ';
            count++;
            $sganswer.html(sentence);
            
            if (count == 4) {
                // check answer
                options.css({
                    "opacity": ""
                });
                if (sentence.replace('Your answer is: ', '').trim() == question_sentence[randomNum].answer) {
                    options.addClass('correct');
                }
                else {
                    options.addClass('wrong');
                }
                // end check answer
                // start a new game after 1 second
                setTimeout(function() {
                    randomNum = Math.floor(Math.random() * question_sentence.length);
                    options.removeClass('correct').removeClass('wrong').css({
                        "pointer-events": "",
                        "opacity": ""
                    });
                    loadDataGhepCau($sgquestion, options, randomNum, question_sentence);
                    sentence = "Your answer is: ";
                    count = 0;
                    $sganswer.html(sentence);
                }, 1000);
            }
        });
    }

    $('#ghepcau, #ghepcaures').on('click', startGhepCau);
// End ghep cau game =========================================================
});