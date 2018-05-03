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
    shoppingcart.prototype.buy = function (item) {
        this.items.push(item);
        console.log(this.items);
    };
    return shoppingcart;
}());
var mobile = new shoppingcart();
mobile.buy('mobilePhone');
mobile.buy("tcvvv");
console.log(mobile.items);
var tv = new shoppingcart();
console.log(tv.items);
//# sourceMappingURL=class.js.map