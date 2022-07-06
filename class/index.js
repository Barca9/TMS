/*
function Person (){
     //this = {}
    this.name = 'John';
    this.age = 23;
    //return this    по умолчанию
    //из объекта мы можем возвращать только объект
    //return {a : 2}
}

let p1 = new Person();
//функция которая вызвана через new всегда возвращает объект

console.log(p1 instanceof Person);  //проверяет на принадлежность к классу Person

//p1 = null;       уничтожает объект
*/

//--------------------------------------------------------------------------
/*
function Person (name, age){
    //this = {}
    this.name = name;
    this.age = age;

    this.howYear = function (){
      console.log(`${this.age} years`)
    };

    this.run = () => {
        console.log(`${this.name} runs`)
    };
}
//стрелочная функция сохраняет в себе контекст в момент рождения потому что
//она рождена в скоупе другой функции

const p1 = new Person('Peter', 49);
const p2 = new Person('Iva', 33);

p1.run()         //this с контекстом Peter
p2.howYear()    //This с контекстом Iva

const f1 = p1.run;
const f2 = p1.howYear;

f1()      //контекст утерян
f2()      //контекст сохранился

setTimeout(p1.run, 1000)   //контекст сохранился
*/

//--------------------------------------------------------------------------------------------

//Person - это объект
// у каждого объекта есть прототип

console.log(Person.prototype)   //конструктор на Person, сам на себя

console.log(Person.prototype.constructor === Person)   //true

const arr = new Array();

console.log( Array.prototype)  //все методы массива в прототайпе

console.log(arr)    //хранит в себе ссылку на Array.prototype


//p1.__proto__ ====>>>> Person.prototype

/*console.log( p1.__proto__);
console.log( p1.__proto__ === Person.prototype)   //true*/

// __proto__ это ссылка на объект prototype со всеми методами
//  т.е. это сслыка на сумку родителя в которой лежат методы

Person.prototype.sing = () =>{};  //так можно добавить метод в класс Person

//-------------------------------------------------------------------------------------

/*function Person (name, age){
    //this = {}
    this.name = name;
    this.age = age;
}

const p1 = new Person('Peter', 49);
const p2 = new Person('Iva', 33);
const p3 = new Person.prototype.constructor("lori", 100)

Person.prototype.run = () => {              //добавили метод в Person.prototype
    console.log(`${this.name} runs`)
};

Person.prototype.howYear = function (){    //добавили метод в Person.prototype, но в стрелочной функции контекст будет утерян
    console.log(`${this.age} years`)
};

p1.run()

const p4 = new p2.__proto__.constructor('gari', 14)

console.log(p4)*/

//-------------ES6------------------------------------------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    run() {
        console.log(`${this.name} runs`)   //записали етод в prototype
    }
}

const p1 = new Person('Peter', 49);
const p2 = new Person('Iva', 33);
