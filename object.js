a={}
b={sno:1,name:"Vinodh",city:"Chennai"}

console.log(typeof(a))

console.log(a instanceof Object)
console.log(b instanceof Object)

console.log(a,b)
console.log(b.name)
propertyName="city"
console.log(b[propertyName])
b.city="Bengaluru"
console.log(b[propertyName])
b.desig="Manager"
console.log(b)
a["name"]="Arun"
console.log(a)

delete b["city"]
console.log(b)
