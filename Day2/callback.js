resource={
    "Doctor":"Rakesh",
    "Carpenter":"Shreyas",
    "Electrician":"Jack",
    "Painter":"Raju",
    "Advocate":"Harry",
    "IT-Expert":"Nick"
}

function fun(resourcekeys, process)
{
    
   for(let x in resourcekeys)
      process(x,resourcekeys[x])
}

/* to call this function we need to pass  ist parameter object, 2nd parameter function*/

fun(resource,function(x,y){
    console.log(x,' ',y ,' performing job')
})

/* a Function which is passed a parameter to another function is called callback function
*/