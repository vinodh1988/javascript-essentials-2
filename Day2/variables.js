a=30

function fun(){
    a=900
    console.log(a)
   var a=100 //function scope variabl
    console.log(a)
}

fun() 
console.log(a)
