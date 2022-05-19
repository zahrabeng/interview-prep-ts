import {biggerThanTen} from "../src/arrays/arrayFind"
import {isOver18} from "../src/arrays/arrayFind"

test("check if a number is bigger than ten", () => {
    expect(biggerThanTen([2, 30, 5, 10])).toBe(30)
})

test("check if age is older than 18", ()=> {
    expect(isOver18([1, 10, 20, 66, 8])).toBe(20)
})