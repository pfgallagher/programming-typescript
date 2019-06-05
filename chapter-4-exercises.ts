// tslint:disable: interface-over-type-literal
export {};
// 1. -> Both: return type is always inferred and the parameters can be inferred if there is sufficient context.
// 2. -> No, it is not. The suggested alternative is using the spread operator, i.e. ...args
// 3. ->
type Reservation = unknown;

type Reserve = {
	(from: Date, to: Date, destination: string): Reservation;
	(from: Date, destination: string): Reservation;
	(destination: string): Reservation;
};

const reserve: Reserve = (
	fromOrDestination: Date | string,
	toOrDestination?: Date | string,
	destination?: string,
) => {
	if (
		fromOrDestination instanceof Date &&
		toOrDestination instanceof Date &&
		destination !== undefined
	) {
		// book a round-way trip
	} else if (
		fromOrDestination instanceof Date &&
		typeof toOrDestination === "string"
	) {
		// book a one-way trip
	} else if (typeof fromOrDestination === "string") {
		// book an immediate trip
	}
};
// 4. ->
const call = <T extends [unknown, string, ...unknown[]], R>(
	f: (...args: T) => R,
	...args: T
): R => f(...args);

const fill = (length: number, value: string): string[] =>
	Array.from({ length }, () => value);

const numsToArr = (one: number, two: number): number[] => [one, two];

call(fill, 10, "a"); // No errors
// call(numsToArr, 10, 5); -> Throws error

const is = <T>(...args: T[]): boolean => args.every(arg => arg === args[0]);

is("string", "otherstring"); // -> false
is(true, false); // -> false
is(42, 42); // -> true
// is(10, "foo"); // -> error
is([1], [1, 2], [1, 2, 3]); // -> false
