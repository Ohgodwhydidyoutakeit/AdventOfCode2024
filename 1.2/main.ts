
import { column_left, column_right } from "./input.ts";



(function () {
  // here we wont need a sorted array
  // we will create a map object with key(beeing the number) : value (beeing the number of times it appears)
  // then just loop throught the mapped object and multiply key * value and add them up
  // will be using brute force - since i can and the arrays are relatively short
  const numberMap: Map<number, number> = new Map();

  column_left.forEach((element: number) => {
    let [number, apperances] = returnNumberOfTimesValueAppearsInSecondArray(element, column_right)
    numberMap.set(number, apperances)
  })

  const apperances = calculateSimilarityScore(numberMap)

  console.log(apperances)

}())

function returnNumberOfTimesValueAppearsInSecondArray(value: number, array: number[]): [number, number] {
  // create sub array and then just get length
  const numberOfApperances = array.filter((val) => val === value).length
  return [value, numberOfApperances]
}

function calculateSimilarityScore(map: Map<number, number>): number {

  const filteredMap = new Map<number, number>();

  map.forEach((value, key) => {
    if (value !== 0)
      filteredMap.set(key, value)
  })


  let array: number[] = []

  filteredMap.forEach((value, key) => {
    array.push(key * value)
  })


  return array.reduce((a, b) => a + b)
}


