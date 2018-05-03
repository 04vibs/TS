//classes-give new memory

class Person{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }
}

let Person1=new Person("Prashant");

console.log(Person1);

class shoppingcart{
    items:string[]=[];

    // constructor(items:string[])
    // {
    //     this.items=[];
    // }


    buy(item:string)
    {
        this.items.push(item);
    }
    
}

let mobile=new shoppingcart();
mobile.buy('mobilePhone');
let tv=new shoppingcart();
console.log(tv.items);






