// global scope is outermost scope

// function fun1(){
//     var a="fun1"
//     return function fun2(){
//         var b="fun2"
//         return function fun3(){
//             var c="fun3"
//             console.log(a)
//             console.log(b)
//             console.log(c)
//         }
//     }
// }

// fun1()()()

// scope chain explained
// here fun2 has lexical environ ment as fun1 and fun3 has fun2
// c is variable of fun3 . no issue with c 
// b is not variable of fun3 , therefore it will look up in lexical environment there it will find in fun2. and same case with c 

// if any function doesnot find any variable in their own variable environment . then it will go for their parent lexical environment and will go till flobal lexical environment. Global lexical environment is last lexical environment 

// 'use strict'
// function wierd()
// {
//     // here we are not defining type of variable (i.e. var let const), but at time of calling function its get executes. this is because at run time global environment will delare. but if we write 'use strict' on top of file , it wont happen. Global environment can not declare the variable which dont have any type
//     name="harshit"
//     console.log(name)
// }

// wierd()


// function block vs block scope 
// block scope is { something written inside  curly braces }
// function scope-> some thing written inside function

function FunctionvsBlock(){

    if(5>3){
        // here var1 is function scope, we can also access it to outside of block  because it defines with var keyword 
        //  on the other hand, var2 is block scope, we can not access it to outside of block  because it defines with let keyword
        var var1="var type do not support block scope"
        let var2="let or const type do  support block scope"
    }
    console.log(var1)
    // console.log(var2)
}
FunctionvsBlock()

// note --> variables declared with var keyword is functionally scope . we can also access them outside of block
//  variable declared with let and const keyword are block scope. they can not aceess outside of block