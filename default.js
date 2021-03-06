// ex-1
// function add(num1, num2){
//     return num1+num2;
// }
// const total = add(15, 17);
// console.log(total);

// ex-2
// function add(num1, num2){
//     return num1+num2;
// }
// const total = add(15);
// this function output would show us TypeError..cause we pass two parameter but we set only one value.. 
// console.log(total);

// ex-3
// function add(num1, num2){
//     if(num2 === undefined){
//         num2 = 0;
//     }
//     return num1+num2;
// }
// const total = add(15);
// console.log(total);

// ex-3 type-2
// function add(num1, num2){
//     num2 = num2 || 0;
    
//     return num1+num2;
// }
// const total = add(15);
// console.log(total);
 
// ex-4

// function add(num1, num2 = 20){
//     return num1+num2;
// }
// const total = add(15);
// console.log(total);

// ex-4 type-2
function add(num1, num2 = 20){
    return num1+num2;
}
const total = add(15, 1);
console.log(total);



