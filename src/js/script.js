$(document).ready(function() {
// intialize=============================================================
    let num_guess_game = -1, num_sentence_game = -1;
    let $gap = $('.gap');
    if (active != undefined) {
        $gap.children(':first').html(`Hello ${active}`);
        $gap.siblings('#navbar').find('#show-sign-in').children(':first').html('Log out');
        $gap.siblings('#modal-container').find('#show-sign-in-res').html('Log out');

        // check if current user is admin
        if (active === 'admin') {
            $gap.siblings('#modal-container').find('.admin_feature').show();
            $gap.siblings('#navbar').find('.admin_feature').show();
        }
    }
    // function for increment element in guessing game
    function incrementGuessGame() {
        if (num_guess_game === question_list.length - 1) {
            num_guess_game = 0;
        }
        else {
            ++num_guess_game;
        }
    }
    // function for increment element in sentence game
    function incrementSentenceGame() {
        if (num_sentence_game === question_sentence.length - 1) {
            num_sentence_game = 0;
        }
        else {
            ++num_sentence_game;
        }
    }
    // function for playing audio
    let audio;
    function playAudio(path) {
        audio = new Audio(path);
        audio.play();
    }

//======================================================================

// Banner Trang chu ====================================================
var banner_counter = 1;
    setInterval(function () {
      document.getElementById("radio" + banner_counter).checked = true;
      banner_counter++;
      if (banner_counter > 4) {
        banner_counter = 1;
      }
    }, 4000);
// End Banner Trang chu ===============================================

// Move to admin site=====================================================
    $('.admin_feature').on('click', function() {
        window.location.replace('./admin.html');
    });
// End move to admin site ================================================

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
        incrementGuessGame();
        let $question_img = $('#question-img');
        let options = $question_img.parent().siblings('.option-list').find('.option');
        
        // reset css for options
        options.removeClass('correct').removeClass('wrong').css('pointer-events', '');
        loadGuessingGame($question_img, options, num_guess_game, question_list);

        // add event listener for options
        options.unbind('click');
        options.on('click', function() {
            // stop user from clicking it again
            options.css('pointer-events', 'none');
            // so sanh
            if ($(this).html() == question_list[num_guess_game].answer) {
                $(this).addClass('correct');
            }
            else {
                $(this).addClass('wrong');
            }
            //restart game after 1 second
            setTimeout(function() {
                options.removeClass('correct').removeClass('wrong').css('pointer-events', '');
                incrementGuessGame();
                loadGuessingGame($question_img, options, num_guess_game, question_list);
            }, 1000);
        });
    }
    
    $('#trochoi, #trochoires').on('click', startGame);
    
    // play audio
    $('#question-img').on('click', function() {
        playAudio(question_list[num_guess_game].audio);
    });
    // end play audio
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
            $modal_sign_in.parent().find('.admin_feature').hide();
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
                // if is admin then show admin_feature
                if (user.username === 'admin') {
                    $gap.siblings('#modal-container').find('.admin_feature').show();
                    $gap.siblings('#navbar').find('.admin_feature').show();
                }
                else {
                    $gap.siblings('#modal-container').find('.admin_feature').hide();
                    $gap.siblings('#navbar').find('.admin_feature').hide();
                }
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
        incrementSentenceGame();
        // fill data for game
        let sentence_game = $(this).attr('rel');
        let $toBodyContainer = $('#body-container');
        let $sgquestion = $toBodyContainer.find('#' + sentence_game + ' #sgquestion');
        let options = $toBodyContainer.find('#' + sentence_game + ' .option');
        loadDataGhepCau($sgquestion, options, num_sentence_game, question_sentence);
        let sentence = "Your answer is: ", count = 0, $sganswer = $('#sganswer > span');
        $sganswer.html(sentence);

        // play audio sentence
        playAudio(question_sentence[num_sentence_game].audio)

        options.unbind('click');
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
                if (sentence.replace('Your answer is: ', '').trim() == question_sentence[num_sentence_game].answer) {
                    options.addClass('correct');
                }
                else {
                    options.addClass('wrong');
                }
                // end check answer
                // start a new game after 1 second
                setTimeout(function() {
                    incrementSentenceGame();
                    options.removeClass('correct').removeClass('wrong').css({
                        "pointer-events": "",
                        "opacity": ""
                    });
                    loadDataGhepCau($sgquestion, options, num_sentence_game, question_sentence);

                    // play audio sentence
                    playAudio(question_sentence[num_sentence_game].audio)

                    sentence = "Your answer is: ";
                    count = 0;
                    $sganswer.html(sentence);
                }, 1000);
            }
        });
    }

    $('#ghepcau, #ghepcaures').on('click', startGhepCau);
// End ghep cau game =========================================================

// Search box ================================================================
    function showListWord(current_word, $search_result) {
        let result = "", exist = false;
        $search_result.children().unbind('click');

        // if word is empty
        if (current_word == "") {
            $search_result.html(current_word);
            return;
        }

        // find current_word in vocabulary
        for (let word of vocabulary) {
            if (word.word.substring(0, current_word.length) == current_word) {
                result += `<li>${word.word}</li>`;
                $search_result.html(result);
                exist = true;
            }
        }
        // add click event for word
        if (exist) {
            $search_result.children().on('click', function() {
                for (let word of vocabulary) {
                    if (word.word == $(this).html()) {
                        $search_result.children().unbind('click');

                        result = `<li>${word.word} (${word.type}) /${word.spelling}/ : ${word.meaning}</li>`;
                        $search_result.html(result);

                        // add click event for chosen word
                        $search_result.children().on('click', function() {
                            // play audio for selected word
                            playAudio(word.audio)
                        });
                    }
                }
            });
        }
        else {
            $search_result.html(`<li>${current_word}</li>`);
        }
    }
    //search animation
    $('.navbar-search-cart').on('click', function(event) {
        event.stopPropagation();
        let $search_animation = $(this).find('#search-animation');
        // if already in middle then return
        if ($search_animation.is('.middle')) {
            return;
        }
        $search_animation.css('opacity', '1').addClass('middle').closest('.navbar-search-cart').addClass('middle').prev().hide();
        $search_animation.parent().next().slideDown(200);
    });
    
    $('#wrapper').on('click', function() {
        let $search_animation = $(this).find('#navbar #search-animation');
        // if already not in middle then return
        if (!$search_animation.is('.middle')) {
            return;
        }
        $search_animation.removeClass('middle').closest('.navbar-search-cart').removeClass('middle').prev().delay(300).show(1);
        $search_animation.parent().next().slideUp(200);
    });

    // search word
    $('#search-animation').on('input', function(e) {
        e.stopPropagation();
        let current_word = $(this).val();
        let $search_result = $(this).parent().next();
        showListWord(current_word, $search_result);
    });
    
    function showCorrectWord($search_result, current_word) {
        for (let word of vocabulary) {
            if (word.word == current_word) {

                $search_result.children().unbind('click');
                $search_result.html(`<li>${word.word} (${word.type}) /${word.spelling}/ : ${word.meaning}</li>`);

                // play audio for selected word
                $search_result.children().on('click', function() {
                    playAudio(word.audio);
                });
                return;
            }
        }
        $search_result.html(`<li>${current_word} is not available</li>`);
    }
    // enter in search
    $('#search-animation').keyup(function(e) {
        e.stopPropagation();
        if (e.keyCode == 13) {
            let current_word = $(this).val();
            let $search_result = $(this).parent().next();
            if (current_word == '') {
                return;
            }

            showCorrectWord($search_result, current_word);
        }
    });
    // add event click for search kinh lup
    $('#search_icon').on('click', function(e) {
        e.stopPropagation();
        let $search_animation = $(this).next();
        let current_word = $search_animation.val();
        let $search_result = $search_animation.parent().next();
        if ($search_animation.val() == '') {
            return;
        }

        showCorrectWord($search_result, current_word);

    });
// End search box =============================================================

// Search for responsive
    $('#search_res').on('click', function(e) {
        e.stopPropagation();
        if (!$(this).is('.show')) {
            $(this).next().show(function() {
                $(this).css('width', '');
            });
            // mark show and show search_result
            $(this).addClass('show').siblings('#search_result_res').slideDown(200);
        }
        else {
            $(this).next().css('width', '0').delay(500).fadeOut(200);
            $(this).removeClass('show').siblings('#search_result_res').slideUp(200);
        }
    }).next().on('input', function(e) { // add input event for search input
        e.stopPropagation();
        let current_word = $(this).val();
        let $search_result = $(this).siblings('#search_result_res');
        showListWord(current_word, $search_result);
    });
// End search for responsive

});