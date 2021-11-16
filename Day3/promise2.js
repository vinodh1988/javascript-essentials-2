function randomEmitter(){
   return new Promise(function(resolve,reject){
    setTimeout(()=>{
        data =  Math.round(Math.random()*10000)
        if(data%3==0)
          resolve(data)
        else
          reject(data)
      },3000)
   })
}

async function callIt(){
    try{
        console.log(await randomEmitter(), 'is from resolve')
    }
    catch(e){
        console.log(e,' is from reject')
    }
}

callIt()