console.log("a")

// @ts-ignore
document.getElementById('indexId')?.innerText = "2"

const updateEdit = ( questionToEdit : {
    indexId : number,
    qType : string,
    imgDir : string,
    op1 : string,
    op2 : string,
    op3 : string,
    op4 : string,
    answer: string,
    qWord : string,
    qAudio : string,
    qSpell : string,
    qMean : string
}) => {
    const {indexId, qType, imgDir, op1, op2, op3, op4, answer, qAudio, qMean, qSpell, qWord} = questionToEdit
    console.log("ij");
    
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

    const audioElem = document.getElementById('qAudio')
    if (audioElem === null) {
        return;
    }

    // @ts-ignore
    audioElem.value = qAudio


    //@ts-ignore
    signInLogOutFunc()
}

const deleteItem = (questionToDelete : {
    indexId : number,
    qType : string,
}) => {
    console.log("canssn");
    console.log(questionToDelete);
    
    
    const {indexId, qType} = questionToDelete;
    if (qType === 'question_list') {
        // @ts-ignore
        const item = JSON.parse(localStorage.getItem('question_list'))
        item.splice(indexId, 1)
        localStorage.setItem('question_list', JSON.stringify(item))
        updateGuessingTable()
    }
    if (qType === 'question_sentence') {
        // @ts-ignore
        const item = JSON.parse(localStorage.getItem('question_sentence'))
        item.splice(indexId, 1)
        localStorage.setItem('question_sentence', JSON.stringify(item))
        updateSentenceTable()
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

updateGuessingTable()
updateSentenceTable()

// @ts-ignore
window.updateGuessingTable = updateGuessingTable;
// @ts-ignore
window.updateSentenceTable = updateSentenceTable;

