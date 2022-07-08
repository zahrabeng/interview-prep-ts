/* 
    the .findIndex() method returns the first index of an 
    element that satisfies a specific condition. 

    If no element satisfies the condition -1 is returned. 
 */


//returns index of the first number bigger than 100
const nums = [3, 4, 6, 7, 209, 2000]
const index = nums.findIndex((num) => num > 100)
console.log(index)

//returns index of the animal snake
const pets = ['dog', 'cat', 'snake', 'bird', 'sheep' ]
const indexPets = pets.findIndex((pet) => pet === 'snake' )
console.log(indexPets)