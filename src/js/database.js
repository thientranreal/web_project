class Question {
    constructor(img_url, op1, op2, op3, op4, answer, audio) {
        this.img_url = img_url;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
        this.answer = answer;
        this.audio = audio;
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

let users = [], vocabulary = [], question_list = [], question_sentence = [];

// local storage user =====================================================================
if (localStorage.accounts != undefined) {
    users = JSON.parse(localStorage.accounts);
}
else { // default data
    users = [new User('', 'admin', 'flyingwhale2612', 'thientt2612@gmail.com')];
    localStorage.setItem('accounts', JSON.stringify(users));
}
// end user =====================================================================

// local storage vocabulary =====================================================================
if (localStorage.vocabulary != undefined) {
    vocabulary = JSON.parse(localStorage.vocabulary);
}
else { // default data
    vocabulary = [
        new Word("apple", "n", "'æpl", "trái táo"),
        new Word("arm", "n", "ɑ:m", "cánh tay"),
        new Word("axe", "n", "æks", "cái rùi"),
        new Word("bus", "n", "bʌs", "xe buýt"),
        new Word("big", "adj", "big", "to, lớn"),
        new Word("back", "n", "bæk", "lưng"),
        new Word("car", "n", "kɑ:", "xe hơi"),
        new Word("cup", "n", "kʌp", "cái ly"),
        new Word("chicken", "n", "ˈtʃɪkin", "con gà"),
        new Word("run", "v", "rʌn", "chạy"),
        new Word("human", "n", "'hju:mən", "con người"),
    ];
    localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
}
// end vocabulary =====================================================================

// local storage question_list =====================================================================
if (localStorage.question_list != undefined) {
    question_list = JSON.parse(localStorage.question_list);
}
else { // default data
    question_list = [
        new Question("./src/img/game_image/apple.jpg", "banana", "cabbage", "mango", "apple", "apple","./src/audio/apple.m4a"),
        new Question("./src/img/game_image/bike.jpg", "car", "bike", "bridge", "house", "bike","./src/audio/bike.m4a"),
        new Question("./src/img/game_image/dog.jpg", "dog", "cat", "human", "fly", "dog","./src/audio/dog.m4a"),
        new Question("./src/img/game_image/laptop.jpg", "television", "cell phone", "laptop", "microwave", "laptop","./src/audio/laptop.m4a"),
        new Question("./src/img/game_image/cat.jpg", "cat", "dog", "mango", "apple", "cat","./src/audio/cat.m4a"),
        new Question("./src/img/game_image/bag.jpg", "house", "dog", "bag", "apple", "bag","./src/audio/bag.m4a")
    ];
    localStorage.setItem('question_list', JSON.stringify(question_list));
}
// end question_list =====================================================================

// local storage question_sentence =====================================================================
if (localStorage.question_sentence != undefined) {
    question_sentence = JSON.parse(localStorage.question_sentence);
}
else { // default data
    question_sentence = [
        new Question("Tôi đến từ Việt Nam", "from", "I", "Viet Nam", "am", "I am from Viet Nam", "./src/audio/ImFromVN.m4a"),
        new Question("Tôi thích ăn kem", "I", "eating", "love", "ice cream", "I love eating ice cream", "./src/audio/ILoveEatingIceCream.m4a"),
        new Question("Tôi là ca sĩ", "am", "a", "I", "singer", "I am a singer", "./src/audio/ImASinger.m4a"),
        new Question("Tôi đang học ở SGU", "studying", "am", "at SGU", "I", "I am studying at SGU", "./src/audio/ImStudyingAtSGU.m4a"),
        new Question("Tôi thích đọc sách", "I", "reading", "love", "book", "I love reading book", "./src/audio/ILoveReadingBook.m4a")
    ];
    localStorage.setItem('question_sentence', JSON.stringify(question_sentence));
}
// end question_sentence =====================================================================

// ==========================================================================
let active;
if (localStorage.active != undefined) {
    active = localStorage.active;
}