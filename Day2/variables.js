const a=30

function fun(){
    a=900
    console.log(a)
   var a=100 //function scope variabl
    console.log(a)
}

function local(){
    var a=30
    console.log("outer",a)
    {
        let a=90
        console.log("innter",a)
    }
    console.log(a)
}

local()
/*
fun() 
console.log(a)*/
/*
for(var a=30;a<35;a++)
  console.log(a)

console.log("----------------------")
console.log(a)
*/