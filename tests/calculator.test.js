const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
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
