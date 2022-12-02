const getElement = (id) => {
    let element = document.getElementById(id);
    if (element === null) {
        throw new Error("Element not found");
    }
    return element;
};
const setElemText = (element, text) => {
    element.innerText = text;
};

function setProgress(spinner, spinnerText, delivered, refund, total) {
    let deliveredPercents = Math.round(delivered / total * 100) / 100 * 100;
    let refundPercents = Math.round(refund / total * 100) / 100 * 100;
    spinner.style.background =
        `conic-gradient(rgb(48, 104, 155) 0% ${deliveredPercents}%,red ${deliveredPercents}% ${deliveredPercents + refundPercents}%,
        rgb(99, 100, 102) ${deliveredPercents + refundPercents}%`;
    setElemText(spinnerText, `${Math.round((refund + delivered) / total * 100) / 100 * 100}%`);
}

const setG1Progress = () => {

    let detailUser = localStorage.getItem('detailUser') ? JSON.parse(localStorage.getItem('detailUser')) : [];
    let user = detailUser.find(x=>x.username == localStorage.getItem('active'));
    if (user === undefined) {
        return;
    }
 
    let correct = user.game1C;
    let wrong = user.game1W;

    let g1C = getElement('g1C');
    let g1W = getElement('g1W');

    setElemText(g1C, `Correct: ${correct}`);
    setElemText(g1W, `Wrong: ${wrong}`);

    let spinner = getElement("g1ProgressSpinner");
    let spinnerText = getElement("g1MiddleCircle");
    setProgress(spinner, spinnerText, correct, wrong, correct + wrong);
};


const setG2Progress = () => {
    let detailUser = localStorage.getItem('detailUser') ? JSON.parse(localStorage.getItem('detailUser')) : [];
    let user = detailUser.find(x=>x.username == localStorage.getItem('active'));
    if (user === undefined) {
        return;
    }
 
    let correct = user.game2C;
    let wrong = user.game2W;

    let g2C = getElement('g2C');
    let g2W = getElement('g2W');

    setElemText(g2C, `Correct: ${correct}`);
    setElemText(g2W, `Wrong: ${wrong}`);

    let spinner = getElement("g2ProgressSpinner");
    let spinnerText = getElement("g2MiddleCircle");
    setProgress(spinner, spinnerText, correct, wrong, correct + wrong);
};

const setG3Progress = () => {
    let detailUser = localStorage.getItem('detailUser') ? JSON.parse(localStorage.getItem('detailUser')) : [];
    let user = detailUser.find(x=>x.username == localStorage.getItem('active'));
    if (user === undefined) {
        return;
    }
 
    let correct = user.game3C;
    let wrong = user.game3W;

    let g3C = getElement('g3C');
    let g3W = getElement('g3W');

    setElemText(g3C, `Correct: ${correct}`);
    setElemText(g3W, `Wrong: ${wrong}`);

    let spinner = getElement("g3ProgressSpinner");
    let spinnerText = getElement("g3MiddleCircle");
    setProgress(spinner, spinnerText, correct, wrong, correct + wrong);
};

const setHistory = () => {
    let detailUser = localStorage.getItem('detailUser') ? JSON.parse(localStorage.getItem('detailUser')) : [];
    let user = detailUser.find(x=>x.username == localStorage.getItem('active'));
    if (user === undefined) {
        return;
    }

    const historyElem = getElement('HistoryTableBody');
    historyElem.innerHTML = "";
 
    let wordHistory = user.wordHistory;
    for (const word of wordHistory) {
        historyElem.innerHTML += `
            <tr>
                <td>${word}</td>
            </tr>
        `;
    }
};

const showProgress = () => {
    if(localStorage.getItem('active') === null) {
        getElement('progressDiv').style.display = 'none';
        getElement('historyDiv').style.display = 'none';
    }
    else {
        getElement('progressDiv').style.display = 'flex';
        getElement('historyDiv').style.display = 'flex';
    }
}

setG1Progress();
setG2Progress();
setG3Progress();
setHistory();
showProgress();

setInterval((setG1Progress), 4000);
setInterval((setG2Progress), 4000);
setInterval((setG3Progress), 4000);
setInterval((setHistory), 4000);
setInterval((showProgress), 1000);