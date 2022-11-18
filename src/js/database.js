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
class Word {
    constructor(word, type, spelling, meaning) {
        this.word = word;
        this.type = type;
        this.spelling = spelling;
        this.meaning = meaning;
    }
}
// var question_list = [
//     new Question("./src/img/game_image/apple.jpg", "banana", "cabbage", "mango", "apple", "apple"),
//     new Question("./src/img/game_image/bike.jpg", "car", "bike", "bridge", "house", "bike"),
//     new Question("./src/img/game_image/dog.jpg", "dog", "cat", "human", "fly", "dog"),
//     new Question("./src/img/game_image/laptop.jpg", "television", "cell phone", "laptop", "microwave", "laptop"),
//     new Question("./src/img/game_image/cat.jpg", "cat", "dog", "mango", "apple", "cat"),
//     new Question("./src/img/game_image/bag.jpg", "house", "dog", "bag", "apple", "bag")
// ];

// var question_sentence = [
//     new Question("Tôi đến từ Việt Nam", "from", "I", "Viet Nam", "am", "I am from Viet Nam"),
//     new Question("Tôi thích ăn kem", "I", "eating", "love", "ice cream", "I love eating ice cream"),
//     new Question("Tôi là ca sĩ", "am", "a", "I", "singer", "I am a singer"),
//     new Question("Tôi đang học ở SGU", "studying", "am", "at SGU", "I", "I am studying at SGU"),
//     new Question("Tôi thích đọc sách", "I", "reading", "love", "book", "I love reading book")
// ];

// var vocabulary = [
//     new Word("apple", "n", "'æpl", "trái táo"),
//     new Word("arm", "n", "ɑ:m", "cánh tay"),
//     new Word("axe", "n", "æks", "cái rùi"),
//     new Word("bus", "n", "bʌs", "xe buýt"),
//     new Word("big", "adj", "big", "to, lớn"),
//     new Word("back", "n", "bæk", "lưng"),
//     new Word("car", "n", "kɑ:", "xe hơi"),
//     new Word("cup", "n", "kʌp", "cái ly"),
//     new Word("chicken", "n", "ˈtʃɪkin", "con gà"),
//     new Word("run", "v", "rʌn", "chạy"),
//     new Word("human", "n", "'hju:mən", "con người"),
// ];
// localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
let users = [], vocabulary = [], question_sentence = [], question_list = [];
// Fetch accounts array from web browser ====================================
users = JSON.parse(localStorage.accounts);
vocabulary = JSON.parse(localStorage.vocabulary);
question_sentence = JSON.parse(localStorage.question_sentence);
question_list = JSON.parse(localStorage.question_list);

// ==========================================================================
let active = localStorage.active;