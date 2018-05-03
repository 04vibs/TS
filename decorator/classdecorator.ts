function modifyOrnaments(constructor){
    console.log(constructor);
}
@modifyOrnaments
class christmasTree{
    ornaments:string;
    constructor(){
        this.ornaments='red';
    }
}

let tree=new christmasTree();
console.log(tree);