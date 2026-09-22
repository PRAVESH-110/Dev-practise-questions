const person = {
    name: "ram",
    age: 22,
    greet : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person.greet());

//Hello , you are undefined years old
//since Arrow functions do not have their own this. Instead, they inherit this from the
// surrounding (lexical) scope, which means
// the value of this is determined by where the function is defined, not how it is called.

// JavaScript bind() Method: the bind() method permanently fixes the value of this to a specific object for a function,
// JavaScript call() and apply() Method: call() and apply() methods invoke a function immediately while explicitly assigning this to a chosen object.