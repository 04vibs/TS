"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function writeable(value) {
    return function (target, name, descriptor) {
        //console.log(descriptor);
        console.log(target);
        console.log(name);
        descriptor.writeable = value;
    };
}
var afruits = /** @class */ (function () {
    function afruits(name) {
        this.name = name;
        this.price = 20;
    }
    afruits.prototype.buy = function () {
        //return this.name;
        this.price = 30;
    };
    __decorate([
        writeable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], afruits.prototype, "buy", null);
    return afruits;
}());
var fruit = new afruits('apple');
fruit.buy = function () {
    // return "Hello";
    fruit.price = 50;
};
console.log(fruit);
//# sourceMappingURL=methoddecorator.js.map