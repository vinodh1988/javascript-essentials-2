//Array- collection of objects

obj=[1,2,3,"Raj","Ram",true,{sno:1,name:"Ravi"},[1,2,3]]

console.log(obj)
console.log(obj[2])
console.log(obj[6]["sno"])
console.log(obj[6].name)
console.log(obj[7][1])

obj[2]="Keshav"


obj[100]="India"
obj[-1]="Pakistan"
obj["x"]="Rajasthan"
test={sno:1,name:"Roger"}
obj[test]="Harry"
console.log(obj)
console.log("--------------------------------")
for(let x in obj){
  console.log(x)
  console.log(obj[x])
  console.log("++++++++++++++++++++++++++++++++++++++")
}