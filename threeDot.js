// How to show two  seperate array in one array by the old javascript method
// const ages = [12, 14, 16, 13, 17];
// const ages2 = [15, 16,12];
// const allAges = ages.concat(ages2);
// console.log(allAges);

//  How to show two  seperate array in one array by the modern javascript ES-6 method(three dots)
// const ages = [12, 14, 16, 13, 17];
// const ages2 = [15, 16,12];
// const allAges = [...ages, ...ages2];
// console.log(allAges);

// Show the max value..with javascript old method
// const business = 650;
// const minister = 450;
// const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum);

// Show the max value..without modern JavaScript(ES-6) three dots method
// const takaPoisa =[650, 420, 250]
// const maximum = Math.max(takaPoisa);
// console.log(maximum);

// // Show the max value..with modern JavaScript(ES-6) three dots method
const takaPoisa =[650, 420, 250]
const maximum = Math.max(...takaPoisa);
console.log(maximum);






