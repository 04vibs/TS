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

//prototypes -access the same array rather than creating new memory
function todoList(){

}

todoList.prototype={
    items:[]=[]
}

let todo1=new todoList();
todo1.items.push("homework");

let todo2=new todoList();
console.log(todo2.items);




