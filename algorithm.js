function printStarSeries(size, count ) {
    while(count!=0){
    for (var i = 0; i < size*2; i++) {
        for (var j = 0; j < size; j++) {
            if (i >= j && size-i-1>=j-size) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        
          console.log();  
    }
    console.log();      
    count--
}

}

// printStarSeries(8, 3);



const reverse = function(str){
        
    let reversed = ""
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i];
    }

    return reversed
  }
      
//  console.log(reverse("dog"))  //should return "god"
//  console.log(reverse("race car")) //should return "rac ecar"

function non_repeating(str){
    const char_count={}
    for(let char of str){
         if(char_count[char] >= 1){
            char_count[char]++
        }else{
         char_count[char]=1

        }
    }
    console.log(char_count)

    for(let char of str){
if(char_count[char]==1){
    return char
}
    }

}
//  console.log(non_repeating("ahhhooomdca")) 

function encrypt(str){
    let enc_str=""
    for(let i of str){
        enc_str += String.fromCharCode(i.charCodeAt()+1)
    }
    return enc_str

}
// console.log(encrypt("abc"))

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
  let jumbledArr = []
  let temp = arr1.concat(arr2) 

  while(temp.length!=0){

  let random = Math.floor(Math.random() * temp.length);
jumbledArr.push(temp[random])
temp.splice(random,1)
  }


  return jumbledArr
}
    
// console.log(jumble(colors, foods)) 

// function getLetter(letters){
//     let random = Math.floor(Math.random() * temp.length);


// }

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}

function getLetter(dist) {
   
    const randomNum = Math.random() * 100;
    let Target_prob = 0;

    for (const [letter, prob] of Object.entries(dist)) {
        Target_prob += prob;
        console.log(Target_prob)
        if (randomNum < Target_prob) {
            return letter;
        }
    }

    return null;
}

// console.log(getLetter(rawDist))




class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    remove_reapting(){
        let node_data=[]
        let current = this.head;
        while (current !== null) {
            node_data.push(current.data)
            current = current.next;
        }

        const set =new Set(node_data)
    this.head=null
        for(let i of set){
            this.append(i)

        }



    }
}

const myList = new LinkedList();
myList.append(2);
myList.append(2);
myList.append(2);

myList.print();
myList.remove_reapting()
myList.print();



