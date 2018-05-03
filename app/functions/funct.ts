interface xyz{
    name?:string,
    price?:number,
}

 function buygoods(name:string,price:number,size?:number):void{
     return
 }

 buygoods("",12);

function fruits(arg1,arg2,...arg3)
{
    console.log(arg1);
    console.log(arg2);
    arg3.forEach((i)=>{
        console.log(i);
    })
}

fruits('mango','aplle','lichie','durian','','')