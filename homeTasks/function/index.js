/*
1.Написать функцию, которая находит сумму чисел от 100 до 200 кратных переданному функции числу
2. Написать функцию, которая принимает массив и степень. Функция возвращает массив, в котором каждое число массива возведено в указанную степень.
3. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном. Массив, который возвращает функция [1,4,6,74].
4. Написать функцию, которая принимает случайный двумерный массив (разной длины) из 8 элементов. Функция возвращает тот массив сумма элементов которого наибольшая.*/

/*
function findTheAmount (n) {
    let sum = 0;
    for (let i = 100; i < 200; i++){
        if(i%n === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(findTheAmount(43))*/

/*
function exponentiateArray (arr,degree){

    for (let i = 0; i <arr.length; i++){
        arr[i] = arr[i] ** degree;
    }
  return arr;
}

console.log(exponentiateArray([5,2,9,0,4],2));
*/


/*
let arr = [1,1,1,4,4,5,1,6,6,74,74,74,3];

function findDuplicatedNumbers (numbers){

    let result = [];
    numbers.sort(( a, b ) =>  a - b);
    for (let i =0; i <numbers.length; i++) {
         if (numbers[i] === numbers[i+1] && !result.includes(numbers[i])) {
             result.push(numbers[i]);

         }
     }
 return result
}

console.log(findDuplicatedNumbers(arr))
*/


let arr = [
    [45, 89, 23, 45, 29, 12, 73, 15],
    [23, 65, 91, 45, 63, 43, 92, 70],
    [30, 5, 23, 17, 20, 90, 45, 32]
]

function findMaxAmount(arr) {
    let allSum =[]
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
        allSum.push(sum);
        sum = 0;
    }

    for (let i = 0; i < allSum.length; i++){
        if (allSum[i] > maxSum){
            maxSum = allSum[i];
        }
    }
    return maxSum;
}

console.log(findMaxAmount(arr))
