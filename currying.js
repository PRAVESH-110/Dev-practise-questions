//decompose the function to take single/ double args according to use

//using bind
let multiply= function(x,y){
    console.log(x*y);
}

//now using bind we only use the required parameter and pass in an arg to the parameter fn
let multiplybytwo= multiply(this, 2);
multiplybytwo(3); //gives 6

let multiplybythree= multiply.bind(this,3);
multiplybythree(5);


//using closures
let multiply= function(x){
    let innerfn=function(y){
        console.log(x*y);
    }
}

let multiplybytwo = multiply(2);
multiplybytwo(3);