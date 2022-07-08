/* 
    the Object.keys() method will go through each key-value
    pair in the object and return an array including each given 
    objects keys. 
 */

const coding = {
    language:"python", 
    difficulty:"easy", 
    time:"three months"
    
}

const keys = Object.keys(coding)
console.log(keys)