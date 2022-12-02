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
    constructor(word, type, spelling, meaning, audio) {
        this.word = word;
        this.type = type;
        this.spelling = spelling;
        this.meaning = meaning;
        this.audio = audio;
    }
}

let users = [], vocabulary = [], question_list = [], question_sentence = [], question_grammar = [];

// local storage user =====================================================================
if (localStorage.accounts != undefined) {
    users = JSON.parse(localStorage.accounts);
}
else { // default data
    users = [new User('', 'admin', '12345678a', 'thientt2612@gmail.com')];
    localStorage.setItem('accounts', JSON.stringify(users));
}
// end user =====================================================================

// local storage vocabulary =====================================================================
if (localStorage.vocabulary != undefined) {
    vocabulary = JSON.parse(localStorage.vocabulary);
}
else { // default data
    vocabulary = [
        new Word("apple", "n", "'æpl", "trái táo","./src/audio/apple.mp3"),
        new Word("arm", "n", "ɑ:m", "cánh tay","./src/audio/arm.mp3"),
        new Word("axe", "n", "æks", "cái rùi","./src/audio/axe.mp3"),
        new Word("bus", "n", "bʌs", "xe buýt","./src/audio/bus.mp3"),
        new Word("big", "adj", "big", "to, lớn","./src/audio/big.mp3"),
        new Word("back", "n", "bæk", "lưng","./src/audio/back.mp3"),
        new Word("car", "n", "kɑ:", "xe hơi","./src/audio/car.mp3"),
        new Word("cup", "n", "kʌp", "cái ly","./src/audio/cup.mp3"),
        new Word("chicken", "n", "ˈtʃɪkin", "con gà","./src/audio/chicken.mp3"),
        new Word("run", "v", "rʌn", "chạy","./src/audio/run.mp3"),
        new Word("human", "n", "'hju:mən", "con người","./src/audio/human.mp3"),
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
        new Question("./src/img/game_image/apple.jpg", "banana", "cabbage", "mango", "apple", "apple","./src/audio/apple.mp3"),
        new Question("./src/img/game_image/bike.jpg", "car", "bike", "bridge", "house", "bike","./src/audio/bike.mp3"),
        new Question("./src/img/game_image/dog.jpg", "dog", "cat", "human", "fly", "dog","./src/audio/dog.mp3"),
        new Question("./src/img/game_image/laptop.jpg", "television", "cell phone", "laptop", "microwave", "laptop","./src/audio/laptop.mp3"),
        new Question("./src/img/game_image/cat.jpg", "cat", "dog", "mango", "apple", "cat","./src/audio/cat.mp3"),
        new Question("./src/img/game_image/bag.jpg", "house", "dog", "bag", "apple", "bag","./src/audio/bag.mp3")
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

// local storage question_grammar =====================================================================
if (localStorage.question_grammar != undefined) {
    question_grammar = JSON.parse(localStorage.question_grammar);
}
else { // default data
    question_grammar = [
        new Question("The TV station, in _______ to massive popular demand, decided not to discontinue the soap opera.", "reaction", "response", "answer", "reply", "response", ""),
        new Question(" _____, the people who come to this club are in their twenties and thirties.", "By and large", "Altogether", " To a degree", "Virtually", "By and large", ""),
        new Question("The little boy pleaded _____ not to leave him alone in the dark.", "with his mother", "on his mother", "his mother", "at his mother", "with his mother", ""),
        new Question(" _______ raiding for camels was a significant part of Bedouin life has been documented in Wilfed Thesiger’s Arabian Sands.", "That", "Which", "What", "Where", "That", ""),
        new Question("His emotional problems _______ from the attitudes he encountered as a child, I think.", "stem", "sprout", "flourish", "root", "stem", "")
    ];
    localStorage.setItem('question_grammar', JSON.stringify(question_grammar));
}
// end question_grammar =====================================================================

// ==========================================================================
let active;
if (localStorage.active != undefined) {
    active = localStorage.active;
}