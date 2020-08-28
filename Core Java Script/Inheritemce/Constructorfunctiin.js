const football={
    name:"messi",
    goals:500,
    goal(){
        return "I have scored total "+this.goals+" goals"
    }
}
// here football is object , therefore undefined . because object does not contain any prototype
// console.log(football.prototype)


const football1=function(){
    name="messi"
    goals=500
   return function(){
        return "I have scored total "+this.goals+" goals"
    }
}
// here football1 is function , therefore it is prototype inherited from function . thsts why  function does  contain  prototype
// console.log(football1.__proto__)
// console.log(Function.prototype)


// first way to create protype inheritence, by Object.create

const foot=Object.create(football1)
const foot1=this.foot()
console.log(foot.__proto__)
console.log(foot.prototype)
console.log(foot1())