const assert = require("assert");

let expectedAssertions = 0;
let actualAssertions = 0;

const expect = function expect (val) {
	expectedAssertions = val;
};

const reset = function () {
	expectedAssertions = undefined;
	actualAssertions = 0;
};

const countAssertion = function () {
	actualAssertions++;
};

const check = function check () {
	if (expectedAssertions === undefined || expectedAssertions === actualAssertions) {
		return;
	}
	const err = new Error("expected " + expectedAssertions + " assertions, got " + actualAssertions);
	this.currentTest.emit("error", err);
};

// Loop the functions in assert library and wrap them
const assertProxy = {};

for (const i in assert) {
	if (assert.hasOwnProperty(i)) {
		if (typeof assert[i] === "function") {
			// Copy the function as a wrap
			assertProxy[i] = (...args) => {
				countAssertion();
				return assert[i].apply(assert, args);
			};
		}
	}
}

module.exports = ({beforeEach, afterEach}) => {
	beforeEach(reset);
	afterEach(check);
	
	return {
		expect,
		reset,
		countAssertion,
		check,
		"assert": assertProxy
	};
};