//class:blue print of real object 
class Car{

    //comstructor 

    constructor(name,color,engine,brand){

        //property 
        this.color=color;//assining the value by parameters
        this.name=name;
        this.engine=engine;
        this.brand=brand;

    }
    //method:represent functionality of object 
     
    move(){

       
         console.log(`${this.brand}`);
        console.log(`${this.name}`);
        console.log(`${this.color}`);
    }
    start(){
         console.log(`${this.name} car is moving`);

    }
    stop(){
        console.log(`${this.color} has stopped`);

    }
}
// creating object of class

let mynewcar= new Car("mustang", "black","turbo-v8","mustang")
mynewcar.start()
mynewcar.move()
mynewcar.stop()