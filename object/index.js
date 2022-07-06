
/*
const person ={
    name: 'John',
    age: 23,
    isProgrammer : true,
    size: {
        width:20,
        height: 10
    },
    test : null
}

 " ? " вопр.знак проверяет наличие поля у объекта, если оно есть возвращается значение
поля, если нет то undefined. Позволяет получить значение свойства, находящегося на любом уровне вложенности в цепочке
 связанных между собой объектов.  undefined вернётся если поле равняется null, undefined или его нет.
console.log(person.test?.height); //undefined

console.log(age in person) //true   in  - проверяет на наличие поля

for (let key in person) {           // key - строка, названия полей
    console.log(person[key]);       // выводит значения полей
}

 */

function Person (name) {
    this.name = name
}

const n = new Person('nastya')


console.log(Person.prototype)
console.log(n.__proto__)
console.log(Person.prototype === n.__proto__)

