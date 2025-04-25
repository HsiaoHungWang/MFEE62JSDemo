
//ReferenceError data1 is not defined
// console.log("aaa")
// console.log(data); //ReferenceError: Cannot access 'data' before initialization
// console.log("bbb")


//console.log(sayHi("Mary")); // Uncaught ReferenceError: Cannot access 'sayHi' before initialization


// let data = "abc";



// function sayHi(name){
//   //name => undefined => !false=> true
//   //name => Jack => !true => false
//   if(!name){
//      name = "Guest";
//   }
//   return `Hello ${name}`
// }

//函式表達式
// const sayHi = function(name){
//   return `Hi ${name}`;
// }

//箭頭函式
// const sayHi = (name) => {
//   return `Hi ${name}`;
// }
// const sayHi = name => {
//   return `Hi ${name}`;
// }
const sayHi = name => `Hi ${name}`;


// const getSum = (num1=2, num2=3) => num1+num2;

const getSum = (num1=2, num2=3, ...nums) => {
  let total = num1 + num2;
  //for..of
  nums.forEach(num=>{
    total += num;
  })
  return total;
};


//溫度轉換
//參數
//degree：溫度:number
//type：攝氏(C):string、華氏(F):string
//回傳溫度:number
// function tempatureConverter(degree, type){
//   let degreeChanged = 0;
//   if(type==='C'){
//     //攝氏轉華氏
//     degreeChanged = degree * (9/5) + 32;
//   }else{
//     //華氏轉攝氏
//     degreeChanged = (degree-32) * (5/9);
//   }
//   return degreeChanged;
// }
// const tempatureConverter = function(degree, type){
//   let degreeChanged = 0;
//   if(type==='C'){
//     //攝氏轉華氏
//     degreeChanged = degree * (9/5) + 32;
//   }else{
//     //華氏轉攝氏
//     degreeChanged = (degree-32) * (5/9);
//   }
//   return degreeChanged;
// }

const tempatureConverter = (degree, type)=>{
  let degreeChanged = 0;
  if(type==='C'){
    //攝氏轉華氏
    degreeChanged = degree * (9/5) + 32;
  }else{
    //華氏轉攝氏
    degreeChanged = (degree-32) * (5/9);
  }
  return degreeChanged;
}