// variable and class ===================================================================================================
class Question {
    constructor(img_url, op1, op2, op3, op4, answer) {
        this.img_url = img_url;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
        this.answer = answer;
    }
}
class User {
    constructor(img_url, username, password, email) {
        this.img_url = img_url;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
var question_list = [
    new Question("./src/img/game_image/apple.jpg", "banana", "cabbage", "mango", "apple", "apple"),
    new Question("./src/img/game_image/bike.jpg", "car", "bike", "bridge", "house", "bike"),
    new Question("./src/img/game_image/dog.jpg", "dog", "cat", "human", "fly", "dog"),
    new Question("./src/img/game_image/laptop.jpg", "television", "cell phone", "laptop", "microwave", "laptop"),
    new Question("./src/img/game_image/cat.jpg", "cat", "dog", "mango", "apple", "cat"),
    new Question("./src/img/game_image/bag.jpg", "house", "dog", "bag", "apple", "bag"),
];

var users = [
    new User('', 'admin', '123456', 'thientt2612@gmail.com')
];
//==========================================================================================================
// Jquery
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
        $('#pass').val('').css('border-bottom', 'solid 1px');
        $('#email').val('').css('border-bottom', 'solid 1px');
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
    })
// End on / off sign in========================================================

// Validate sign in ==========================================================
    $('#modal-sign-in form input:last-child').on('click', function() {
        let pass = $('#pass');
        let userinput = $('#email');

        for (let user of users) {
            if ( (user.username == userinput.val() || user.email == userinput.val()) && user.password == pass.val()) {
                close_signin();
            }
            else {
                pass.css('border-bottom', 'solid 2px rgb(246, 66, 66)');
                userinput.css('border-bottom', 'solid 2px rgb(246, 66, 66)');
                return;
            }
        }
    });

    let inputChange = function() {
        $(this).css('border-bottom', 'solid 2px rgb(131,58,180)');
    }
    $('#pass').on('input', inputChange);
    $('#email').on('input', inputChange);
// End validate sign in ======================================================
});