/**
 * first program
 */
console.log("Hello, world!");

/**
 * catching errors
 */
const students = [
  { name: "John", score: 70 },
  { name: "Mark", score: 90 },
];

for (const student of students) {
  console.log("Name: ", student.name);
  console.log("Score : ", student.score);
}

/// @ts-ignore
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(1, 2)); // 3
console.log(addNumbers(1, "2")); // 12  
console.log(addNumbers("text", 2)); // text2

function addNumbersTS(a: number, b: number): number {
  return a + b;
}
console.log(addNumbersTS(1, 2)); // 3
//console.log(addNumbersTS(1, "2")); // 12  
//console.log(addNumbersTS("text", 2)); // text2