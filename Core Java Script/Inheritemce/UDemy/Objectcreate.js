
// this is how we will declare common functionality on single place and then will protype inherit these property by any fuction or class who needs this 
//  these common functionality wont go with any particular object. It will be called when ever any object is called . These functionality will get memory ince
const playerFunctiomStore={
   showgoal(){
        return "I am "+this.name+" I have scored total "+this.goals+" goals"
    
}
}

function createPlayer(name,goals){
    // here we are inheritng playerFunctiomStore by prototype inheritence. This is purest way to create prototype inheritence 
    let players=Object.create(playerFunctiomStore)
    console.log(players.__proto__)
    players.name=name
    players.goals=goals
    return players
 }
 
 const player1=createPlayer("Ronaldo",800)
 const player2=createPlayer("Messi",500)
 console.log(player1.showgoal())
 console.log(player2.showgoal())


//  we will see in next video  how to acheive prototype inheritence by constructor functions