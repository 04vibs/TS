class afruits{
    name:string;

    constructor(name:string) {
        this.name=name;
    }
    buy(){
        return this.name;
    }
}

let fruit=new afruits('apple');

fruit.buy=function(){
    return "Hello";
};

console.log(fruit)