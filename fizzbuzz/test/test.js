var assert = require('assert');

function assertExists(array, value) {
	if (array.includes(value)) return true;
	throw new Error("value: " + value + " not found in array: " + array);
};

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal([1,2,3].indexOf(4), -1);
		});
	});
});

var fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', function() {
	it('should return a list of the correct size', function() {
		var output = fizzbuzz.run(1, 5);
		assert.strictEqual(output.length, 5);
	});
});

describe('getResult', function() {
	it('should return the passed number for non-multiples of 3 and 5',
      function(){
	        assert.strictEqual(fizzbuzz.getResult(1), 1);
      });
});

describe('firstFizzers', function() {
	it('should return Fizz for multiples of 3', function() {
		assert.strictEqual(fizzbuzz.getResult(3), 'Fizz');
		assert.strictEqual(fizzbuzz.getResult(6), 'Fizz');
		assert.strictEqual(fizzbuzz.getResult(9), 'Fizz');
	});
});

describe('firstBuzzers', function() {
	it('should return Buzz for multiples of 5', function() {
		assertExists(fizzbuzz.getResult(5), 'Buzz');
		assertExists(fizzbuzz.getResult(10), 'Buzz');
		assertExists(fizzbuzz.getResult(15), 'FizzBuzz');
	});
});
