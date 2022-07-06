const person = {
    name: 'John',
    age: 23,
    run: function (){
        console.log(`${this.name} runs`)
    },
    walk (){
        console.log(`${this.name} walks`)     //сокращённая запись
    },
    speak: () => {
        console.log(this)
        console.log(`${this.name} speak`)
    }
};

person.run()        //работет с контекстом person
person.walk()       //работет с контекстом person
person.speak()      //контекст на window

//стрелочная функция не имеет this, она запоминает контекст во время своего определения


function test () {
    const hello = () => {
      console.log(`${person.name} says hello`)
    }

    hello()
}

test.call(person)      //стрелочная работает с контекстом person

const person1 = {
    name: 'John',
    age: 23,
    run: function () {
        const hello = () => {
            console.log(`${this.name} runs`)
        }
        hello();
    }
};

person1.run()        //контекст john

