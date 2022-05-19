/* 
     the .map() method will go through each element in an array and 
     update each element according to what you wish to do with it
*/

// using map function to multiply each number in the array by two
export function timesTwo(array: number[]): number[] {
    const doubledArr = array.map((num) => num * 2);
    return doubledArr;
}



//using map function to reformat an object
const objArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

export function objectReform() {
    const reformattedObj = objArray.map(({ key, value }) => ({ [key]: value }));
    return reformattedObj;
}

//console.log(objectReform());
