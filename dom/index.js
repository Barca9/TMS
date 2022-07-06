//Document Object Model

/*console.dir(document.body);*/

//нода - это любой элемент в html, даже перенос строки и коммент считаются нодой
//childNodes - массиваподобная коллекция всех нод
//children - это массиваподобная коллекция нод-элементов (само важное) !!

//const ulMenu = document.body.children[0];

const liCollection = document.getElementsByClassName('item') //всегда возвращает коллекцию, к самому элементу надо обращаться по индексу [0]

const liCollection2 = document.getElementsByTagName('li')

const itemById = document.getElementById('menu');

const selector = document.querySelector('li'); //возвратит 1ую li

const selectors = document.querySelectorAll('li');  //все li, есди написать 'ul>li' то возвратит конкретные li, можно использовать любые уточнения
// !!! querySelectorAll/querySelector возвратит node-лист, мёртвую коллекцию, она не отслеживает  изменения в коде

const a = liCollection[1].getElementsByTagName('a');  //можно совмещать методы

constElement = [...liCollection2]  //так можно сделать из коллекции массив
// или использовав Array.from(liCollecton)

//любая нода хранит в себе ссылку на детей, родителей и своих соседей
const someLi = liCollection[2];
someLi.nextElementSibling;
someLi.previousElementSibling;
someLi.parentElement;
someLi.children;

//-------------события-------------------------------------------------

const li = liCollection[2];

li.onclick = function (){
    console.log('function присвоена onclick-у')
}
const anotherLi = liCollection[1]

function clickHandler (){
    console.log('навешана через ссылку')
    console.log(this)
}
anotherLi.onclick = clickHandler;

li.addEventListener('click', clickHandler);  //принимает событие и функцию
li.removeEventListener('click', clickHandler)  //удаляет слушателя

//------------всплытие и погружние------------------------------------

const div = document.getElementById('parent');
const p = document.getElementById('textP');
const btn = document.getElementById('btn');

/*
function clicksHandler(){
    console.log(this.nodeName);
}
function clicksHandlerCopy(){
    console.log(this.nodeName);
}
*/

/*
div.addEventListener('click',clicksHandler)
p.addEventListener('click',clicksHandler)
btn.addEventListener('click',clicksHandler)   */
// при клике сразу вызовется слушатель на btn => p => div, всё это произойдёт при всплытии!!
/*
div.addEventListener('click',clicksHandler)
p.addEventListener('click',clicksHandler, true)
btn.addEventListener('click',clicksHandler);
//3-им переметром устанвливаем перехватчик, который отработает при погружении. элемент вызовится при погружении
// p => btn => div
//если на div буде висеть друг за другом 2 слушателя с одинаковыми функциями с перехавтом при погружении, то один их них не сработает
//потому что происходит в одно мгновение, если же функции будут разные то сработают

div.addEventListener('click',clicksHandler,true)
div.addEventListener('click',clicksHandlerCopy, true)
p.addEventListener('click',clicksHandler)
btn.addEventListener('click',clicksHandler);
*/
//div => div => btn => p

//--------------stopPropagation--------stopImmediatePropagation----------------------

function clicksHandler(event){
   //b  event.stopPropagation()
 /* if(this.nodeName === 'P'){       //можно делать условия
      event.stopPropagation()
  }*/
    console.log(this.nodeName);
}
function clicksHandlerCopy(event){
    event.stopImmediatePropagation()     //выключение всех последующих обработчиков навешанных на любые элементы
    console.log(this.nodeName);
}

div.addEventListener('click',clicksHandler, true)
p.addEventListener('click',clicksHandler,true)
p.addEventListener('click',clicksHandlerCopy,true)
btn.addEventListener('click',clicksHandler);
// => div
//stopPropagation - прекращает все цепочки вызовов, цепочка заканчивается на элементе с stopPropagation
//работает на всплытии!!!!!!при false

// -------------создание и добавление элементов---------------------------------------------

const add = document.getElementById('add');
const ul = document.getElementById('menu')

function addElementLi()
{
    const elemLi =document.createElement('li');   //создаём элемент
    const elemA = document.createElement('a');

    elemLi.append(elemA);
    elemA.href = 'https://google.com';
   /*elemA.textContent = 'Some text'         //добавляем текст, но он не делится местом*/
    const text = document.createTextNode('some text')        //текст лучше создавать как ноду, потому что не уничтожает детей
    elemA.append(text);
    ul.append(elemLi);                      //добавляем элемент в дом, к ul
//если сразу добавить текст через textContent, а потом добавлять через append другие элементы, то так сработает
}

add.addEventListener('click',addElementLi)

//---------classList----------------------------------------------------------

const classBtn = document.getElementById('classBtn');
const victim = document.getElementById('victim');

function handler (){
    victim.classList.add('victim')     //добавление класса
    //victim.classList.remove('victim')     //удаление класса
    //victim.classList.replace('victim', 'test')    //изменение класса
    //victim.classList.contains('victim')      //проверка на наличие класса у элемента
    victim.classList.toggle('victim')    //переключение класса
}
victim.addEventListener('click',handler);

//-----удаление элементов-----------------------------------------

function killMySelf (){
    this.remove()
}

