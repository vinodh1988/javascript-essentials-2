class State{
    item="Apple"
    constructor(item){
        this.item=item
    }

    display(){
        console.log("item",this.item)
    }
    change(){
      /*  valueChanger(function(temp){
            this.item=temp
        }.bind(this))*/

        valueChanger(temp=>this.item=temp)
    }
}

function valueChanger(callback){
    callback("Orange")
}

obj=new State("Banana")
obj.display() //item banana
obj.change()
obj.display() //item orange