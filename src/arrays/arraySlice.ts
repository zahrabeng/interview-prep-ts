/*  --slice(start, end)

    the .slice() method will create a shallow copy of the original 
    array given a start index and an optional end index. 
    
    NOTE: End index NOT included

*/

//new array that starts at given index
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const slicedAnimals = animals.slice(2);
//console.log(slicedAnimals, "should be camel, duck, elephant")

//new array that starts at an index and ends at an index 
//NOTE; end index will not be included in the array
const dogs = ["terrier", "pitbull", "yorkie", "sausage", "labrador", "staffie"]
const slicedDogs = dogs.slice(1, 4)
//console.log(slicedDogs)