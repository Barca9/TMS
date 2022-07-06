const person = {
    name: 'John',
    age: 23,
    _city: ''
};

Object.defineProperty(person,'city',{              //принимает объект, новое свойство и пустой объект для дискрипторов
    enumerable: true,     // вляиет на перечисление свойства
    configurable: true,   //false - нельзя удалить и перезаписать в будущем все дсикрипторы этого свойства(city)
    //writable: true,      можно\нельзя перезаписывать        нельзя использовать при get/set
    //value: 'Boston',     нельзя использовать при get/set
    get(){
        return this._city;
    },
    set(val){
        this._city = val;    //если будет просто set(val){}   то перезаписываться значение не будет
    }
});

Object.defineProperty(person,'age', {   //можно поменять дискрипторы для уже существующего поля
    writable:false,
})

//можно создать/поменять дискрипторы нескольких свойств за раз
Object.defineProperties(person,{
    city:{
        writable: false,
        value: "Boston"
    },
    stack: {
        configurable: true,
        value: ['HTML', 'CSS']
    }
})  //те дикскрипторы котрые мы не описываем в defineProperties становятся по умолчанию false
//лучше описывать все дискрипторы


Object.getOwnPropertyDescriptors(person)   //показывает все дискрипторы свойств у объекта
Object.getOwnPropertyDescriptor(person, 'age');  //дискрипторы для одного свойства

Object.preventExtensions(person);   //объект стал не расширяем, не можем добавить новое свойство
Object.isExtensible(person);       //проверяет на расширяемость
Object.seal(person)                 // не позволяет расширять и удалять поля
Object.isSealed(person)            //проверка
Object.freeze(person);            //не позволяет расширять, перезаписывать и удалять свойства
Object.isFrozen(person);         //проверка на freeze
//на вложенные объекты в объекте эти методы не работают, только 1ый уровень

Object.keys(person) // возвращает массив ключей объекта

Object.is(NaN, NaN )   // является ли одним и тем же объектом или примтивом

Object.assign({a:2}, {b:3})   // возвращает новый объект с полями из двух объектов, похоже на конкат

const a = {a:1};
const b = {a:2, c:4};
const c = {a:9, b:6};

const res = {
    ...a,
    ...b,
    ...c
}

const result = Object.entries(person);  //из объекта получаем двумерный массив
console.log(result)
const obj = Object.fromEntries(result);   //из двумерного массива получаем объект
console.log(obj)