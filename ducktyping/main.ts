var mainVariable = {id : 1 , name : "Pakistan"}
// mainVariable = {id : 2 , name : "Karachi" , address : "Malir halt"}
var mainVariable1 = {id : 2, name : "Karachi" , address :"Malir Karachi"}
mainVariable = mainVariable1;

console.log(mainVariable);


var a : { id : number , [a:string]:any} ;
a = { id : 2 , check : 4};
console.log(a);

var b :{[b:number] : string};
b = {3 : "Pakistan"};


var c : string = 2+2+"Pakistan";