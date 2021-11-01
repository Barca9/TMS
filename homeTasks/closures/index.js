/*1. Создать функцию «переключатель» toggleMe(),
которая при вызове чередует возвращаемые булевы
значения (true, false).*/

function toggleMeMaker() {
    let bool = true;
    return function () {
        bool = !bool;
        return bool;
    }
}

const toggleMe = toggleMeMaker();

console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());


/*2. Создать функцию funcCounter(), которая способна
считать количество своих вызовов. Если передать в эту
функцию число меньше 100, то функция считает
количество вызовов от этого числа до бесконечности,
если передать число больше 100, то функция считает
количество от этого числа до 0*/

function funcCounterMaker() {
    let counter = 0;
    let isNumberUpp = true;

    return function (number) {
        if (number !== undefined) {
            counter = number;
            isNumberUpp = !(number > 100)
        }

        if (isNumberUpp) {
            return ++counter;
        }else if (counter === 0){
            return 0;
        } else return --counter;
    }
}

const funcCounter = funcCounterMaker();


console.log(funcCounter());
console.log(funcCounter());
console.log(funcCounter(20));
console.log(funcCounter());
console.log(funcCounter());
console.log(funcCounter(120));
console.log(funcCounter());
console.log(funcCounter());


/*
3. Создать функцию classNameEditor(), которая
принимает строку с названием класса и добавляет
его в класс, если вторым параметром было
передано true, если вторым параметром было
передано false, то функция пытается удалить из
класса переданное имя. Если удаление не было
совершено, то просто вернуть строку с названием
класса. Функция должна возвращать текущее
название класса.*/

function classNameEditorMaker(){
    let className = '';
    return function (newClassName, isAdding) {
        if (newClassName && isAdding) {
            className = ` ${newClassName}`
        } else if (className && !isAdding){
           const classNameArr = className.split(" ");
           const  classNameToDeleteIndex = classNameArr.indexOf(newClassName);

           if(classNameToDeleteIndex > 0){
               classNameArr.splice(classNameToDeleteIndex,1);
               className = classNameArr.join(' ');
           }
        }
        return className.trim();
    }
}

const classNameEditor = classNameEditorMaker();

console.log("test", true);
console.log("smth", true);

