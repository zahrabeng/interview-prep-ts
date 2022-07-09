/* 
    the Object.assign() method can be used to append an 
    existing object or merge two objects together. 

    NOTE: This method will overright the TARGET object (first obj in the bracket)
 */


const pet = {
    name:"danny",
    breed:"dog"
}

const otherDetails = {
    age: 3,
    likes:"sausages"
}

//created a new variable where the two objects are merged using object.assign
const merged = Object.assign(pet, otherDetails)
//console.log(merged)


//can also add the object directly within the assignment
const merged2 = Object.assign(pet, {colour: "grey"})
//console.log(merged2)


//here i've made a copy of the object by using an empty object as
//the target value. This way the original object wont be manipulated
const copy = Object.assign({}, pet, {sleepTime:10})
console.log(pet, copy)