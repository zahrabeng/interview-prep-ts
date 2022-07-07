/*
    Add or remove elements to the beginning of an array
*/


//removes and returns the first element in the array
let veggies:string[] = ['tomato', 'cucumber', 'lettuce']
//console.log(veggies.shift(), veggies)


//adds element to the beginning of an array
//added veggies will return the length of the new array
const addedVeggies = veggies.unshift('courgette')
console.log(veggies)