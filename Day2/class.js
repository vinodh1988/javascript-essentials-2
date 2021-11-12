class Student{
sno=1
name="Ravi"
      constructor(sno,name){
          if(sno && name){
          this.sno=sno
          this.name=name
          }
      }

       display(){
          console.log("Sno:",this.sno," Name:",this.name)
      }
}

obj=new Student(2)
obj1=new Student(3,"Harry")
obj2=new Student()

obj.display()
obj1.display()
obj2.display()