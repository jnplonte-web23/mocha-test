'use strict';
const chai = require('chai');

describe.only('TEST 1', async () => {
	before(async () => {
		// console.log('init test');
	});

	it('should test number', async () => {
		const testData = 111;

		chai.expect(Number(testData)).to.equal(111);
	});
});
