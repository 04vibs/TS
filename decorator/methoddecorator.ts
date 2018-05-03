function writeable(value:boolean){
    return function(target,name,descriptor){
        //console.log(descriptor);

        console.log(target);
        console.log(name);

        descriptor.writeable=value;
    }
}

class afruits{
    name:string;
    price:number;
    
    constructor(name:string) {
        this.name=name;
        this.price=20;
    }
    @writeable(false)
    buy(){
        //return this.name;
        this.price=30;

    }
}

let fruit=new afruits('apple');

fruit.buy=function(){
   // return "Hello";

   fruit.price=50;
};

console.log(fruit)