function funny(c){
    if(typeof(c)=="function") 
           c("Input from funny")
    else if(typeof(c)=="string")
           return function(){
               console.log("Funny function and input is ",c)
           }
    else
        console.log("Inside")
}

funny(function(a){
   console.log(a)
})

funny("India")()

funny(2354)