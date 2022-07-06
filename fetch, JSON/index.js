/*
const url = 'https://reqres.in/api/users?page=2';

const person = {
    name: "John",
    age: 23,
    size: {
        width: 200
    },
    stack: ['Js', 'HTML']
}

const jsonPerson = JSON.stringify(person);      //stringify - превращает js в JSON (строку)

const ternJsObject = JSON.parse(jsonPerson);    //parse - превращает JSON в js

//fetch() позволяет по url получать данные, возвращает промис

fetch(url).then((response) => response.json())
    .then(({data})=>console.log(data))                //({data}) - деструктуризация response

//response.json() - это специальный метод объекта response, который превращает JSON в js-объект и отдаёт именно данные(body)

async function getData  () {
    const response = await fetch(url);
    const { data }= await response.json()
        .catch(()=>{
            console.log("Ошибка")
        })
}

getData().then((data)=>{
    console.log(data)
})*/

document.getElementsByClassName('test')[0].innerHTML = 'hello world'