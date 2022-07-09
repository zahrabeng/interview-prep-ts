/* 
    there are various different ways that you can append
    an object or change one of the values within the object.
 */

let student = {
    name:"henry",
    age:18
}
//replaces known key value with another value
student.name = "joe"


//using the spread operator to create a new object 
//with the old object values plus the new key value pairs
const editedStudent = {...student, gender: "male"}
console.log(editedStudent)