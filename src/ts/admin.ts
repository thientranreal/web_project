console.log("a")

// @ts-ignore
document.getElementById('indexId')?.innerText = "2"

const updateEdit = ( questionToEdit : {
    indexId : 0,
    qType : "",
    imgDir : "",
    op1 : "",
    op2 : "",
    op3 : "",
    op4 : "",
    answer: "",
    qWord : "",
    qAudio : "",
    qSpell : "",
    qMean : "",
    wType : "",
    qUser : "",
    qPass : "",
    qEmail : "",
    qG1C : 0,
    qG1W : 0,
    qG2C : 0,
    qG2W : 0,
    qG3C : 0,
    qG3W : 0
}) => {
    const {indexId, qType, imgDir, op1, op2, op3, op4, answer, qAudio, wType, qMean,qEmail, qSpell, qWord, qG1C, qG1W, qG2C, qG2W,qG3C,qG3W,qPass,qUser} = questionToEdit
    
    if (indexId === undefined) {
        return
    }
    if (qType === undefined) {
        return;
    }
    const indexIdElem = document.getElementById('indexId')
    if (indexIdElem === null) {
        return;
    }
    indexIdElem.innerText = String(indexId)

    const qTypeElem = document.getElementById('qType')
    if (qTypeElem === null) {
        return;
    }
    qTypeElem.innerText = qType

    const imgDirElem = document.getElementById('imgDir')
    if (imgDirElem === null) {
        return;
    }
    console.log(imgDirElem);
    
    // @ts-ignore
    imgDirElem.value = imgDir

    const op1Elem = document.getElementById('op1')
    if (op1Elem === null) {
        return;
    }

    // @ts-ignore
    op1Elem.value = op1

    const op2Elem = document.getElementById('op2')
    if (op2Elem === null) {
        return;
    }

    // @ts-ignore
    op2Elem.value = op2

    const op3Elem = document.getElementById('op3')
    if (op3Elem === null) {
        return;
    }

    // @ts-ignore
    op3Elem.value = op3

    const op4Elem = document.getElementById('op4')
    if (op4Elem === null) {
        return;
    }

    // @ts-ignore
    op4Elem.value = op4

    const ansElem = document.getElementById('ans')
    if (op4Elem === null) {
        return;
    }

    // @ts-ignore
    ansElem.value = answer

    const qWordElem = document.getElementById('qWord')
    if (qWordElem === null) {
        return;
    }


    
    // @ts-ignore
    qWordElem.value = qWord



    const qAudioElem = document.getElementById('qAudio')
    if (qAudioElem === null) {
        return;
    }

    // @ts-ignore
    qAudioElem.value = qAudio

    const wTypeElem = document.getElementById('wType')
    if (wTypeElem === null) {
        return;
    }

    // @ts-ignore
    wTypeElem.value = wType

    const qSpellElem = document.getElementById('qSpell')
    if (qSpellElem === null) {
        return;
    }

    // @ts-ignore
    qSpellElem.value = qSpell

    const qMeanElem = document.getElementById('qMean')
    if (qMeanElem === null) {
        return;
    }

    // @ts-ignore
    qMeanElem.value = qMean

    const qUserElem = document.getElementById('qUser')
    if (qUserElem === null) {
        return;
    }

    // @ts-ignore
    qUserElem.value = qUser

    const qPassElem = document.getElementById('qPass')
    if (qPassElem === null) {
        return;
    }

    // @ts-ignore
    qPassElem.value = qPass


    const qG1CElem = document.getElementById('qG1C')
    if (qG1CElem === null) {
        return;
    }

    // @ts-ignore
    qG1CElem.value = qG1C

    const qG1WElem = document.getElementById('qG1W')
    if (qG1WElem === null) {
        return;
    }

    // @ts-ignore
    qG1WElem.value = qG1W
    
    const qG2CElem = document.getElementById('qG2C')
    if (qG2CElem === null) {
        return;
    }

    // @ts-ignore
    qG2CElem.value = qG2C

    const qG2WElem = document.getElementById('qG2W')
    if (qG2WElem === null) {
        return;
    }

    // @ts-ignore
    qG2WElem.value = qG2W
    
    const qG3CElem = document.getElementById('qG3C')
    if (qG3CElem === null) {
        return;
    }

    // @ts-ignore
    qG3CElem.value = qG3C

    const qG3WElem = document.getElementById('qG3W')
    if (qG3WElem === null) {
        return;
    }

    // @ts-ignore
    qG3WElem.value = qG3W
    

    const qEmailElem = document.getElementById('qEmail')
    if (qEmailElem === null) {
        return;
    }

    // @ts-ignore
    qEmailElem.value = qEmail
    


    //@ts-ignore
    signInLogOutFunc()
}

const deleteItem = (questionToDelete : {
    indexId : number,
    qType : string,
}) => {
    const {indexId, qType} = questionToDelete;
    if (qType === 'question_list') {
        // @ts-ignore
        const item = JSON.parse(localStorage.getItem('question_list'))
        item.splice(indexId, 1)
        localStorage.setItem('question_list', JSON.stringify(item))
        updateGuessingTable()
    }
    else if (qType === 'question_sentence') {
        // @ts-ignore
        const item = JSON.parse(localStorage.getItem('question_sentence'))
        item.splice(indexId, 1)
        localStorage.setItem('question_sentence', JSON.stringify(item))
        updateSentenceTable()
    }

    else if (qType === 'vocabulary') {
        // @ts-ignore
        const item = JSON.parse(localStorage.getItem('vocabulary'))
        item.splice(indexId, 1)
        localStorage.setItem('vocabulary', JSON.stringify(item))
        updateVocabTable()
    }

}


const updateGuessingTable = () => {
    console.log("b")

    let questionItem = localStorage.getItem("question_list");
    if (questionItem === null) {
        console.log("Ko tim thay question_list")
        return;
    }
    let questionList : [{answer: string, audio: string, img_url: string, op1: string, op2: string, op3: string, op4:string}] =
        JSON.parse(questionItem)

    let guessingTable = document.getElementById("GuessingTableBody")
    if (guessingTable === null) {
        return;
    }
    guessingTable.innerText = "";
    for (let i = 0; i < questionList.length; i++) {
        const questionListElement = questionList[i]
        const fileChunk = questionListElement.img_url.split("/")
        const fileName = fileChunk[fileChunk.length-1]

        const audioChunk = questionListElement.audio.split("/")
        const audioName = audioChunk[audioChunk.length-1]

        guessingTable.innerHTML += `
            <tr>
                <td>${fileName}</td>
                <td>${audioName}</td>
                <td>${questionListElement.op1}</td>
                <td>${questionListElement.op2}</td>
                <td>${questionListElement.op3}</td>
                <td>${questionListElement.op4}</td>
                <td>${questionListElement.answer}</td>
                <td id="ql${i}" style="background-color:#bcbcbc; cursor:pointer;">Edit</td>
                <td id="qlx${i}" style="background-color:#bcbcbc; cursor:pointer;">Delete</td>
            </tr>
        `
        // @ts-ignore
    }
    for (let i = 0; i < questionList.length; i++) {
        const questionListElement = questionList[i]
        const questionToEdit = {
            qType : "question_list",
            indexId: i,
            imgDir: questionListElement.img_url,
            op1 : questionListElement.op1,
            op2 : questionListElement.op2,
            op3 : questionListElement.op3,
            op4 : questionListElement.op4,
            answer: questionListElement.answer,
            qWord: "",
            qSpell: "",
            qMean: "",
            qAudio: questionListElement.audio,
        }
        const questionToDelete = {
            qType : "question_list",
            indexId: i
        }
        // @ts-ignore
        document.getElementById(`ql${i}`)?.addEventListener("click", ()=>updateEdit(questionToEdit));
        document.getElementById(`qlx${i}`)?.addEventListener("click", ()=>deleteItem(questionToDelete));
    }

}

const updateSentenceTable = () => {

    let questionItem = localStorage.getItem("question_sentence");
    if (questionItem === null) {
        console.log("Ko tim thay question_sentence")
        return;
    }
    let questionList : [{answer: string, audio: string, img_url: string, op1: string, op2: string, op3: string, op4:string}] =
        JSON.parse(questionItem)

    let sentenceTable = document.getElementById("SentenceTableBody")
    if (sentenceTable === null) {
        return;
    }
    sentenceTable.innerText = "";
    for (let i = 0; i < questionList.length; i++) {
        const questionListElement = questionList[i]
        const fileChunk = questionListElement.img_url.split("/")
        const fileName = fileChunk[fileChunk.length-1]

        const audioChunk = questionListElement.audio.split("/")
        const audioName = audioChunk[audioChunk.length-1]

        sentenceTable.innerHTML += `
            <tr>
                <td>${audioName}</td>
                <td>${fileName}</td>
                <td>${questionListElement.op1}</td>
                <td>${questionListElement.op2}</td>
                <td>${questionListElement.op3}</td>
                <td>${questionListElement.op4}</td>
                <td>${questionListElement.answer}</td>
                <td id="sl${i}" style="background-color:#bcbcbc; cursor:pointer;">Edit</td>
                <td id="slx${i}" style="background-color:#bcbcbc; cursor:pointer;">Delete</td>
            </tr>
        `
        // @ts-ignore
    }
    for (let i = 0; i < questionList.length; i++) {
        const questionListElement = questionList[i]
        const questionToEdit = {
            qType : "question_sentence",
            indexId: i,
            imgDir: questionListElement.img_url,
            op1 : questionListElement.op1,
            op2 : questionListElement.op2,
            op3 : questionListElement.op3,
            op4 : questionListElement.op4,
            answer: questionListElement.answer,
            qWord: "",
            qSpell: "",
            qMean: "",
            qAudio: questionListElement.audio,
        }
        const questionToDelete = {
            qType : "question_sentence",
            indexId: i
        }

        // @ts-ignore
        document.getElementById(`sl${i}`)?.addEventListener("click", ()=>updateEdit(questionToEdit));
        document.getElementById(`slx${i}`)?.addEventListener("click", ()=>deleteItem(questionToDelete));
    }
}

const updateVocabTable = () => {

    let questionItem = localStorage.getItem("vocabulary");
    if (questionItem === null) {
        console.log("Ko tim thay vocabulary")
        return;
    }
    let vocabList : [{audio : string, meaning: string, spelling : string, type : string, word:string}] =
        JSON.parse(questionItem)

    let vocabTable = document.getElementById("VocabTableBody")
    if (vocabTable === null) {
        return;
    }
    vocabTable.innerText = "";
    for (let i = 0; i < vocabList.length; i++) {
        const vocabListElement = vocabList[i]

        const audioChunk = vocabListElement.audio.split("/")
        const audioName = audioChunk[audioChunk.length-1]

        vocabTable.innerHTML += `
            <tr>
                <td>${audioName}</td>
                <td>${vocabListElement.meaning}</td>
                <td>${vocabListElement.spelling}</td>
                <td>${vocabListElement.type}</td>
                <td>${vocabListElement.word}</td>
                <td id="v${i}" style="background-color:#bcbcbc; cursor:pointer;">Edit</td>
                <td id="vx${i}" style="background-color:#bcbcbc; cursor:pointer;">Delete</td>
            </tr>
        `
        // @ts-ignore
    }
    for (let i = 0; i < vocabList.length; i++) {
        const vocabListElement = vocabList[i]
        const questionToEdit = {
            qType : "vocabulary",
            indexId: i,
            imgDir: "",
            op1 : "",
            op2 : "",
            op3 : "",
            op4 : "",
            answer: "",
            qWord: vocabListElement.word,
            qSpell: vocabListElement.spelling,
            qMean: vocabListElement.meaning,
            qAudio: vocabListElement.audio,
            wType : vocabListElement.type
        }
        const questionToDelete = {
            qType : "vocabulary",
            indexId: i
        }

        // @ts-ignore
        document.getElementById(`v${i}`)?.addEventListener("click", ()=>updateEdit(questionToEdit));
        document.getElementById(`vx${i}`)?.addEventListener("click", ()=>deleteItem(questionToDelete));
    }
}

const updateUserTable = () => {

    let accounts = localStorage.getItem("accounts");
    if (accounts === null) {
        console.log("Ko tim thay accounts")
        return;
    }
    let accountList : [{email: string, password: string, username: string}] =
        JSON.parse(accounts)


    let detail = localStorage.getItem("detailUser");
    if (detail === null) {
        console.log("Ko tim thay detailUser")
        return;
    }
    let detailUserList : [{wordHistory: string[], game1C : number, game1W : number, game2C : number, game2W : number, game3C : number, game3W : number, username : string}] =
        JSON.parse(detail)

    let UserTable = document.getElementById("UserTableBody")
    if (UserTable === null) {
        return;
    }

    UserTable.innerText = "";
    for (let i = 0; i < accountList.length; i++) {
        const account = accountList[i]
        let detail = detailUserList.find(x => x.username === account.username);
        if (detail === null) {
            detail = {
                game1C : 0, 
                game1W : 0, 
                game2C : 0, 
                game2W : 0, 
                game3C : 0, 
                game3W : 0, 
                username : "",
                wordHistory : []
            }
        }

        UserTable.innerHTML += `
            <tr>
                <td>${account.email}</td>
                <td>${account.username}</td>
                <td>${account.password}</td>
                <td>${detail?.game1C}/${detail?.game1W}</td>
                <td>${detail?.game2C}/${detail?.game2W}</td>
                <td>${detail?.game3C}/${detail?.game3W}</td>
                <td>${detail?.wordHistory.join(', ')}</td>
                <td id="u${i}" style="background-color:#bcbcbc; cursor:pointer;">Edit</td>
                <td id="ux${i}" style="background-color:#bcbcbc; cursor:pointer;">Delete</td>
            </tr>
        `
        // @ts-ignore
    }
    for (let i = 0; i < accountList.length; i++) {
        const account = accountList[i]
        let detail = detailUserList.find(x => x.username === account.username);
        if (detail === null) {
            detail = {
                game1C : 0, 
                game1W : 0, 
                game2C : 0, 
                game2W : 0, 
                game3C : 0, 
                game3W : 0, 
                username : "",
                wordHistory : []
            }
        }

        const questionToEdit = {
            indexId: i,
            qType : "user",
            qUser : account.username,
            qPass : account.password,
            qEmail : account.email,
            qG1C : detail?.game1C,
            qG1W : detail?.game1W,
            qG2C : detail?.game2C,
            qG2W : detail?.game2W,
            qG3C : detail?.game3C,
            qG3W : detail?.game3W
        }
        const questionToDelete = {
            qType : "user",
            indexId: i
        }

        // @ts-ignore
        document.getElementById(`u${i}`)?.addEventListener("click", ()=>updateEdit(questionToEdit));
        document.getElementById(`ux${i}`)?.addEventListener("click", ()=>deleteItem(questionToDelete));
    }
}


updateGuessingTable()
updateSentenceTable()
updateVocabTable()
updateUserTable()
// @ts-ignore
window.updateGuessingTable = updateGuessingTable;
// @ts-ignore
window.updateSentenceTable = updateSentenceTable;
// @ts-ignore
window.updateVocabTable = updateVocabTable;
// @ts-ignore
window.updateUserTable = updateUserTable;

