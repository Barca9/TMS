/*1.	Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]),
и методом code (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»).
Метод code должен храниться в прототипе класса.
2.	Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»
3.   Создать массив из 10 случайных инстансов Programmer, и отфильтровать его с помощью метода filter так, чтобы в результирующий
массив попали только те Programmer, у которы длина массива stack больше 4.
*/
//----------1------------------------------------------------------------------------
class Programmer{
    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }
    code (stack){
        for (let item of stack){
            console.log(`Oleg is coding on ${item}`)
        }
    }
}

const p1 = new Programmer("Nastya", ["Python", "PHP", "Java"])

p1.code(p1.stack)

//----------2-----------------------------------------------------------------------------

Programmer.prototype.toString = function () {
    console.log("Hello may name is Oleg")
}

p1.toString()

//---------3------------------------------------------------------------------------------

/*
const p2 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const p3 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const p4 = new Programmer("Nastya", ["Python", "PHP", "Java", "Scala"]);
const p5 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const p6 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const p7 = new Programmer("Nastya", ["Python", "PHP", "Java", "Kotlin", "JS"]);
const p8 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const p9 = new Programmer("Nastya", ["Python", "PHP", "Java", "C++", "C#"]);

const arrObject = [p2,p3,p4,p5,p6,p7,p8,p9];

let resArr = arrObject.filter(item => item.stack.length>4)

console.log(resArr)*/

