a=[1,2,3]
b=a
console.log(a)
console.log(b)

console.log(a==b)  //compares memory location

b[5]=90

console.log(a)

x=[1,2,3]
y=[...x]
/*
for(let i in x) 
    y[i]=x[i]
*/
console.log(y)
console.log(x)
y[4]=43
console.log(y)
console.log(x)
/*
a=[1,2,3]
b=[1,2,3]

console.log(a)
console.log(b)

console.log(a==b) 
*/