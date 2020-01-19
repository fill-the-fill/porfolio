let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
companies.splice(1, 1)
console.log(companies)

let myStuff = [ "Tesla" , "Mcdonalds" , "Elevation" ]

myStuff.push("Tesla")
myStuff.unshift("ELevation")
myStuff.push("1", "2", "3")
myStuff.push(...myStuff)
console.log(myStuff)


let plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]

console.log("The first plant is " + plants[0] + " ,and the last one is " + plants[3])



let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]

employees.push(...candidates)

console.log(employees)


const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let genes2 = [genes[0], genes[1], genes[4], genes[2], genes[3], genes[3]]
genes2.unshift("FXT")
console.log(genes2)



let person = {
    name: "Mariah",
    occupation: "Gangster"
  }
console.log(person.occupation)


const name = ["Mariah", "James", "Luke"]
const occupations = ["Gangster", "Preacher", "Hero"]

console.log(name[0], "is a ", occupations[0])

let car = {
    color: "brown",
    numWheels: 5,
    isFancy: true
}

console.log("The car is " + car.color + " it has " + car.numWheels + " wheels . It is ")

if(car.isFancy) {
    console.log("fancy")

}
else{
    console.log("Not fancy")
}



const me = {
    eyes: "brown",
    toBeggining: true,
    bag: ["Laptop", "Bottle", "Phone"]
}

if(me.toBeggining) {
    me.bag.unshift(me.eyes)
}
else {
    me.bag.push(me.eyes)
}

console.log(me)


const human = {
    age: 0
}

let babyNameKey = "name"
let babyNameValue = "Goojibear"

human[babyNameKey] = babyNameValue

human.name = "John"

console.log(human)

let apple = {
    color: "red",
    name: "apple"
  }
  
  let cheese = {
    color: "yellow",
    name: "cheese"
  }
  
  let foods = [apple, cheese]
  
  console.log(foods[0].name) // apple
  console.log(foods[1].color) // yellow


let numbers = [1, 2, 3]
let num = numbers

num [0] = 50

console.log(numbers)


let p1 = {
    name: "Jill",
    age: 20,
    city: "Riga"
}

let p2 = {
    name: "Robert",
    age: 30,
    city: "Riga"
}

if(p1.age == p2.age) {
    console.log("Jill wanted to date Robert")
}

else { 
    console.log(" ")
}

if(p1.city == p2.city) {   
    console.log("Jill wanted to date Robert")
}
else {
    console.log("Jill wanted to date Robert, but couldn't")
}


let myList =[ {
    color: "red",
    number: 5
},"hjj",{number:43}]

myList[0].color = "blue"
myList.splice(2, 1)

console.log(myList)


let myList2 = [ {
    smell: "nice",
    temp: 5
}, "test"]

myList.push(...myList2)

console.log(myList)


let library = {
    books: [
        { title: "1", author: "Bob"},
        { title: "2", author: "Alex"},
        { title: "3", author: "Dora"},

    ]
}

console.log(library)

myList.push(library.books)




const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const Xame = prompt('Please enter the name for your reservation');
    if(reservations.Bob.claimed == false) {
        alert("Hello Bob, your reservation is unclaimed.");
    }
    else {
        alert("Reservation is already claimed!")
    }


    if(reservations.Ted.claimed == true) {
        alert("Hello, your reservation is waiting for you")
    }
    else {
        alert("Hello Ted, your reservation is unclaimed.")
    }

