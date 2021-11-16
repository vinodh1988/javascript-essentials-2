//Generators 


function* constructionProcess(){
    console.log("Construction process started")
    yield "Sand and Bricks"
    console.log("to raise floors..pillar will be given")
    yield "Pillars"
    console.log("for water pipeline and electricity pipes,tap and wires will be given")
    yield "Pipes, Taps and Wires"
    console.log("for Painting and Window , paint, wood will be given")
    yield "Paint & Wood"
    console.log("Nothing to give ...empty hand")
}

function start(){
   let gen = constructionProcess()
    console.log("Bought Land")
   result=gen.next().value
   console.log(result+" will build walls with it")
   result=gen.next().value
   console.log("Raising floors with ",result)
   result=gen.next().value
   console.log("Setting up electric wiring and Water pipelines")
   result=gen.next().value
   console.log("Painting and Furninshing with",result)
   gen.next()
   console.log("Finished building")
}

start()