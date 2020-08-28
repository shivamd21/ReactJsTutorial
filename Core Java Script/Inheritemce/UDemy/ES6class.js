//  this is same as constructor function. Only this is written in class format and in previouus file it is written in constructor function format

class CreatePlayer{
    constructor(name,goals){
        this.name=name
        this.goals=goals
    }

    showgoal(){
        return "I am "+this.name+" I have scored total "+this.goals+" goals"
     }
     build(){
//    let self=this
       function place(){
        // with approach 2
            //   return "I am "+this.name+" I am from Spain"
            // with approach 1
           return "I am "+this.name+" I am from Spain"
       }
   
       return place.bind(this)
    }
   
}


const player1=new CreatePlayer("Ronaldo",800)
const player2=new CreatePlayer("Messi",500)
console.log(player1.showgoal())
console.log(player1.build()())
console.log(player2.showgoal())
console.log(player2.build()())