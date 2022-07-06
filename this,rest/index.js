/*//this - ссылка на контекст вызова
function f (){
    console.log("wtf")
}

function commonRun(place){
    console.log(`${this.name} run to ${place}`)
}

const person = {
    name: "john",
    age: 15,
    run: commonRun,
    size: {
        width: 10,
        height: 20
    }
}

const person2 = {
    name: "David",
    age: 23,
    city: "Washington",
    run: function (){
        console.log(`${this.name} RUUNS`)
    }
}

person.run('bar')  //  john run to bar

const func = person2.run
func()                //контекст на виндовс

setTimeout(person.run,3000)  //контекст виндов

//Bind - возвращает новую функцию с новым контекстом
//при помощи bind можно копировать функцию
const commonCopy = commonRun.bind() //commonCopy - копия функции*/

/*
//rest
//упаковывает оставишиейся значения в массив, автоматический создаёт новый массив

const add = (...someVal) => {
    console.log(someVal);
}
add(5);

//spread
//распаковывает из массива

const arr = [4, 6, 20, 12, 91]

console.log(Math.max(...arr))

//копируем массив при помощи spread
const arr2 = [55, 55, 55, 55]

const result = [...arr, ...arr2, true, false, 'nastya']

const copyArr = [...arr]


//districturization

const arrName = ['Nastya', 'Anton', 'Masha'];

const [a1, a2, a3] = arrName;

console.log(a2)

//автоматически дестриктурирует в аргументах
const func = ([a,b,c]) => {
return b
}
func([1,2,3])
*/

const func = ([a, b, c] = [10, 10, 10]) => {
    return a
}
//диструктуризация объектов
/*const person2 = {
name: 'peter',
    age: 100,
    run:commonRun,
    size: {
        width: 10,
        height: 20
    }
}*/

/*
const {name, age, size:{width,height}} = person; // тут, имена констант должны совпадать с именами полей объекта
const {name : personName} = person //задаём новые имена
const {name : personName1 = "petya"} = person //значение по умолчанию
const {size: {width, height} = {width:1, height:2}} = person //начение по умолчанию
сonst {age, ...val} = person2; //деструктуризация с рестом

//копирование объекта со спредом

const personCopy = {...person2};

const personCopy1 = {
    ...person2,
    size: {...size},
    run: person2.run.bind(personCopy1)
}

*/

