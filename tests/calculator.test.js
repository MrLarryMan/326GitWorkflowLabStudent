const assert = require('assert');
const calculator = require('../calculator');


describe('Calculator sine Functions', function() {
    it('should return 1 for sine(90 degrees)', function() {
        const res = calculator.sine(90); 
        assert.strictEqual(res, 1);
    });

});


// Add your tests here

// Test calculation functions
describe('Cosine Test', function() {
    const res = calculator.cosine(Math.PI);
    it('should return -1', function() {
        assert.strictEqual(res, -1);
    });
});
});

