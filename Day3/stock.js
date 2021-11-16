stock=10000

function* distribute(){

     while(true){
         let x = Math.round(Math.random()*1000)
        
         if(x<=stock){
           stock-=x
           console.log("Going to yeild",x," items")
           yield x
         }
         else {
             console.log("Stock is ",stock," Current generated value is",x)
           break
         }
     }
}

function caller(){
      for(let x of distribute()){
          console.log(x, " is received")
      }
}

caller()