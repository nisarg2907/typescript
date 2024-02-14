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


// tsconfig
// target=>ecmascript version referring javascript
// rootDir=>where will the main ts file live
// outDir=>where js file will live
// NoImplicitAny=>explicitly consider any no mentioned typed variables into "any"
// removeComments=>remove all the comments from the ts file



// Interfaces aand types
// types can not be implemented but the interfaces can  be implemnted as a class extemdion
