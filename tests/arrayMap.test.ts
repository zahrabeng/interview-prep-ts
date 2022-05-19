import {timesTwo} from "../src/arrays/arrayMap"


test("times each number in array by two", ()=>{
    expect(timesTwo([1, 2, 3, 4, 5])).toStrictEqual([2,4,6,8,10])
})

