"use strict";
exports.__esModule = true;
var reserve = function (fromOrDestination, toOrDestination, destination) {
    if (fromOrDestination instanceof Date &&
        toOrDestination instanceof Date &&
        destination !== undefined) {
        // book a round-way trip
    }
    else if (fromOrDestination instanceof Date &&
        typeof toOrDestination === "string") {
        // book a one-way trip
    }
    else if (typeof fromOrDestination === "string") {
        // book an immediate trip
    }
};
// 4. ->
var call = function (f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, args);
};
var fill = function (length, value) {
    return Array.from({ length: length }, function () { return value; });
};
var numsToArr = function (one, two) { return [one, two]; };
call(fill, 10, "a"); // No errors
// call(numsToArr, 10, 5); -> Throws error
var is = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.every(function (arg) { return arg === args[0]; });
};
is("string", "otherstring"); // -> false
is(true, false); // -> false
is(42, 42); // -> true
// is(10, "foo"); // -> error
is([1], [1, 2], [1, 2, 3]); // -> false
