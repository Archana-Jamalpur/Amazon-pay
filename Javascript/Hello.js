//  console.log ("Hello,World!");

// 2.function fun(a,b){
//     return a+b;
// }

// var f=fun(10,20);
// console.log(f);

// 3.function fun(str){
//     return str.length;
// } 

// var st=fun("HelloWorld");
// console.log(st);

// 4.var a=prompt("Enter a value");
// if(a%2==0){
//     console.log("Number is even");

// }
// else{
//     console.log("Number is Odd");

// }

// 5.function fun(num){
//     return Math.max(...arr);

// }
// var arr=[4,3,5,7];
// console.log(fun(arr));


// 6.function f(str){
//     let rever="";
//     for(i=str.length-1;i>=0;i--){
//         rever+=str[i];
//     }
//     console.log(rever);
// }
// f("Archana");
let user={
    name: "John",
    age: 30

};
let clone={};
for(let key in user){
    clone[key]=user[key];
}
clone.name="pete";
alert(user.name);