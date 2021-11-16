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
/*
function caller(){
item=getFromFar()

    item.then(
         (data)=>
            {
                console.log(data)
                console.log("follow up logic")
            },
        (error)=> console.log(error)
    )

}*/

async function caller(){
try{
    data = await getFromFar()
    console.log(data)
    console.log("Follow up logic")
  }
catch(e){
    console.log(e)
}
}

caller()