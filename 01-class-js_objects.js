// Class code examples

const person1 = {
    firstName : "Chee Kean",
    weight : 231,
    height : 1.7,
}

const person2 = {
    firstName : "Marco blabla",
    weight : 222,
    height : 1.4,
}

const person3 = {
    firstName : "Jorge lasda",
    weight : 2312,
    height : 1.73,
}

// Accesing a property with dot notation
console.log(

    person1.firstName,
    person1.weight
)

// Accesing a property with bracker notation
console.log(

person1["weight"],
person2["firstName"]
)

const personKey = ["firstName" , "weight" , "height"]

for(key of personKey){
    console.log(`person1 ${key}: `, person1[key])
}


person1.nationality = "Italian"

console.log(person1.favFood)

person1["favFood"] = "pizza"

const newKey = `favourite book`
person1[newKey] = "guide to galaxy"

console.log("person1: ", person1)

console.log(person1["favourite book"])

for (key in person1) console.log(person1[key])

for (i = 0; i < Object.keys(person1).length; i++){
    console.log(person1[`${Object.keys(person1)[i]}`])
}

const twin1 = {
    name: "carlos",
    age: 24

}
 const twin2 = {
     name: "carlos",
     age: 24

 }
 console.log(twin1 === twin2)