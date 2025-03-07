const assert = require('assert');
const calculator = require('../calculator');


describe('Calculator sine Functions', function() {
    it('should return 1 for sine(90 degrees)', function() {
        const res = calculator.sine(90); 
        assert.strictEqual(res, 1);
    });
});