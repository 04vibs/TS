"use strict";
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
//# sourceMappingURL=proto.js.map