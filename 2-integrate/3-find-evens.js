const evaluate = require('../evaluate');
debugger;

const findEvensArray1 = [ '.', '1', '2', ':' ];
const findEvensArray2 = [ '1', 'two', 'three', '10' ];
const findEvensArray3 = [ 'one', '2', '', 'NaN' ];
const findEvensArray4 = [ '.', 1, 2, NaN ];

const oddsToNotFind = [ '1', '3', '5' ];
const evensToFind = [ '2', '4', '6' ];

const findAllEvensTests = [
	{ name: 'Test 1', args: [ findEvensArray1 ], expected: [ '2' ] },
	{ name: 'Test 2', args: [ findEvensArray2 ], expected: [ '10' ] },
	{ name: 'Test 3', args: [ findEvensArray3 ], expected: [ '2', '' ] },
	{ name: 'Test 4', args: [ findEvensArray4 ], expected: null },
	{ name: 'Test 5', args: [ [ 1, 2, 3 ] ], expected: null },
	{ name: 'Test 6', args: [ oddsToNotFind ], expected: [] },
	{ name: 'Test 7', args: [ evensToFind ], expected: [ '2', '4', '6' ] }
];

const findAllEvens = (arr) => {
	// write me!
	let arr2 = [];
	const numbery = arr.every((x) => typeof x === 'number');
	if (numbery) {
		return null;
	}
	const includesNaN = arr.includes(NaN);
	if (includesNaN) {
		return null;
	} else {
		for (let item of arr) {
			if (!isNaN(item) && item % 2 === 0) {
				arr2.push(item);
			}
		}
	}
	return arr2;
};

evaluate(findAllEvens, findAllEvensTests);
