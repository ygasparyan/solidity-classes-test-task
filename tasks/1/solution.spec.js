import firstUnique from './solution.js';

describe('Find first unique character', () => {
    it('Shoud return "c"', () => {
        const s = 'abacabad';
        const result = firstUnique(s);
        expect(result).toBe('c');
    });

    it('Shoud return "_"', () => {
        const s = 'abacabaabacaba';
        const result = firstUnique(s);
        expect(result).toBe('_');
    });

    it('Shoud return "j"', () => {
        const s = 'jasdfasdf';
        const result = firstUnique(s);
        expect(result).toBe('j');
    });

    it('Shoud return "_"', () => {
        const s = '';
        const result = firstUnique(s);
        expect(result).toBe('_');
    });
});
