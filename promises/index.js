const p = new Promise((resolve, reject) => {     //промис это объект, классб функция принимающий в аргументах функцию!!
    const number = Math.random() * 1000;        //new Promise возвращает объект и записывает в p
    if (number > 500) {
        resolve(true);
    } else {
        reject();
    }
});

//resolve, reject - функции
//мы передаём в промис нашу функцию (в аргументах), а промис в свою очередь вставляет
//в нашу функцию свои resolve, reject

/*
статусы: pending = промис в состоянии обработки
          rejected = промис завершился с ошибкой
          fulfilled = промис завершился успешно
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve(2);
    }, Math.random() * 2000)
});
//resolve - это тригер для перехода к then

p.then((a) => {                //выполнится после выполнения промиса вверху, после того как случился resolve
    console.log(a)
    return 10               //используем ретёрн для передачи аргумента
}).then((b) => {
    console.log(b)
});
//then возвращает промис, значит можно по цепочке написать следующий then


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve(2);
    }, Math.random() * 2000)
})
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(2);
                resolve(2);
            }, Math.random() * 2000)
        });
    })
    .then((b) => {
        console.log(b)
    })
//если в 44 строке мы возвращаем промис то в след. then передаётся аргумента с resolve,
//если у нас во втором then будет какая-то асинхронная функция то можно создать промис и через resolve передать значение
//если мы вовращаем новый промис то в then передаётся значение resolve, если мы создаём но не возвращаем промис то then не уивидит resolve

new Promise((res, rej) => {
    rej('some error')
})
    .then(
        (val) => {
            console.log('is this an error', val)
        },
        (err) => {
            console.log(err)
        });
//then принимает 2 аргумента - 2 функции, первая когда всё хорошо, вторая когда ошибка
//промис ждёт вызова либо резолва либо реджекта, что то одно

new Promise((res, rej) => {
    rej('some error')
})
    .then((val) => {
        console.log('is this an error', val)
    })
    .catch((err) => {
        console.log(err)
        return 10
    })
    .then((val) => {
        console.log(val)
        throw new Error('My Own Error')    //мы сами создаём и заставляем интерпртатор выбросить ошибку
    })
    .catch((err) => {
        console.log(err)    //словит ошибку которую вы сами создали
    })
    .finally(() => {
        console.log(' finally всегда срабатывает!!!')
    })
//catch тоже самое что и второй аргумент then, тоесть ловит ошибки, он более наглядный
//catch тоже вовращает промис, после него можно написать следующий then и через return передать новое значение
//следующий then вызывается только если в предыдущем thene не будет ошибки

//-------async await--------------------------------------------------

/*const p3 = new Promise((res)=>{
    setTimeout(()=>{
        res(100)
    },2000)
})

async function foo () {
    const result = await p3

    const sum = result +2;
}*/

const p3 = new Promise((res) => {
    setTimeout(() => {
        res(100)
    }, 2000)
})

async function foo() {
    const result = await new Promise((res) => {
        res(10)
    })

    const sum = result + 2;

    return sum;
}

foo().then()
//await не даёт коду продолжится пока прромис не будет завершён
//после await мы должны написать что-то что вернёт промис либо сам промис
//!!async функция всегда возвращает промис

let age = undefined

try {
    if (age === undefined) {
        throw new Error('agr is undefined')
    }
} catch (err) {
    console.log(err)
    age = 0;
    age++;
}

async function foo1() {
    let result;
    try {
        result = await new Promise((res) => {
            res(10);
        });
    } catch (e) {
            console.log(e)
        }
        const sum1 = result + 2;
        return sum1;
}

foo1();

//блок try/catch используется для ловли ошибок, если ошибка произошла в трай, то она отправится в catch и там
//можно будет её исправить

//------Методы промиса------------------------------------------------------------

const a1 = new Promise((res) => {
    setTimeout(() => {
        res(100)
    }, Math.random()*1000)
})

const a2 = new Promise((res) => {
    setTimeout(() => {
        res(100)
    }, Math.random()*1000)
})

const a3 = new Promise((res) => {
    setTimeout(() => {
        res(100)
    }, Math.random()*1000)
})

//-----all---------------------

Promise.all([a1, a2, a3])
    .then((val)=>{
        console.log(val)                //[1,2,3]
    })
    .catch((val)=>{
        console.log("error");
        console.log(val)
    })
//promis.all возвращает промис
//если в каком то промисе ошибка, то мы уйдём в блок catch и promis.all вернёт нам значение промиса
// в котором произошла ошибка, самый первый если ошибка была в двух
//--------allSettled-------------------------
Promise.allSettled([a1, a2, a3])
    .then((val)=>{
        console.log(val)                //вернёт массив из объектов промисов
    })
    .catch((val)=>{
        console.log("error");
        console.log(val)
    })
//ему пофиг на ошибки, поменяется статус

//------race--------------------------------------

Promise.race([a1, a2, a3])
    .then((val)=>{
        console.log(val)                //вернёт самый первый промис
    })
    .catch((val)=>{
        console.log("error");
        console.log(val)
    })

//------any------------------------------

Promise.any([a1, a2, a3])
    .then((val)=>{
        console.log(val)                //вернёт промис который завершился первый и завершился хорошо(resolved)
    })
    .catch((val)=>{
        console.log("error");
        console.log(val)
    })



