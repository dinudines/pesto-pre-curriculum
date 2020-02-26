const { describe, expect, it, matchers,adder,subtractor,multiplier,divider} = require('./index');

describe('adder', () => {
    it('adds two numbers', () => {
        const result = adder(1, 2);
        expect(result).toBe(3)
    })
});

describe('subtractor', () => {
    it('subtract second number from first', () => {
        const result = subtractor(2, 1);
        expect(result).toBe(1)
    })
});

describe('multiplier', () => {
    it('multipies two numbers', () => {
        const result = multiplier(2, 2);
        expect(result).toBe(4)
    })
});

describe('divider', () => {
    it('divides first number by second number', () => {
        const result = divider(4, 2);
        expect(result).toBe(3)
    })
});