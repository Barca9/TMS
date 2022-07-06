const arr = ["john", "Peter","Kazimir", "Nastya", "Sacha"]
//forEach

arr.forEach((item,index)=>{
    console.log(item)
})


//map

/*
const result = arr.map((item)=>{
    `Mrs.${item}`
});

console.log(result)*/

//some  возвращает true или false, до первой попавшийся  ||

/*
const res = arr.some(item=>item.length>6)

//every  &&

const result = arr.every(item=>item.length>6)*/

//filter  новый массив из элементов которые удовлетворяет условию

/*
const result = arr.filter(item=>item.length>6)*/

//find  первый попавшийся

/*
const result = arr.find(item=>item.length>6)

console.log(result)*/

//reduce

/*
const result = arr.reduce((acc,item)=>{
    return acc + item
},0)*/


//reduceRight  reduce но считает с обратной стороны
