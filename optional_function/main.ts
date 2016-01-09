//function with name , optional parameter use in named function 
function add(a:number , b:number , c?:number){
	if(c)
	return a+b+c;
	else
	return a+b;
}
console.log(add(2,1));


//we can also define the parameter values on declaring parameter time 
function sub(a:number , b:number=2 , c=a-b){
	return c
}
console.log(sub(5,3))

//Assign a string value in any parameter variable in anonymous function 
 
var check:(FirstName : string , LastName?:string)=>string = function (FirstName : string , LastName:string = "Ur Rheman"):string{
	if(LastName && LastName.length)
	return FirstName+" "+LastName;
	else
	return FirstName;
}
console.log(check("Atta"))