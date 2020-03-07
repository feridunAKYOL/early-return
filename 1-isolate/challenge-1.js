const evaluate = require('../evaluate');

const earlyReturn1Tests = [
	{ name: 'Test 1', args: [ '', '' ], expected: 'string' },
	{ name: 'Test 2', args: [ false, '' ], expected: 'hi!' },
	{ name: 'Test 3', args: [ false, true ], expected: 'boolean' },
	{ name: 'Test 4', args: [ 'hi!', true ], expected: 'string' },
	{ name: 'Test 5', args: [ 2, 3 ], expected: 'hi!' }
];

function earlyReturn1(a, b) {
	// write early returns to pass the asserts and the tests
	if (typeof a === 'string' && typeof b === 'string') {
		return 'string';
	} else if (typeof a === 'boolean' && typeof b === 'boolean') {
		return 'boolean';
	} else if (typeof a === 'string' && typeof b === 'boolean') {
		return 'string';
	} else return 'hi!';
}
console.assert(typeof a !== 'string', 'a should not be a string');
console.assert(typeof b !== 'boolean', 'b should not be a boolean');

evaluate(earlyReturn1, earlyReturn1Tests);
