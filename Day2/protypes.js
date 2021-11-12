function Student(sno,name){
    this.sno=sno
    this.name=name
    
}

Student.prototype.display=function(){
    console.log("Sno: ",this.sno,"Name: ",this.name)
}

obj=new Student(1,"Rakesh")
obj1=new Student(2,"Praveen")

obj.display()
obj1.display()

