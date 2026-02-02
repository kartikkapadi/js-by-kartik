const name="kartik kapadi"
const repocount= 50;

 // console.log(name +repocount);
 console.log(`Hello  my name is ${name} and my repo count is ${repocount}`); // string interpolation bolte hai isko 

 const gamename=new String("kartik kapadi ")  //internally work as object store  key pair value 
 console.log(gamename[0]);
 console.log(gamename[10]); // key value pair access 
 console.log(gamename.__proto__); //prototype 
 console.log(gamename.length);
 console.log(gamename.toUpperCase());
 console.log(gamename.charAt(2));
 console.log(gamename.indexOf('k'));

 const newgamename=gamename.substring(2,10); //last value include nahi hoti hai 
 console.log(newgamename);
 const anothergamenae=gamename.slice(-7,4);
 console.log(anothergamenae);

 const newstrone=" kartik "
 console.log(newstrone);
 console.log(newstrone.trim())// remove space from sentence

 const url="https://hitesh.com/hitesh%10choudhary"
 console.log(url.replace('%10','-'));

 console.log(url.includes('hitesh'));

 const spiltstr="kartik-kapadi-jj-wpl-bboi"
 console.log(spiltstr.split('-'));