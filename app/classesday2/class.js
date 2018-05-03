"use strict";
//classes-give new memory
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Person1 = new Person("Prashant");
console.log(Person1);
var shoppingcart = /** @class */ (function () {
    function shoppingcart() {
        this.items = [];
    }
    // constructor(items:string[])
    // {
    //     this.items=[];
    // }
    shoppingcart.prototype.buy = function (item) {
        this.items.push(item);
    };
    return shoppingcart;
}());
var mobile = new shoppingcart();
mobile.buy('mobilePhone');
var tv = new shoppingcart();
console.log(tv.items);
//prototypes -access the same array rather than creating new memory
function todoList() {
}
todoList.prototype = {
    items: []
};
var todo1 = new todoList();
todo1.items.push("homework");
var todo2 = new todoList();
console.log(todo2.items);
//# sourceMappingURL=class.js.map