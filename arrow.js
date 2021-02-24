// ex-1 with function declaration 
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

//ex-1 with function expression
// const doubleIt = function(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// ex-1 with ES-6 method arrow function
// const doubleIt = num => num * 2;
// const result = doubleIt(5);
// console.log(result);

// ex-2 with ES-6 arrow function
// const add = (x, y) => x + y;
// const result = add(50 , 70);
// console.log(result);

// ex-3 with ES-6 arrow function
// const give5 = () => 5;
// const result = give5();
// console.log(result);

// ex-4 with ES-6 arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff ;
    return result;
} 
const output = doMath(7, 5);
console.log(output);