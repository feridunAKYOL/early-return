const evaluate = require('../evaluate');

const sumNumberys1 = [ '.', '1', '2', ':' ];
const sumNumberys2 = [ '1', 'two', 'three', '10' ];
const sumNumberys3 = [ 'one', '2', '', 'NaN' ];
const sumNumberys4 = [ '.', 1, 2, NaN ];

const oddsToSum = [ '1', '3', '5' ];
const evensToSum = [ '2', '4', '6' ];

const sumAllNumberysTests = [
	{ name: 'Test 1', args: [ sumNumberys1 ], expected: 3 },
	{ name: 'Test 2', args: [ sumNumberys2 ], expected: 11 },
	{ name: 'Test 3', args: [ sumNumberys3 ], expected: 2 },
	{ name: 'Test 4', args: [ sumNumberys4 ], expected: null },
	{ name: 'Test 5', args: [ [ 1, 2, 3 ] ], expected: null },
	{ name: 'Test 6', args: [ [ '1', '2', '3' ] ], expected: 6 },
	{ name: 'Test 7', args: [ oddsToSum ], expected: 9 },
	{ name: 'Test 8', args: [ evensToSum ], expected: 12 }
];

const sumAllNumberys = (arr) => {
	// write me!
	let total = 0;
	let numbery = arr.every((x) => typeof x === 'number');
	let hasNaN = arr.includes(NaN);
	if (numbery || hasNaN) {
		return null;
	} else {
		for (let item of arr) {
			if (!isNaN(item)) {
				total = total + Number(item);
			}
		}
	}
	return total;
};

evaluate(sumAllNumberys, sumAllNumberysTests);
