"use strict";
const x = 1;
console.log(x);
const geetring = function (firstname) {
    console.log("Hello", firstname);
};
geetring("Nisarg");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));
function isLegal(age) {
    if (age > 18)
        return true;
    return false;
}
console.log(isLegal(18));
function runAfte1S(fn) {
    setTimeout(fn, 1000);
}
runAfte1S(function () {
    console.log("ran after the 1s funnction");
});
