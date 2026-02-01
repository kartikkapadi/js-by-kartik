// primitive data type 

//7 types : String ,Number , boolean , null, undefined , Symbol,bigint
const score=100 // number data type 
const scorevalue=100.3 //number data type 
const isloogedin =false // boolean data type 
const outsidetemp=null; // null
let username; //undefined 

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id === anotherid);
const bignumber= 3456789n

// refernce (non primitive)

// arrays , objects , functions

const heros=["shaktiman", " naagraj","doga"] //basic array declaration 

let myobj= {
    name:"kartik",
    age : 22,

} // basic object declaration hai 

const myfun= function (){
    console.log(" hello world ");
} // object function bola jata hai internally 

console.log(typeof bignumber);
console.log(typeof BigInt);
console.log(typeof myfun);

// *****************************************memory *************************//
// stack (primitive) ,heap (non -primiti)
let myyoutube="kartikkapadi@gmail.comm" // goes on stack 
let anothername=myyoutube
anothername="chaiorcode"

console.log(myyoutube);
console.log(anothername);

let user ={
    email: "user@google.com",
    upi="userpin@ybl"
} //user is store on stack but refernces goes to --------> heap which stores { email:" ", upi:" "}

let usertwo=user //usertwo refernces to -------> heap { email:" ", upi:"  "}

usertwo.email="suresh@gmail.com"  // changed in the object which is stored in heap 

console.log(usertwo.email); // suresh@gmail.com
console.log(user.email); //suresh@gmail.com