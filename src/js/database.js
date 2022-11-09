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
var users = [];
// Fetch accounts array from web browser ====================================
var users = JSON.parse(localStorage.accounts);
// ==========================================================================
var active = localStorage.active;