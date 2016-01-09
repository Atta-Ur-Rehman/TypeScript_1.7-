//function with name , optional parameter use in named function 
function add(a, b, c) {
    if (c)
        return a + b + c;
    else
        return a + b;
}
console.log(add(2, 1));
//we can also define the parameter values on declaring parameter time 
function sub(a, b, c) {
    if (b === void 0) { b = 2; }
    if (c === void 0) { c = a - b; }
    return c;
}
console.log(sub(5, 3));
//Assign a string value in any parameter variable in anonymous function 
var check = function (FirstName, LastName) {
    if (LastName === void 0) { LastName = "Ur Rheman"; }
    if (LastName && LastName.length)
        return FirstName + " " + LastName;
    else
        return FirstName;
};
console.log(check("Atta"));
