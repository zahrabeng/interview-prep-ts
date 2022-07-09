/* 
    the Object.hasOwnProperty() method will check if 
    a property exists within said object.
    Boolean return value 
 */

const person1 = {
    name:"andy", 
    age:18,
    job:"finance"
}

const hasRole = person1.hasOwnProperty("role")
const hasJob = person1.hasOwnProperty("job")

console.log(hasRole)//should be false
console.log(hasJob)//should be true