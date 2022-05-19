/*  --splice(start, deleteCount, item1)

    the .splice() method will change the contents of an existing array
    by removing , replacing or adding specific elements within an array

*/

// adds may to the fourth index of the array, deletes none
const months = ['Jan', 'Feb', 'Mar', 'Apr']
months.splice(4, 0, 'May')
//console.log(months)

//adds two elements to the second index of the array, deletes none
const cars = ['jeep', 'honda', 'porsche', 'kia']
cars.splice(2, 0, 'polo', 'tractor')
//console.log(cars)

//replaces one value in first index
const fruits = ['apple', 'banana', 'pear', 'orange']
fruits.splice(1, 1, 'kiwi')
//console.log(fruits)

//deletes one value with index one
const countries = ['japan', 'england', 'france']
countries.splice(1, 1)
//console.log(countries)