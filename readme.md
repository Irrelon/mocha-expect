# Mocha Expect

## Install
```bash
npm i mocha-expect --save-dev
```

## Usage (Contrived Example)
```js
const {describe, it, expect, assert} = require('mocha-expect');

/////////////////////////////
// THIS WILL PASS
/////////////////////////////
describe("My Thing", () => {
	it("Can do the thing I want", () => {
		expect(1); // Expect a single assertion
		assert.ok(true);
	});
});

/////////////////////////////
// THIS WILL FAIL
/////////////////////////////
describe("My Thing", () => {
	it("Can do the thing I want", () => {
		expect(2); // Expect two assertions
		
		// We only run one assertion so this
		// test will fail
		assert.ok(true); 
	});
});
```

## Issues, Questions, Comments
Please use the github issue tracker.

## License
MIT, ISC or any other license you wish to use. Have at it.

## Author
Irrelon Software Limited - Rob Evans