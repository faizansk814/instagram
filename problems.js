//problem1
let a=11
let count=0
for(let i=1;i<=a;i++){
   if(a%2!=0){
      count++
    }
 }
if(count==2){
   console.log("its a prime number")
}else{
   console.log("Its not a prime number")
//problem 2
let b="naman"
let bag=""
for(let i=b.length-1;i>=0;i--){
    bag=b[i]
}
if(bag==b){
console.log("its a palindrome")
}else{
console.log("its not a palindrome")