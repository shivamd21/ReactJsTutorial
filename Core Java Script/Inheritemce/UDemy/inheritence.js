class CreatePlayer{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    showPlayerDEtails(){
        return "I am "+this.name+" I am "+this.age+" years old"
     }
   
}

// extends will connect the Cricketers to createplayer by prototypt
class Cricketers extends CreatePlayer{
    constructor(name,age,runs){
        super(name,age);
        this.runs=runs
      
    }

    showRecord(){
        return "I have scored total "+this.runs+" runs"
 
    }
}

// extends will connect the Footballer to createplayer by prototypt

class Footballer extends CreatePlayer{
    constructor(name,age,goals){
        super(name,age);
        this.goals=goals
      
    }

    showRecord(){
        return "I have scored total "+this.goals+" goals"
 
    }
}
const football=new Footballer("Ronaldo",37,800)
const cricket=new Cricketers("Virat Kohli ",23,15500)

// console.log(cricket.showPlayerDEtails())
// console.log(cricket.showRecord())
// console.log(football.showPlayerDEtails())
// console.log(football.showRecord())
