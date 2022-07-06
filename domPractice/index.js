const userBtn = document.getElementById('userBtn');
const userInput = document.getElementById('userInput');
const divWithImg = document.getElementById('man-wrapper');
const img = document.getElementById('img')


function getSecretWord() {
    const secretWordColl = ["attention", "communication", "attractive", "programming", "access"];
    return secretWordColl[Math.floor(Math.random() * secretWordColl.length)];
}
// возвращает одно секретное слово

const secretWord = getSecretWord();
console.log(secretWord);

function createSpan() {
    const spanElement = document.createElement('span');
    spanElement.textContent = '_';
    return spanElement;
}
// возвращает одно _ подчёркивание

function generateSpans(word, anchor) {
    word.split('').forEach(() => anchor.append(createSpan()));
}
// по секретному слову создаёт определённое количество спанов _ _ _

generateSpans(secretWord, document.getElementById('secretWordWrapper'));

function changeImgAndBackground(anchor) {
    let numberNameImg = Number(anchor.src.split('.')[0]);
    if (numberNameImg !== 4) {
        anchor.src = `image/${++numberNameImg}.png`
    } else {
        divWithImg.classList.add('red');
        userBtn.disabled = true;
    }
}

const spans = [...document.getElementById('secretWordWrapper').children];

userBtn.addEventListener('click', function () {

    const userLetter = userInput.value.toLowerCase();
    const foundLetters = secretWord
        .split('')
        .map((letter, letterIndex) =>
            userLetter === letter ? letterIndex : undefined
        )
        .filter((letter) => letter !== undefined || letter === 0);

    if (foundLetters.length) {
        spans.forEach((span, index) => {
            if (foundLetters.includes(index)) {
                span.textContent = userLetter;
            }
        });
        if (spans.every(span => span.textContent !== '_')) {
            divWithImg.classList.add('green');
            userBtn.disabled = true;                    //!!!!!!!!проверить
        }
        //проверка на выигрыш (проверить остался ли хотя бы один спан со слешем)
        //every()
    } else {
        changeImgAndBackground(img)
        //организовать смену картинок
        //проверка на проигрыш, 4ая картинка
        //
    }
    userInput.value = '';

    /*const foundLettersAgain = secretWord.split('')
        .reduce((resArr, letter, letterIndex) => {
            return resArr.concat(letter === userLetter ? {
                val: letter,
                letterIndex
            } : []);
        }, [])*/
});


//менять фон пригрыш/выигрыш
//очищать инпут после нажатия кнопки
// при выигрыше проигрыше отключать кнопку ok,
//создать кнопу new game
//


