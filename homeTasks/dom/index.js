/* Напишите программу, в которой нужно угадать в какой
кнопке нет бомбы
 Бомбы спрятаны в двух из трех кнопок (только одна
кнопка не взорвется)
 При нажатии на кнопку с бомбой должен выводится alert
с надписью «BOOOOOOM!».
 При нажатии на кнопку без бомбы должен выводится
alert с надписью «ПРОНЕСЛО»*/


const boomImage = 'https://images.unsplash.com/photo-1609790259520-cf7bce1bad5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const okImage = 'https://images.unsplash.com/photo-1596230529625-7ee10f7b09b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80';

const oneButton = document.getElementById('buttonOne');
const secondButton = document.getElementById('buttonTwo');
const threeButton = document.getElementById('buttonThree')

function ternOffAllClicks() {
    oneButton.removeEventListener('click', changesImgOnClick)
    secondButton.removeEventListener('click', changesImgOnClick)
    threeButton.removeEventListener('click', changesImgOnClick)
}
//-----------------вариант с одной бомбой----------------------------------
/*function changesImgOnClickMaker () {
    let counter = 0;
    return function () {
        let randomNumb = Math.floor(Math.random() * 3 + 1);
        if (randomNumb % 2 === 0) {
            this.src = boomImage
            ternOffAllClicks()
            console.log("YOU LOSE")
        } else if (randomNumb % 2 !== 0) {
            this.src = okImage
            counter++;
        } else if (randomNumb % 2 !== 0 && counter === 2) {
            console.log("YOU WIN")
            ternOffAllClicks()
        }
    }
}

const changesImgOnClick = changesImgOnClickMaker();*/

//-------------------вариант с двумя бомбами--------------------------------
function changesImgOnClickMaker() {
    let randomNumb = Math.floor(Math.random() * 4 + 1);
    return function () {
        if (+(this.alt) !== randomNumb) {
            this.src = boomImage;
            console.log("YOU LOSE")
            ternOffAllClicks()
        } else {
            this.src = okImage;
            console.log("YOU WIN")
            ternOffAllClicks()
        }
    }
}
const changesImgOnClick = changesImgOnClickMaker();

oneButton.addEventListener('click', changesImgOnClick)
secondButton.addEventListener('click', changesImgOnClick)
threeButton.addEventListener('click', changesImgOnClick)
