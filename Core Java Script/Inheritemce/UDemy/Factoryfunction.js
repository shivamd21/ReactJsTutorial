// for 100 playesrs we need to create 100 player object,which will consume a lot of memory. we can also achieve same thinh by factory function
// const player1={
//     name:"Ronaldo",
//     goals:700,
//    showgoal(){
//     return "I am "+player1.name+" I have scored total "+player1.goals+" goals"
//     }
// }

// const player2={
//     name:"Messi",
//     goals:500,
//    showgoal(){
//         return "I am "+player2.name+" I have scored total "+player2.goals+" goals"
//     }
// }
// console.log(player1.showgoal())
// console.log(player2.showgoal())



//  factory(just refence name, nothing new) function is generic which will return object for each player with its properties
//  this is oops  way to create player, where code is not repeating.
function createPlayer(name,goals){
   return {
    name,
    goals,
   showgoal(){
        return "I am "+name+" I have scored total "+goals+" goals"
    }
   }
}

const player1=createPlayer("Ronaldo",800)
const player2=createPlayer("Messi",500)
console.log(player1.showgoal())
console.log(player2.showgoal())

// one problrm with this code 
// 1. it is valid that every player will get space for name and goals because name and goals for each player will be differentimport React from 'react';

// but showgoal function is generic , but in this approach showgoal is also getinhg memory with all the player. which should not be case.
// lets remove this in next video by applying prototype iheritence