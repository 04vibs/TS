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

    buy(item:string)
    {
        this.items.push(item);
        console.log(this.items);
    }
    
}

let mobile=new shoppingcart();
mobile.buy('mobilePhone');
mobile.buy("tcvvv");

console.log(mobile.items);
let tv=new shoppingcart();
console.log(tv.items);







