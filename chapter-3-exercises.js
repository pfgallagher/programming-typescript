"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.
// // a. -> number
var a = 1042;
// // b. -> string
var b = "apples and oranges";
// // c. -> "pineapples"
var c = "pineapples";
// // d. -> boolean[]
var d = [true, true, false];
// // e. -> {type: string}
var e = { type: "ficus" };
// // f. -> (number | boolean)[]
var f = [1, false];
// // g. -> number[];
var g = [3];
// // h. -> any
var h = null;
// 2.
// // a. -> i is explicitly assigned the specific number type of 3.
// // b. -> j has been implicitly typed as a number[]. 
// // c. -> k is assigned the type of never, which means it can never have a value or will never return a value. 
// // d. -> Since l is of type unknown, you need to check its type before you interact with it as if it were a number. 
