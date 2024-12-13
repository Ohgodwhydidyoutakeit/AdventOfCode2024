
const INPUT_PATH = "./input.txt";

const file = readFile();


solution1(); //167650499
solution2(); // 95846796

function solution1() {

  try {
    const parsedInput = parseInputMut(file)

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
}

function solution2() {
  const parsedInput = parseInputWithDoAndDontMut(file)

  const checkedArray = dosArray(parsedInput)

  const extractedData = extractData(checkedArray)

  const multipliedArray = multiplyInsideArray(extractedData)

  const solution2 = addAndReduce(multipliedArray)

  console.log(solution2)


}




function dosArray(inputArray: string[]): string[] {
  const startString = "do()";
  const stopString = "don't()";

  let shouldBePushed: boolean = true;
  const temporaryArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const value = inputArray[i]

    if (value === stopString) {
      shouldBePushed = false
      continue;
    }

    if (value === startString) {
      shouldBePushed = true
      continue;
    }

    if (shouldBePushed) {
      temporaryArray.push(value)
    } else {
      continue
    }

  }


  return temporaryArray
}

function addAndReduce(inputArray: number[]): number {
  return inputArray.reduce((a, b) => a + b)
}

function multiplyInsideArray(inputArray: [number, number][]) {
  return inputArray.map((element) => {
    return element.reduce((a: number, b: number) => a * b)
  })
}

function extractData(input: RegExpMatchArray | string[]): [number, number][] {
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


function parseInputWithDoAndDontMut(input: string): string[] {
  // const regex = /\d+|do\(\)|don't\(\)/g;
  const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
  const matches = input.match(regex);
  return matches ? matches.map(item => item.includes('do') || item.includes('don\'t') ? item : item) : [];
}
function parseInputMut(input: string): RegExpMatchArray | null {
  const regex = /mul\((\d+),(\d+)\)/g;
  return input.match(regex)
}


function readFile(): string {
  return Deno.readTextFileSync(INPUT_PATH);
}


