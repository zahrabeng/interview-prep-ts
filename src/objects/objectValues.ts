/* 
    the Object.values() method will go through each key-value
    pair in the object and return an array of each given 
    objects values. 
 */

const person = {
    name:"zahra", 
    age:"18",
    pet:"dog"
}

const data = Object.values(person)
console.log(data)