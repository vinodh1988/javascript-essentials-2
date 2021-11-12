const add=function(a,b){
    return a+b
}

const printsum=function(a,b){
    console.log("sum is",a+b)
}

console.log(add(12,24))
printsum(534,35)

const sum=(a,b)=>a+b

const printadd=(a,b)=>{
    console.log("a",a)
    console.log("b",b)
    console.log("a+b",a+b)
}

console.log(sum(12,24))
printadd(534,35)