/*
    the .reduce() method will will use a "reducer" callback
    function to each element of the array, passing the return value
    of the previous element to the next element. 

    The final result of the reduce function will be a
    SINGLE ELEMENT. 

    Easy explanation ==> reduce returns the SUM of all elements 
    within an array
*/

//returns the sum of all the numbers within the array
const values = [1, 2, 3, 4, 5, 6, 7]
const sum = values.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(sum)

//returns the sum of all the numbers PLUS an initial value
const initialValue = 4
const newSum = values.reduce((previousValue, currentValue) => previousValue+currentValue, initialValue)
console.log(newSum)