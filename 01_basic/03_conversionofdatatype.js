let score="33"
let score2="33abc"
let score3=null;
let score4=undefined;
let score5=true;
console.log(typeof score);

let valueinnumber=Number(score)
let value2inumber =Number(score2)
let value3inumber=Number(score3)
let value4inumber=Number(score4)

console.log(typeof valueinnumber);
console.log(valueinnumber);
console.log(value2inumber);
console.log(value3inumber);
console.log(value4inumber);

// "33"=>33
//" 33abc"=>NAN
// true=> 1;
// false =>0

let isLoggedin=1;
let boaleanisloggedin=Boolean(isLoggedin)
console.log(boaleanisloggedin);

//1 =>true
//0 => false
// " "=>false
// "kartik "=>true

let somenumber =33
let stringnumber=String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);