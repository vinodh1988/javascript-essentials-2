function outer(input){
  console.log(input)
  let x="Asia"
    function inner(innerinput){
       console.log("inside",input)
       console.log(innerinput)
       console.log(x)
    }
 
    inner("China")
    return inner;
    //console.log(innerinput)
}

fun=outer("India")
console.log("--------------------------------");
fun("Australia")
fun("Newzealand")