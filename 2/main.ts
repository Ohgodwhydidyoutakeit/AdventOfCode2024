


import * as reports from './input.json' with { type: "json" };

type ReportLine = Array<number>
type Direction = "up" | "down" | "stale"




(function () {
  // i think the best method would be to use pointers - left and right then just implements cheks

  const resultsArray: boolean[] = []
  const lines = reports.default.map((line: string[]) => {
    return line.map((element) => +element)
  })

  lines.forEach((element) => {
    const result = checkReport(element)
    resultsArray.push(result)
  })


  const result = countResults(resultsArray)

  console.log(result)




  // 680 
  // !!! riously, it's the right answer for someone else; you might be logged in to the wrong account or just unlucky
  // 670 -- was the answer - i was checking is left === right not values

  // now we can accept single fuckup - bad value 
  // 711 -- nope
  // 719 -- nope
  // 888 -- nope
  // const test = reports.default[4].map(element => +element)

  // console.log(checkReport(test))


}())


function checkReport(reportLine: ReportLine): boolean {

  // The levels are either all increasing or all decreasing.
  // Any two adjacent levels differ by at least one and at most three.
  let left = 0;
  let right = 1;
  let direction: Direction | undefined = undefined
  let isReportOk : boolean = true;

  const { length } = reportLine

  // first check for direction 
  direction = setDirection(reportLine[0], reportLine[1])

  for (let i = 0; i < length; i++) {
    
    // return if the right is equal to length
    if (right === length) {
      break;
    }

    const leftValue = reportLine[left]
    const rightValue = reportLine[right]


    // if the left VALUE  and right VALUE are the same its not ok
    if (leftValue === rightValue) {
      isReportOk = false
      break;
    }

    // every step check for direction
    const currentDirection: Direction = setDirection(leftValue, rightValue)
    if (currentDirection !== direction) {
      isReportOk = false
      break;
    }


    // Any two adjacent levels differ by at least one and at most three
    const difference = Math.abs(leftValue - rightValue)
    if (difference > 3) {
      isReportOk = false;
      break;
    
    }

    // increment pointers
    left += 1
    right += 1
      
    isReportOk = true
  }

  return !!isReportOk

}

function countResults(resultArray: boolean[]): number {
  return resultArray.filter((value) => value).length
}



function setDirection(a: number, b: number): Direction {
  if (a === b)
    return "stale"

  if (a < b)
    return "up"

  return "down"
}