
import { readLines } from "https://deno.land/std@0.201.0/io/mod.ts";

(function () {
  readFile();
})();

async function readFile() {
  const file = await Deno.open("./input.txt", { read: true });
  const lines: number[][] = []
  try {
    for await (const line of readLines(file)) {
      lines.push(stringToArray(line))
    }
  } catch (error) {
    console.error("Something went wrong", error);
  } finally {
    file.close();
  }

  await Deno.writeTextFile("./input.json", JSON.stringify(lines, null, 2));
}



function stringToArray(line: string): number[] {

  return line.split(" ").map((element) => +element)
}