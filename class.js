// ex-1 with ES-6
// class Student{

// }
// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);

// ex-2 with es-6
// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = "mahi";
//     }
// }
// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);

// ex-3 with es-6
// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//     }
// }
// const student1 = new Student(12, "Shuvo" );
// const student2 = new Student(22, "Mahiya");
// console.log(student1, student2);

// ex-3 with es-6
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school ="Kolimunnesa School"
    }
}
const student1 = new Student(12, "Shuvo" );
const student2 = new Student(22, "Mahiya");
console.log(student1, student2);