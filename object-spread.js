let a={sno:1,name:"Rajan"}
//b=a
//b["city"]="Mumbai"
b={...a,city:"Mumbai"}
console.log(b)
console.log(a)