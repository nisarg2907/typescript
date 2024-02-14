const x : number = 1;
console.log(x);

const geetring = function(firstname : string){
    console.log("Hello",firstname);
}
geetring("Nisarg");

function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(2,5));

function isLegal(age:number):boolean{
    if(age>18)return true
    return false
}
console.log(isLegal(18));

function runAfte1S(fn : ()=>void){
    setTimeout(fn,1000);
}

runAfte1S(function(){
    console.log("ran after the 1s funnction");
})
