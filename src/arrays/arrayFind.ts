/* 
    the .find() method will go through each element in an array and 
    return the FIRST element that satisfies the condition 
 */

//using find function to return an element bigger than 10
export function biggerThanTen(numberArr: number[]) {
  const result = numberArr.find((num) => num > 10);
  return result;
}

//using find with a callback function
export function isOver18(array: number[]) {
  const result = array.find(checkAge);
  return result;
}

function checkAge(age: number) {
  return age > 18;
}
