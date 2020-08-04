let myProfile=function (state,country){
    console.log("My name is "+this.firstname+" . I am "+this.age+" years Old. I live in "+state+" , "+country)
}

let employee1={
    firstname:"Cristiano Ronaldo",
    age:35
}
let employee2={
    firstname:"Karim Benzaman",
    age:33
}
let employee3={
    firstname:"Gerarth Bale",
    age:31
}

// call method
myProfile.call(employee1,"Madrid","Spain")
// apply method
myProfile.apply(employee2,["Madrid","Spain"])
// bind method
let playerProfile = myProfile.bind(employee3,"Madrid","Spain")
playerProfile()