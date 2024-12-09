import { column_one, column_two } from "./input.ts"




(function () {

    const colOne = sortArray(column_one)
    const colTwo = sortArray(column_two)

    if (!isSameSize(colOne, colTwo))
        throw new Error("Something went wrong. The columns are different sizes")

    // take absolute value of subtraction between each indexes
    // we made sure that they are the same length
    let columnsLength = colOne.length
    let temporaryArray: number[] = []
    for (let i = 0; i < columnsLength; i++) {
        const difference = colOne[i] - colTwo[i]
        const absoluteDifferenct = Math.abs(difference)
        temporaryArray.push(absoluteDifferenct)
    }

    // sum all the differences 

    const sum = temporaryArray.reduce((a, b) => a + b)

    console.log(sum)
    //  output was 1765812
})();




function sortArray(array: number[]): number[] {
    const sortedArray = array.sort((a, b) => a - b)
    return sortedArray
}

function isSameSize(array1: number[], array2: number[]): boolean {
    return array1.length === array2.length
}