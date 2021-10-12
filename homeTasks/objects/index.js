function isEmptyObj (obj){
    for (let key in obj){
        return false
    }
    return true;

}


const pupyrki = {
    blue: 120,
    red: 250,
    orange: 23,
    purple: 231
}

function getSum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}



const chtuchki = {
    chtychka1: 200,
    chtychka2: 521,
    chtychka3: 113,
    chtychka4: 314,
    chtychka5: 871,
}

function getMaxItem (obj){
    let maxItem=0;
    for (let key in obj){
        if (obj[key] > maxItem){
            maxItem = obj[key];
        }
    }
    return maxItem
}



const student = {
    math: 5,
    biology: 3,
    language: 2,
    isOboltus: 'yes'
}

function multiplyMark (obj){
    for (let key in obj){
        if (typeof obj[key] === "number" && !isNaN(obj[key])){
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}