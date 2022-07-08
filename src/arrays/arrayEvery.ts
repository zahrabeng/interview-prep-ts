/* 
    the .every() method will go through each element in an array and 
    checks whether every element in the array passes the condition. 
    Boolean value returned respectively. 
 */


//checks whether all ages are younger than 18
const children = [1, 12, 17, 2, 8]
const areUnderage = children.every((child) => child < 18)
console.log(areUnderage)