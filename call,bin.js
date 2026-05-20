let name={
    firstName:"pravesh",
    lastName:"dhakal"
}
let printFullname= function (hometown, state){
    console.log(this.firstName+ " "+ this.latName+ "from" + hometown+ ","+ state);
}
//basically call borrows the function
printFullname.call(name, "KPG","WB");

//apply is same, only differnece is that the arguements are passed as an array
printFullname.apply(name, ["KPG","WB"])

//bind method-> doesnt execute immediately rather return a new function permanently bound by this
let printMyName= printFullname.bind(name, "KPG","WB");
console.log(printMyName);
printMyName();