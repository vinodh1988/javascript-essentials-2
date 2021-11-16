/*g=1
fun=setInterval(()=>{
    console.log("Running .... Hey")
    g++
    if(g==5)
    clearInterval(fun)
},2000)

setTimeout(()=>console.log("RUN"),5000)
*/
//Javascript is asynchronous in nature
function getFromFar(){
     return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve ("Got it from far land!!!")
        },3000)
     })
}

item=getFromFar()

item.then(
    (data)=>console.log(data),
    (error)=> console.log(error)
)

console.log("code after promise")
