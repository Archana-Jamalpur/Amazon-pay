// let user={
//     name:"John",
//     age:30
// };
// let clone=Object.assign({},user);
// alert(clone.name);
// alert(clone.age);
// let Student={
//     name:"John",
//     age: 21,
//     grade:"A"

// };
// for(let key in Student){
//     console.log('${key}:${Student[key]}')
// }
// let Calculator={
//     num1:10,
//     num2:20,

// add() {
//     return this.num1+this.num2;
// },
// sub(){
//     return this.num1-this.num2; 
// }
// };
// console.log(Calculator.add());
// console.log(Calculator.sub());
let carClone={
    name:"BMW",
    brand:"abc",
    year:2024,
};
function cloneObject(obj){
    let clone={};
    for(let key in obj){
        clone[key]=obj[key];
    }
    return clone;
}
let userClone=cloneObject(carClone);
console.log(carClone);




