/* 
    the .filter() method will go through each element in an array and 
    add it to the new array based on whether it passes a specific condition
 */

    

//one-line filter method does not need a seperate function, can be used for filtering
//based on a simple codition
export function biggerThanFive(wordsArr: string[]) {
  const result = wordsArr.filter((word: string) => word.length > 5);
  return result;
}

//filter method that uses a callback function that states the condition. Filter
//will run this function for every element in the array. should return a BOOLEAN

//func to check even numbers
const isEven = (num: number) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//func that uses the previous function as a callback in the filter method
export function getEvens(array: number[]) {
  const evenArr = array.filter(isEven);
  return evenArr;
}
