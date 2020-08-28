// for constructor function , convention is to use function name starting with capital letters
function CreatePlayer(name,goals){
    // this will refer to who will call them
   this.name=name
   this.goals=goals
 }
 

//  can not use arrow function because arrow function is having lexical scope m which means arrow functions are always surrounded with global object i.e. window Object. Arrow function never detect that who called it it always with global object 
//  whereas regular function are dynamically scope . 
// regular  functions are initially surrounded with global object i.e.  window object. Regular function  detect that who called and bind itself with object eho called it
 CreatePlayer.prototype.showgoal=function (){
    return "I am "+this.name+" I have scored total "+this.goals+" goals"
 }

 CreatePlayer.prototype.build=function (){
     //  with approach 2
let self=this
    const place=()=>{
        // this keyword inside regular(not in arrow function) function, which is also inside any regular function, will point to global object i.e. window object. It can not detect whoo calls this,
        // therefore we need to bind nested regular(not arrow function) function with object who called this
        //  there are 2 aapproches to bind this 
        //  with approach 2
    return "I am "+self.name+" I am from Spain"
        //  with approach 1
        // return "I am "+this.name+" I am from Spain"
    }
//  with approach 1
    // return place.bind(this)
    //  with approach 2
    return place()
 }


//   this is how to call constructor function,usingnew keyword, to achieve prototype inheritence
 const player1=new CreatePlayer("Ronaldo",800)
 const player2=new CreatePlayer("Messi",500)



//  console.log(player1.__proto__)// showgoal..,because player1 is prototype inherited

//  console.log(createPlayer.__proto__)// every function is inherited from Function by prototype
 
//  console.log(Function.prototype)// inherited from Object prototypely
 
//  console.log(createPlayer.prototype) // will show all proto type property


//  console.log(player1.name)
// with approach 1
//  console.log(player2.build()())
//  with approach 2
 console.log(player1.showgoal())
 console.log(player1.build())
 console.log(player2.showgoal())
 console.log(player2.build())


//   we wiill se how to write this construction in form of class but in the back it will run as constructore function