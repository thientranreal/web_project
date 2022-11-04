// variable===================================================================================================
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
var question_list = [
    new Question("./src/img/game_image/apple.jpg", "banana", "cabbage", "mango", "apple", "apple"),
    new Question("./src/img/game_image/bike.jpg", "car", "bike", "bridge", "house", "bike"),
    new Question("./src/img/game_image/dog.jpg", "dog", "cat", "human", "fly", "dog"),
    new Question("./src/img/game_image/laptop.jpg", "television", "cell phone", "laptop", "microwave", "laptop"),
    new Question("./src/img/game_image/cat.jpg", "cat", "dog", "mango", "apple", "cat"),
    new Question("./src/img/game_image/bag.jpg", "house", "dog", "bag", "apple", "bag"),
];

var menu_bar = document.getElementById('menu-bars');
var menu_close = document.getElementById('menu-close');
var modal_container = document.getElementById('modal-container');
var slider_content = document.getElementsByClassName('slider-content');
var options = document.getElementsByClassName("option");
var randomNum;
//==========================================================================================================

// function===============================================================================================

// load game=====================================
var checkAnswer = function() {
    if (this.innerHTML == question_list[randomNum].answer) {
        this.classList.add('correct');
    }
    else {
        this.classList.add('wrong');
    }
}

var startGame = function() {
    // random number for random access to question_list
    randomNum = Math.floor(Math.random() * question_list.length);
    document.getElementById("question-img").setAttribute("src", question_list[randomNum].img_url);
    let op;
    // add event listener for options
    for (let i = 0; i < options.length; i++) {
        op = `op${i + 1}`;
        options[i].innerHTML = question_list[randomNum][op];
        options[i].addEventListener('click', checkAnswer);
    }
}

document.getElementById('trochoi').addEventListener('click', function() {
    document.getElementById('guessing-game').setAttribute('style', 'display: block;');
    for (let op of options) {
        op.classList.remove('correct');
        op.classList.remove('wrong');
    }
    startGame();
});
// end load game =========================================

// on/off sidebar menu==================================
menu_bar.addEventListener('click', () => {
    modal_container.classList.add('show');
});

var close_menu = function() {
    modal_container.classList.remove('show');
};

menu_close.addEventListener('click', close_menu);

window.addEventListener('resize', close_menu);
// end sidebar menu==================================

// =========================================================================================================