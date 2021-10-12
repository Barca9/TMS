/*
1. Написать программу, которая выводит среднее
арифметическое n чисел введенных пользователем.
Ввод чисел прекращается тогда, когда нажали «отмена», после чего выводится
среднее арифметическое.
*/

let sum = 0;
let i;

for(i = 0 ;; i++){
    let userNumber = prompt("Введите число");
    if(isNaN(userNumber)){
        i--;
        continue;
    }
    if (userNumber===null){
        break;
    }
    userNumber = +userNumber
    sum += userNumber;
}

if(i !== 0){
    console.log(sum/i);
}


/*2. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.*/

let userNumber = +prompt("Введите число");

if (userNumber > 0){
    for (let i = userNumber; i>=0; i--){
        console.log(i);
    }
} else if (userNumber < 0){
    for (let i = userNumber; i<=0;i++){
        console.log(i);
    }
}


/*3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
каждое последующее число должно быть больше предыдущего, иначе вывести
ошибку.*/

let prevNumber = prompt("Ведите число");

for (let i = 0; i<4; i++){

    let currentNumber = +prompt("Введите число");

    if(currentNumber < prevNumber){
        console.log("ERROR")
        break;
    } else {
        prevNumber = currentNumber;
    }
}


/*
4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
(в слове "заика") равное этому числу.
    Например:
Вводим 3
Программа выводит "зазазаика"
Вводим 5
Программа выводит "зазазазазаика"*/

let result = 'ика';
let numberUsers = +prompt("Введите число");

for (let i = 0; i < numberUsers; i++){
    result = "за" + result
}

console.log(result)