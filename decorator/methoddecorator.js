"use strict";
var afruits = /** @class */ (function () {
    function afruits(name) {
        this.name = name;
    }
    afruits.prototype.buy = function () {
        return this.name;
    };
    return afruits;
}());
var fruit = new afruits('apple');
fruit.buy = function () {
    return "Hello";
};
console.log(fruit);
//# sourceMappingURL=methoddecorator.js.map