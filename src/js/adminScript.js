
// intialize=============================================================
let isAdmin = localStorage.getItem('active');
if (isAdmin !== "admin") {
    location.replace("./index.html");
}
let num_guess_game = -1, num_sentence_game = -1;
let $gap = $('.gap');

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

// On / off sign in/Uer========================================================

let close_signin = function() {
    let $modal_sign_in = $('#modal-sign-in');
    $modal_sign_in.slideUp();
    //reset form
}

let close_userEdit = function() {
    let $modal_user = $('#modal-user');
    $modal_user.slideUp();
    //reset form
}


function signInLogOut() {
    let $sign_in = $('#show-sign-in a');
    let $sign_in_res = $sign_in.closest('#navbar').siblings('#modal-container').find('#show-sign-in-res');
    let $modal_sign_in = $sign_in.closest('#navbar').siblings('#modal-sign-in');

    console.log("Woa")
    $modal_sign_in.slideDown();

    $('#login-form > label, #login-form > input, #login-form > div').css('display', 'none');
    let $indexId = $('#indexId')
    let $qType = $('#qType')
    let $button = $('#login-form > input[type="button"]')
    $button.css('display', '')

    if ($qType.text() === 'question_list' || $qType.text() === 'question_sentence' || $qType.text() === 'question_grammar') {
        console.log("a");
        let $imgDir = $('#imgDir');
        let $imgDirDiv = $('#imgDirDiv');

        let $qAudio = $('#qAudio');
        let $qAudioDirDiv = $('#qAudioDirDiv');
        let $op1 = $('#op1');
        let $op2 = $('#op2');
        let $op3 = $('#op3');
        let $op4 = $('#op4');
        let $ans = $('#ans');

        $qAudio.css('display', '')
        $qAudioDirDiv.css('display', 'flex');
        $('#login-form > label[for="qAudio"]').css('display', '')

        $imgDir.css('display', '')
        $imgDirDiv.css('display', 'flex');
        $('#login-form > label[for="imgDir"]').css('display', '')

        $op1.css('display', '')
        $('#login-form > label[for="op1"]').css('display', '')

        $op2.css('display', '')
        $('#login-form > label[for="op2"]').css('display', '')

        $op3.css('display', '')
        $('#login-form > label[for="op3"]').css('display', '')

        $op4.css('display', '')
        $('#login-form > label[for="op4"]').css('display', '')

        $ans.css('display', '')
        $('#login-form > label[for="ans"]').css('display', '')
        
        $('#login-form > label[for="imgDir"').text("Image Directory")


        if ($qType.text() === 'question_sentence') {
            $('#login-form > label[for="imgDir"]').text("Tiếng Việt")
            $('#login-form label[for="imgDirFile"]').css('display', 'none');
        }
        if ($qType.text() === 'question_grammar') {
            $qAudio.css('display', 'none')
            $qAudioDirDiv.css('display', 'none');
            $('#login-form > label[for="qAudio"]').css('display', 'none');


            $('#login-form > label[for="imgDir"]').text("Question")
            $('#login-form label[for="imgDirFile"]').css('display', 'none');
        }

    }
    else if ($qType.text() === 'vocabulary'){
        let $qWord = $('#qWord');
        let $qAudio = $('#qAudio');
        let $qAudioDirDiv = $('#qAudioDirDiv');

        let $wType = $('#wType');
        let $qSpell = $('#qSpell');
        let $qMean = $('#qMean');

        $qWord.css('display','');
        $('#login-form > label[for="qWord"]').css('display', '')

        $qAudio.css('display','')
        $qAudioDirDiv.css('display', 'flex');
        $('#login-form > label[for="qAudio"]').css('display', '')

        $wType.css('display','')
        $('#login-form > label[for="wType"]').css('display', '')

        $qSpell.css('display','')
        $('#login-form > label[for="qSpell"]').css('display', '')

        $qMean.css('display','')
        $('#login-form > label[for="qMean"]').css('display', '')
    }
    else if ($qType.text() === 'user') {
        let $qEmail = $('#qEmail');
        $qEmail.css('display','');
        $('#login-form > label[for="qEmail"]').css('display', '')

        let $qUser = $('#qUser');
        $qUser.css('display','')
        $('#login-form > label[for="qUser"]').css('display', '')

        let $qPass = $('#qPass');
        $qPass.css('display','')
        $('#login-form > label[for="qPass"]').css('display', '')

        let $qG1C = $('#qG1C');
        $qG1C.css('display','')
        $('#login-form > label[for="qG1C"]').css('display', '')


        let $qG1W = $('#qG1W');
        $qG1W.css('display','')
        $('#login-form > label[for="qG1W"]').css('display', '')

        let $qG2C = $('#qG2C');
        $qG2C.css('display','')
        $('#login-form > label[for="qG2C"]').css('display', '')


        let $qG2W = $('#qG2W');
        $qG2W.css('display','')
        $('#login-form > label[for="qG2W"]').css('display', '')

        let $qG3C = $('#qG3C');
        $qG3C.css('display','')
        $('#login-form > label[for="qG3C"]').css('display', '')


        let $qG3W = $('#qG3W');
        $qG3W.css('display','')
        $('#login-form > label[for="qG3W"]').css('display', '')
    }
}

// File input slide down - workaround....
var fileInputToTextInput = (event, textInputId) => {
    let fileChunk = event.target.value.split("\\");
    let fileName = fileChunk[fileChunk.length-1]
    if (fileName.includes('.png') || fileName.includes('.jpg') || fileName.includes('.jpeg')) {
        document.getElementById(textInputId).value = './src/img/game_image/' + fileName;
    }
    else {
        document.getElementById(textInputId).value = './src/audio/' + fileName;
    }
    let $modal_sign_in = $('#modal-sign-in');
    $modal_sign_in.slideDown();
};
// 

// add event listener

$('#modal-sign-in').on('click', function() {
    $(this).slideUp();
});

$('#modal-sign-in-wrapper').on('click', function(event) {
    event.stopPropagation();
});
// End on / off sign in========================================================

// Validate sign in ==========================================================
$('#modal-sign-in form input:last-child').on('click', function() {
    let $indexId = $('#indexId')
    let $qType = $('#qType')

    let $imgDir = $('#imgDir');
    let $op1 = $('#op1');
    let $op2 = $('#op2');
    let $op3 = $('#op3');
    let $op4 = $('#op4');
    let $ans = $('#ans');

    let $qWord = $('#qWord');
    let $qAudio = $('#qAudio');
    let $wType = $('#wType');
    let $qSpell = $('#qSpell');
    let $qMean = $('#qMean');

    let $qEmail = $('#qEmail');
    let $qUser = $('#qUser');
    let $qPass = $('#qPass');
    let $qG1C = $('#qG1C');
    let $qG1W = $('#qG1W');
    let $qG2C = $('#qG2C');
    let $qG2W = $('#qG2W');
    let $qG3C = $('#qG3C');
    let $qG3W = $('#qG3W');


    if ($qType.text() === 'question_list' || $qType.text() === 'question_sentence') {
        if ($imgDir.val().trim() === '' || $op1.val().trim() === '' || 
        $op2.val().trim() === '' || $op3.val().trim() === '' || $op4.val().trim() === '' || 
        $qAudio.val().trim() === '' || $ans.val().trim() === '') {
            return;
        }


        const questionToReplace = {
            img_url: $imgDir.val(),
            op1 : $op1.val(),
            op2 : $op2.val(),
            op3 : $op3.val(),
            op4 : $op4.val(),
            audio : $qAudio.val(),
            answer : $ans.val()
        };
        if ($qType.text() === 'question_list') {

            let items = JSON.parse(localStorage.getItem('question_list'));

            let index = parseInt($indexId.text());
            if (index === -1) {
                index = items.length;
            }

            if (index < items.length) {
                items[index] = questionToReplace;
            }
            else {
                items.push(questionToReplace);
            }


            localStorage.setItem('question_list',JSON.stringify(items));
            updateGuessingTable();
        }
        if ($qType.text() === 'question_sentence') {

            let items = JSON.parse(localStorage.getItem('question_sentence'));
            items[$indexId.text()] = questionToReplace;


            let index = parseInt($indexId.text())
            if (index === -1) {
                index = items.length;
            }

            if (index < items.length) {
                items[index] = questionToReplace;
            }
            else {
                items.push(questionToReplace);
            }

            localStorage.setItem('question_sentence',JSON.stringify(items));
            updateSentenceTable();
        }
    }
    else if ($qType.text() === 'question_grammar') {
        if ($imgDir.val().trim() === '' || $op1.val().trim() === '' || 
        $op2.val().trim() === '' || $op3.val().trim() === '' || $op4.val().trim() === '' || 
        $ans.val().trim() === '') {
            return;
        }

        const questionToReplace = {
            img_url: $imgDir.val(),
            op1 : $op1.val(),
            op2 : $op2.val(),
            op3 : $op3.val(),
            op4 : $op4.val(),
            audio : "",
            answer : $ans.val()
        };

        let items = JSON.parse(localStorage.getItem('question_grammar'));

        let index = parseInt($indexId.text());
        if (index === -1) {
            index = items.length;
        }

        if (index < items.length) {
            items[index] = questionToReplace;
        }
        else {
            items.push(questionToReplace);
        }


        localStorage.setItem('question_grammar',JSON.stringify(items));
        updateGrammarTable();

    }
    else if ($qType.text() === 'vocabulary') {
        if ($qWord.val().trim() === '' || $qAudio.val().trim() === '' || 
        $wType.val().trim() === '' || $qSpell.val().trim() === '' || $qMean.val().trim() === '') {
            return;
        }
        const wordToReplace = {
            meaning : $qMean.val(),
            spelling : $qSpell.val(),
            type : $wType.val(),
            word : $qWord.val(),
            audio : $qAudio.val(),
        };

        let items = JSON.parse(localStorage.getItem('vocabulary'));

        let index = parseInt($indexId.text());
        if (index === -1) {
            index = items.length;
        }

        if (index < items.length) {
            items[index] = wordToReplace;
        }
        else {
            items.push(wordToReplace);
        }


        localStorage.setItem('vocabulary',JSON.stringify(items));
        updateVocabTable();

    }
    else if ($qType.text() === 'user') {
        if ($qEmail.val().trim() === '' || $qPass.val().trim() === '' || $qUser.val().trim() === '' ||
        $qG1C.val().trim() === '' || $qG1W.val().trim() === '' || $qG2C.val().trim() === ''||
        $qG2W.val().trim() === '' || $qG3C.val().trim() === '' || $qG3W.val().trim() === '') {
            return;
        }

        const accountToReplace = {
            username : $qUser.val(),
            email : $qEmail.val(),
            password : $qPass.val(),
            img_url : ""
        };

        const accountDetailToReplace = {
            game1C : parseInt($qG1C.val()),
            game1W : parseInt($qG1W.val()),
            game2C : parseInt($qG2C.val()),
            game2W : parseInt($qG2W.val()),
            game3C : parseInt($qG3C.val()),
            game3W : parseInt($qG3W.val()),
            username : accountToReplace.username,
        };

        let accounts = JSON.parse(localStorage.getItem('accounts'));
        let account = accounts.find(x => x.username === accountToReplace.username);
        if (account === undefined) {
            accounts.push(accountToReplace);
        }
        else {
            account.username = accountToReplace.username;
            account.email = accountToReplace.email;
            account.password = accountToReplace.password;
        }

        let detailUserList = JSON.parse(localStorage.getItem('detailUser'));
        let detailUser = detailUserList.find(x=>x.username === accountDetailToReplace.username);

        if (detailUser === undefined) {
            detailUserList.push(accountToReplace);
        }
        else {
            detailUser.game1C = accountDetailToReplace.game1C;
            detailUser.game1W = accountDetailToReplace.game1W;

            detailUser.game2C = accountDetailToReplace.game2C;
            detailUser.game2W = accountDetailToReplace.game2W;
            
            detailUser.game3C = accountDetailToReplace.game3C;
            detailUser.game3W = accountDetailToReplace.game3W;
        }

        console.log(detailUserList);
        console.log(detailUser);
        console.log(accounts);

        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.setItem('detailUser', JSON.stringify(detailUserList));
        updateUserTable();
    }

    close_signin();

    // pass.css('border-bottom', 'solid 2px rgb(246, 66, 66)');
    // userinput.css('border-bottom', 'solid 2px rgb(246, 66, 66)');
    // userinput.focus();
});

$('#modal-sign-in form input:last-child').on('click', function() {

    signInLogOut
    close_userEdit();
});


let inputChange = function() {
    if ($(this).val() == '') {
        $(this).css('border-bottom', 'solid 1px #f5f5f5');
    }
    else {
        $(this).css('border-bottom', 'solid 2px rgb(131,58,180)');
    }
}
// End validate sign in ======================================================

// region Validate Edit User
$('#modal-user form input:last-child').on('click', function() {
    close_userEdit();
});
// endregion


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

            // TK

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
// End delete word

signInLogOutFunc = signInLogOut;

// Add word
$('#add_btn').on('click', function() {
    let $input = $(this).closest('#add_word').find('input');
    let word;
    // check input field have data or not
    for (let item of $input) {
        if ($(item).val() === '') {
            if ($(item).is('input[type=file]')) {
                alert("Chưa thêm đường dẫn file audio!.");
                return;
            }
            alert("Thêm từ mới không thành công!.");
            return;
        }
    }
    function resetInput() {
        for (let item of $input) {
            if ($(item).is('input[readonly]')) {
                let default_path = './src/audio/';
                $(item).val(default_path);
            }
            else {
                $(item).val('');
            }
        }
    }
    // check whether a new word is exsisted or not
    for (let item of vocabulary) {
        if (item.word === $input.eq(0).val().toLowerCase()) {
            alert("Từ này đã tồn tại.");
            resetInput();
            return;
        }
    }
    // add new word
    word = new Word($input.eq(0).val().toLowerCase(), $input.eq(1).val().toLowerCase(), $input.eq(2).val().toLowerCase(), $input.eq(3).val().toLowerCase(), $input.filter('input[readonly]').val());
    vocabulary.push(word);
    localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
    alert(`Add ${$input.eq(0).val().toLowerCase()} successfully`);
    // reset input field
    resetInput();
});
// End add word

// Get path audio
$('#path_audio').on('change', function() {
    let default_path = './src/audio/';
    // if path is empty
    if ($(this).val() === '') {
        $(this).next().val(default_path);
    }
    else {
        let path = $(this).val().split('\\');
        let filename = path[path.length - 1];
        // get file name
        $(this).next().val(default_path + filename);
    }
});
// End get path audio

// Delete word
$('#delete_btn').on('click', function() {
    // get word for deleting
    let $input_word = $(this).parent().siblings().eq(0);
    let word_delete = $input_word.val();

    // find word want to delete and get it index
    let delete_index;
    vocabulary.find(function(word, index) {
        if (word.word === word_delete.toLowerCase()) {
            delete_index = index;
            return true;
        }
    });

    if (delete_index != undefined) {
        alert(`Delete ${word_delete} successfully.`);
        $input_word.val('');
        // delete element in array
        vocabulary.splice(delete_index, 1);
        // update for local storage
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
    }
    else {
        alert(`Can't find ${word_delete} in database.`);
    }
    $input_word.focus();
});
// End delete word
