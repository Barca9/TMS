//getters and setters
//set назначать
// get получить
class Person{
    constructor(name, age) {
        this.name = name;
        this._age = age;                // _ значит что с этим полем мы работаем через геттер и сеттер
        if (age > 120 || age < 0){     //проверка при создании инстанса
            this._age = 0;
        }
    }

    /*constructor(name, age) {
        this.name = name;
        this._age = (age > 120 || age < 0) ? age:0;       // второй вариант

    }*/

 /*   constructor(name, age) {
        this.name = name;
        this._age = 0;                // третий вариант
        this.age = age;
    }*/

    get age(){
        return this._age;
    };

    set age(val){
        if (val >0 && val < 120){
            this._age = val;
        }
    };

    static isAdult({age}){
        return age> 18
    };

    /* если перед методом в классе поставить слово static то этот метод можно будет вызывать
только от имени класса, не от инстансов. Служит для обслуживания инстансов.
!!!До статика, что бы в классе сделать статический метод надо было:
Person.isAdult = function(age){
    return age> 18
}
* */

    #someVal = 10; //сокрытое свойство, недоступно извне, можно использовать внутри класса
    //!!! заменяет поле с нижним подчёркиванием  _age
    get someVal(){
        return this.#someVal + 'bls'
    }

}

const p1 = new Person("John", 23)

console.log(p1.#someVal)

//композиция это когда мы храним в полях каког-то инстанса ссылки на
    //    инстансы других классов

//------наследование-es5--------------------------------------------------

/*
function Animal (name, age){
    this.name = name;
    this.age = age;
}

Animal.prototype.eat = function (food){
    console.log(`${this.name} eats ${food}`);
}

function Human ( profession, name, age){
    Animal.call(this,name,age)    //запускаем конструктор Animal от контекста Human
    this.profession = profession;
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
                                    //теперь можем использовать методы от Animal

Human.prototype.read = function (book){
    console.log(`${this.name} reads ${book}`);
}

const a1 = new Animal('bobik', 32)


const obj = Object.create({a:1});

obj.b = 2;
console.log(obj.b);
*/

//-----------es6-------------------------------------------------------

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat (food){
        console.log(`${this.name} eats ${food}`);
    }
}

class Human extends Animal{                         //указываем от какого класса расширяемся, от суперкласса Энимал
    constructor(profession,name, age ) {
        super(name, age)                            //запускаем спец.функцию super, что бы Animal запустил свой конструктор
        this.profession = profession
    }

    read(book){
        console.log(`${this.name} read ${book}`)
    }
}