import hasHamiltonianPath from "./solution.js";

describe('Check if rearrangement is possible', () => {
    it('Should return false', () => {
        const arr = ["aba", "bbb", "bab"];
        const result = hasHamiltonianPath(arr);
        expect(result).toBeFalse();
    });

    it('Should return true', () => {
        const arr = ["ab", "bb", "aa"];
        const result = hasHamiltonianPath(arr);
        expect(result).toBeTrue();
    });

    it('Should return false', () => {
        const arr = Array(50).fill('hello');
        const result = hasHamiltonianPath(arr);
        expect(result).toBeFalse();
    });

})
