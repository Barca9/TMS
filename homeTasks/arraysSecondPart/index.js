/*
1.	Даны два массива: oboltusy = [‘Евлампий’,’Никодим’,’Акакий’,’Поликарп’]; и
otlichniki = [‘Лукьян’,’Феофил’,’Афиноген’]; Оказалось, что Никодим начал учиться
хорошо и поэтому его необходимо перевести в отличники. Напишите программу, которая находит под каким номером
идет имя ‘Никодим’ в массиве. После чего программа должна вырезать имя из массива oboltusy и вставлять
его в массив otlichniki.*/

let oboltusy = ['Евлампий','Никодим','Акакий','Поликарп'];
let otlichniki = ['Лукьян','Феофил','Афиноген'];

otlichniki.push(...oboltusy.splice(oboltusy.indexOf("Никодим"),1));
console.log(otlichniki);

/*
2. Напишите функцию hyphenDestroyer(), которая преобразует строки вида «my-short-string» в «my short string».
То есть, дефисы удаляются и вместо них появляются пробелы.
    Например:
hyphenDestroyer ("background-color") === 'background сolor';
hyphenDestroyer ("list-style-image") ==='list style image';
hyphenDestroyer () === 'webkit transition’;
*/

function hyphenDestroyer(str){
     return str.split("-").join(' ')
}

console.log(hyphenDestroyer("-webkit-transition"))

/*
3. Дана строка var str = ‘Мама мыла раму’; Написать функцию toWash(str, thing);
Где str - это строка в которой надо поменять последнее слово, а thing - это, то самое слово которое надо вставить в конец строки.
    Функция должна возвращать строку.
    Например:
console.log( toWash(str, ’машину’) ); // ‘Мама мыла машину’
console.log( toWash(str, ’рябину’) ); // ‘Мама мыла рябину’
console.log( toWash(str, ‘картину’) ); // ‘Мама мыла картину’
*/

function toWash(str, thing) {

  let res = str.split(' ')
  res.splice(-1, 1, thing)
  return res.join(' ')

}
console.log(toWash("Мама мыла раму", "кактус"))

/*
4. Дан массив
arr = [4,-9,49,12, -2, -4, 5, -10, -22, 13, 14];
a) Создайте на основе arr, новый массив где каждый элемент имеет противоположный знак в отличии от оригинального
([-4,9,-49,-12,2,4,-5, 10, 22, -13, -14])
b) отфильтруйте массив так, чтобы в результате получился массив только положительных чисел
c) с помощью reduce посчитайте сумму только четных чисел
*/

let arr = [4,-9,49,12, -2, -4, 5, -10, -22, 13, 14];

const changesSignArray = arr.map(item=> item *=-1 )

const arrayOfPositiveNumbers = arr.filter( item => item>0 );

const sumOfEvenNumbers = arr.reduce((count,item)=>{
    if(item%2===0){
        count += item;
    }
    return count
},0)





