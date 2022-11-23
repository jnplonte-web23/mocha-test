'use strict';
const chai = require('chai');

describe.only('TEST 2', async () => {
	before(async () => {
		// console.log('init test');
	});

	it('should test string', async () => {
		const testData = '111';

		chai.expect(testData).to.equal('111');
	});

	it('should test array', async () => {
		const testData = [1, 2, 3, 4, 5];

		chai.expect(testData.length).to.equal(5);
	});
});
