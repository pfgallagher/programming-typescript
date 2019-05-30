export {};
// 1.
// // a. -> number
let a = 1042;
// // b. -> string
let b = "apples and oranges";
// // c. -> "pineapples"
const c = "pineapples";
// // d. -> boolean[]
let d = [true, true, false];
// // e. -> {type: string}
let e = {type: "ficus"};
// // f. -> (number | boolean)[]
let f = [1, false];
// // g. -> number[];
const g = [3];
// // h. -> any
let h = null;

// 2.
// // a. -> i is explicitly assigned the specific number type of 3.
// // b. -> j has been implicitly typed as a number[]. 
// // c. -> k is assigned the type of never, which means it can never have a value or will never return a value. 
// // d. -> Since l is of type unknown, you need to check its type before you interact with it as if it were a number. 