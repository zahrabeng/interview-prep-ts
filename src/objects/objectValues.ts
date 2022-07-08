/* 
    the Object.values() method will go through each key-value
    pair in the object and return an array including each given 
    objects value. 
 */

const person = {
    name:"zahra", 
    age:"18",
    pet:"dog"
}

const data = Object.values(person)
console.log(data)