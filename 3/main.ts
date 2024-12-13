
const INPUT_PATH = "./input.txt";



(function () {

  const file = readFile();

  try {
    const parsedInput = parseInput(file)

    if (!parsedInput) {
      throw new Error("There are no matches in provided input")
    }

    const extractedData = extractData(parsedInput)

    const multipliedArray = multiplyInsideArray(extractedData)

    const solution1 = addAndReduce(multipliedArray)

    console.log(solution1)

  } catch (error) {
    console.error(error)
  }

}())




function addAndReduce(inputArray: number[]): number {
  return inputArray.reduce((a, b) => a + b)
}

function multiplyInsideArray(inputArray: [number, number][]) {
  return inputArray.map((element) => {
    return element.reduce((a: number, b: number) => a * b)
  })
}

function extractData(input: RegExpMatchArray): [number, number][] {
  const numberArray: [number, number][] = input.map((element) => {
    return getDigits(element)
  })

  return numberArray
}

function getDigits(input: string): [number, number] {
  const regex = /\d+/g;
  const matches = input.match(regex);
  return [+matches![0], +matches![1]]
}

function parseInput(input: string): RegExpMatchArray | null {
  const regex = /mul\((\d+),(\d+)\)/g;
  return input.match(regex)
}


function readFile(): string {
  return Deno.readTextFileSync(INPUT_PATH);
}


