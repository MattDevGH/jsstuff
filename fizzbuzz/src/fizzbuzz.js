exports.run = function(min, max) {
	var output = [];

	for (var i = min; i< max; i++) {
		output[i] = getResult(i);
	}

	return output;
};

var getResult = function(input) {
	if (input % 15 == 0) return "FizzBuzz";
	if (input % 3 == 0) return "Fizz";
	if (input % 5 == 0) return "Buzz";
	return input;
};
