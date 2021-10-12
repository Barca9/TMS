/*let arr = ['john', 'david', 'aristarkh', 'mitrofan', 'evlampij', 'petya', 'olga'];
let arrNumb = [65, 34, 12, 46, 93, 28, 71, 36]*/

/*Найти в массиве петю и поменять на наташу*/

/*for (let i = 0; i<arr.length; i++ ){
    if(arr[i]==="petya"){
        arr[i] = "Наташа";
    }
}
console.log(arr);*/

/*Добавить каждому элементу массива Mrs. и вывести в консоль*/

/*for (let i = 0; i < arr.length; i++ ){
    arr[i] = "Mrs." + arr[i];
}
console.log(arr);*/


/*В массиве чисел найти наибольшее и вывести его в консооль*/

/*let maxNumb = arrNumb[0];
for (let i = 1; i < arrNumb.length; i++){
    if (arrNumb[i] > maxNumb) {
        maxNumb = arrNumb[i];
    }
}
console.log(maxNumb);*/


/*Найти среднее арифмитическое всех элементов в массиве*/

/*
let sum = 0;
for (let i = 0; i<arrNumb.length; i++ ){
    sum += arr[i];

}
console.log(sum/arr.length)*/

/* С помощью цикла создать пустой массив с 1 и 0, первая должна быть 1. Длина массива должна быть 8*/

/*
let arr = [];

for (let i = 0; i<8; i++ ){
    arr[0] = 1;
    if (arr[i] === 1){
        arr[arr.length] = 0;
    } else  arr[arr.length] = 1;
}
console.log(arr);

*/
/*Создать пустой массив, заполнить массив нечетными числами. Длина массива должна быть 10.*/

/*let arrEmpty = [];
let number = 1;

for (let i=0; i<10; i++){
    arrEmpty[i] = number;
    number+=2;
}
console.log(arrEmpty);*/

/*Вывести на экран количество четных чисел массива arrNum.*/

/*
let counter = 0;

for (let i=0; i<arrNumb.length; i++){
    if (arrNumb[i]%2 === 0){
        counter++;
    }
}
console.log(counter);
*/

/*создать пустой массив, заполнить его элементами, где значение
 каджого элемента равно квадрату его номера. (длина массива должна равнятся 8)
*/
/*
let arrEmpty = [];

for (let i = 0; i < 8; i++) {
    arrEmpty[i] = i * i;
}
console.log(arrEmpty);
*/
/*------------------------------------------------------------------------*/

let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

/*1.1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
1.2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
1.3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
1.4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
1.5. Отсортируйте получившийся массив по алфавиту*/

/*
let nameUsers = prompt("Введите имя");
for (let i = 0; i < people1.length; i++ ){
    if (people1[i] === nameUsers) {
        people2.push(nameUsers);
    }
}

console.log(people2);*/



/*
let nameUsers = prompt("Введите имя");
console.log(people2);
for (let i = 0; i < people2.length; i++){

    if (people2[i] === nameUsers){
        //(people.include(nameUsers)
        people2.splice(people2.indexOf(people2[i]), 1);
    }
}

console.log(people2);*/


/*
let arr = [];

for (let i = 0; i < people1.length; i++){
    for (let j = 0 ; j < people2.length; j++){
        if (people1[i] === people2[j]){
            arr.push(people2[j])
        }
    }
}
console.log(arr)
*/




/*for (let i = 0; i < people1.length; i++) {
    for (let j = 0; j < people2.length; j++) {
        if(people1[i] === people2[j])


    }
}*/

let unitedArr = people1.concat(people2)

for (let i = 0; i< unitedArr; i++){
    for (let j = i+1; j< unitedArr; j++){
        if(unitedArr[i] === unitedArr[j]){
            unitedArr.splice(j,1)
        }
    }
}
console.log(unitedArr)

/*
2.1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив*/

/*const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
let newArr = arr.splice(2,3);
console.log(newArr);*/


/*Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
Переставить "Janett", "Franz" в начало массива
*/
/*let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

let newArr = arr.splice(5,2);
arr.unshift(newArr[0], newArr[1]);

console.log(arr)*/

/*2.3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
Заменить "Eddie", "Janett" на "Oleg","Valerchik"
*/

/*
let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

arr.splice(4, 2, "Oleg", "Valerchik")
console.log(arr)*/


/*2.4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
"Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
*/

/*let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

arr.reverse().splice(0, 4, "Mitrofan", "Mitrofan","Mitrofan","Mitrofan")
console.log(arr)*/


/*2.5. Даны два массива
["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
взять из второго массива все имена начина с "Aristarkh" (включительно)
и добавить их в 1ый массив (не должно получится двумерного массива)

*/

/*
let arrOne = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
let arrTwo = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

let newArr = arrTwo.splice(2,3)
arrOne.push(newArr[0], newArr[1], newArr[2])
console.log(arrOne)
*/


/*. Создайте массив из 10 чисел. Найдите и выведите на экран наименьший четный элемент массива.*/

/*let arrNumb = [65,32,44,9,33,73,12,42,50,3];
let minHonestItem;

for (let i = 0; i < arrNumb.length; i++){
    if(arrNumb[i] % 2 === 0){
        minHonestItem = arrNumb[i]
    }
}
for (let i = 0; i < arrNumb.length; i++){
    if(arrNumb[i] % 2 === 0 && arrNumb[i]< minHonestItem){
        minHonestItem = arrNumb[i];
    }
}

console.log(minHonestItem)*/

/*4.  Создать массив из 10 чисел. Среди элементов с нечетными номерами найдите наибольший элемент массива, который делится на 3*/

/*
let arrNumb = [65,32,44,9,33,73,12,42,50,3];
let maxItem;

for (let i = 0; i < arrNumb.length; i++){
    if(i % 2 !== 0 && arrNumb[i]%3 === 0){
        maxItem = arrNumb[i];
    }
}
for (let i = 0; i < arrNumb.length; i++){
    if(i % 2 !== 0 && arrNumb[i]> maxItem && arrNumb[i]%3 === 0){
        maxItem = arrNumb[i];
    }
}

console.log(maxItem)
*/

/*5. Создайте массив из 10 чисел. Найдите три последовательных элемента в массиве, сумма которых максимальна*/

/*
let arrNumb = [65,32,44,9,33,73,12,42,50,3];
let sum = 0;

for (let i = 0; i < arrNumb.length; i + 3){
    sum = arrNumb[i] + arrNumb[i+1] + arrNumb[i+2]

}

console.log(sum)*/
