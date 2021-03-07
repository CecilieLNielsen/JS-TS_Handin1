//OPGAVE 2A
interface ImyFunc {
    (a:string, b:string, c:string):string[]
}

//OPGAVE 2B
const myFunc1:ImyFunc = function(a:string, b:string, c:string){
    return [a,b,c];
}

//OPGAVE C
const myFunc2:ImyFunc = function(a:string, b:string, c:string){
    return [a.toUpperCase(),b.toUpperCase(),c.toUpperCase()];
}

console.log(myFunc1("abe", "mus", "sæl"));
console.log(myFunc2("abe", "mus", "sæl"));

//OPGAVE D

let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}