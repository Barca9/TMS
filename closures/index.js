/*
Объект первого класса - это вызываемый объект(функция) который сожет быть передан в качестве значения куда-тоб например другой функции
Функция высшего порядка - это функция котрая принимает или возвращает объект первого класса(функцию)
 */

//-----closures------------------------------------------------

function counterMaker() {
    let a = 0;
    return function () {
        a += 1;
        console.log(a)
    }
}

const counter = counterMaker();
counter();
counter();

//-------partially applied function---------частично применённая функция----------

/*function foo (a, b, c) {
    const result = a + b;
    return function (c) {
        return result + c;
    }
}

const sumWithAandB = foo(4,3);

console.log(sumWithAandB(8))*/

//--------curry-----------карирование------------------------------------


/*const sum = function (a) {
    return function (b) {
        return function (c){
            return a + b + c;
        }
    }
}

const arrowSum = a => b => c => a + b + c;

console.log(sum(5)(1)(3))*/

//-----------------------------------------------

function sum(a, b) {
    return a + b;
}

function higherOrderFunction(foo) {

    return function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            return foo(0, 0)
        }
        return foo(a, b)
    };
}

const coveredSum = higherOrderFunction(sum);

console.log(coveredSum(3,4))


