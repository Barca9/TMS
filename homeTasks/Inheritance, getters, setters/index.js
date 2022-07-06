class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(){
        return `Welcome ${this.name}`;
    }
}

class Programmer extends Human {
    constructor(technologies, name, age) {
        super(name, age)
        this.technologies = technologies;
    }

    startCoding() {
        return (`${this.name} is coding using ${this.technologies}`);
    }
}

const pr1 = new Programmer(['js', 'java'], 'John', 23);

console.log(pr1.startCoding())

class Sportsman extends Human{
    constructor(numberOfMedals, name, age) {
        super(name,age)
        this.numberOfMedals = numberOfMedals
    }
}

class FootballPlayer extends Sportsman{
    constructor(team, ...otherProperties ) {
        super(otherProperties);
        this.team = team;
    }

    run(speed){
        return `${this.name} is running ${speed} kmph`
    }
}

class HockeyPlayer extends Sportsman{
    constructor(weight, ...otherProperties ) {
        super(otherProperties);
        this.weight = weight;
    }

    pushOpponent(name){
        return `${this.name} pushed ${name} and ued ${this.weight} kgs`
    }
}