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

const pr1 = new Programmer("Nastya", ["Python", "PHP", "Java"])

pr1.code(pr1.stack)

//----------2-----------------------------------------------------------------------------

Programmer.prototype.toString = function () {
    console.log("Hello may name is Oleg")
}

pr1.toString()

//---------3------------------------------------------------------------------------------

const pr2 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const pr3 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const pr4 = new Programmer("Nastya", ["Python", "PHP", "Java", "Scala"]);
const pr5 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const pr6 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const pr7 = new Programmer("Nastya", ["Python", "PHP", "Java", "Kotlin", "JS"]);
const pr8 = new Programmer("Nastya", ["Python", "PHP", "Java"]);
const pr9 = new Programmer("Nastya", ["Python", "PHP", "Java", "C++", "C#"]);

const arrObject = [pr2,pr3,pr4,pr5,pr6,pr7,pr8,pr9];

let resArr = arrObject.filter(item => item.stack.length>4)

console.log(resArr)

//--------4--------------------------------------------------------------------------------

//возможен ли треугольник
//теорема пифагора  гипотенуза кв = катет кв. + катет кв.
//сумма 2ух любых сторон больше чем сумма 3ей стороны (любой)
//класс Point
// Line ===>> Point1 Point2
// function getLength()
// function canTriangleExist()


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const p1 = new Point(21, 51)
const p2 = new Point(44, 83)

class Line {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
}

const l1 = new Line(p1, p2);
const l2 = new Line(new Point(43, 52), new Point(50, 90));
const l3 = new Line(new Point(79, 31), new Point(23, 78));

function getLength({p1, p2}) {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
}

function canTriangleExist(length1, length2, length3) {

    return (length1 + length2 > length3
        && length2 + length3 > length1
        && length3 + length1 > length2);
}

console.log(canTriangleExist(getLength(l1), getLength(l2), getLength(l3)));