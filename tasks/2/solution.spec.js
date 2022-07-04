import reverseString from './solution.js';

describe('Reverse string in parentheses', () => {
    it('Should return "rab"', () => {
        const s = '(bar)';
        const result = reverseString(s);
        expect(result).toBe('rab');
    });

    it('Should return "foorabbaz"', () => {
        const s = 'foo(bar)baz';
        const result = reverseString(s);
        expect(result).toBe('foorabbaz');
    });

    it('Should return "foorabbazmilb"', () => {
        const s = 'foo(bar)baz(blim)';
        const result = reverseString(s);
        expect(result).toBe('foorabbazmilb');
    });

    it('Should return "foobazrabblim"', () => {
        const s = 'foo(bar(baz))blim';
        const result = reverseString(s);
        expect(result).toBe('foobazrabblim');
    });

    it('Should return "abcghilkjfed"', () => {
        const s = 'abc(def(ghi(jkl)))';
        const result = reverseString(s);
        expect(result).toBe('abcghilkjfed');
    });
})
