

import * as reports from './input.json' with { type: "json" };

function isDecreasingCorrectly(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i] - arr[i + 1]

    if (diff <= 0 || diff >= 4) return false
  }

  return true
}

function isIncreasingCorrectly(arr) {
  return isDecreasingCorrectly(arr.toReversed())
}

function isRowSafe(arr) {
  return isDecreasingCorrectly(arr) || isIncreasingCorrectly(arr)
}

function solution1(input) {
  const rows = formatInput(input)

  return rows.filter(isRowSafe).length
}

// console.log(solution1(data)) // 670

function getRowPermutations(arr) {
  return arr.map((_, idx) => arr.toSpliced(idx, 1))
}

function solution2() {

  const rows = reports.default.map((line: string[]) => {
        return line.map((element) => +element)
      })

  return rows.filter(
    row => isRowSafe(row) || getRowPermutations(row).some(isRowSafe)
  ).length
}


console.log(solution2()) // 700
