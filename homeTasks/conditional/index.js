/* Написать программу, которая выводит название дня недели по его номеру
Если пользователь вводит некорректный день, вывести в консоль сообщение «Incorrect day»
В этом задании нужно обязательно использовать switch
*/

const day = prompt('Введите номер дня недели')

switch (Number(day)) {
    case 1 :
        console.log("Понедельник");
        break;
    case 2 :
        console.log("Вторник");
        break;
    case 3 :
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");;
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Некорректный день");
}

/*Переписать в тернарный оператор следующий код:
const age = +prompt(‘enter your age’);
if (age < 10) {
	console.log(‘hi!’);
} else if (age <  20) {
	console.log(‘hello!’);
} else if (age < 50) {
	console.log(‘good day’);
} else {
	console.log(‘ALOHA!’);
}
*/

const age = +prompt("Enter your age");

console.log(
    age < 10
        ? "hi"
        : age < 20
            ? "hello"
            : age < 50
                ? "Good day"
                : "ALOHA"
)


/*. Написать игру «камень, ножницы, бумага»
Первый игрок вводит слово «rock»,  «scissors» или «paper»
После этого второй игрок делает то же самое
Вывести в консоль кто победил: игрок1 или игрок2 согласно правилам игры
*/

const answerUserOne = prompt("Игрок1, выберите : камень, ножницы или бумага").toLowerCase();
const answerUserTwo = prompt("Игрок2, выберите : камень, ножницы или бумага").toLowerCase();

const rock = "камень";
const scissors = "ножницы";
const paper = "бумага";

if (answerUserOne === rock && answerUserTwo === scissors
    || answerUserOne === scissors && answerUserTwo === paper
    || answerUserOne === paper && answerUserTwo === rock ){
    console.log("Игрок 1 победил")
} else if (answerUserTwo === rock && answerUserOne === scissors
    || answerUserTwo === scissors && answerUserOne === paper
    || answerUserTwo === paper && answerUserOne === rock){
    console.log("Игрок 2 победил")
} else if(answerUserOne === answerUserTwo){
    console.log("Ничья")
} else console.log("Некорректный ответ")