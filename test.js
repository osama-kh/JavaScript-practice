// const enemies = [
//     { e: "Plastic" },
//     { e: "Cigarettes" },
//     { e: "The Man" }
// ]

// for (let enemy of enemies) {
//     console.log(enemy.e)
// }

// const person = {        
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }  
  
//   person.feed() //should alert "I'm no longer hungry"



const family = function (){
 const arr_member = []

  function birth(name){
    arr_member.push(name)
    console.log(arr_member)

 }
return birth
}

const giveBirth = family()

giveBirth("osama")
giveBirth("mohamed")
giveBirth("khaled")