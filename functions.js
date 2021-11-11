function fun(a,b){
  console.log(a,b)
}


fun("raj","kumar")
fun(12,34)
fun([1,2,3],[3,4,5])
fun(12,"Raj")
fun(true,false)
fun(1,{sno:1,name:"Kiran"})
fun()
fun("Ram")
fun("Ram","Rahim","Roger")


function callme(a){
    if(a)  //if is not undefined
       if(typeof(a)=="string")
         return(a.length)
 }

console.log("output",callme())
console.log("output",callme([1,2,3]))
console.log("output",callme(1,2,3))
console.log("output",callme("Rahul"))
console.log("output",callme("useful"))
console.log("output",callme({sno:1,name:"Ravi"}))