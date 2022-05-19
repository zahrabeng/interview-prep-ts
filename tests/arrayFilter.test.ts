import {biggerThanFive} from "../src/arrays/arrayFilter"
import {getEvens} from "../src/arrays//arrayFilter"

test("return an array of words only if word len > 5", ()=> {
    expect(biggerThanFive(["hello", "zahrouna", "palace", "mono"])).toStrictEqual(["zahrouna", "palace"])
})

test("returns an array of only even numbers", ()=> {
    expect(getEvens([1, 2, 4, 5, 6, 7])).toStrictEqual([2, 4, 6])
})