export default function reverseString(str) {
    return reverseParantheses(str).result;
}

function reverseParantheses(str, isReverse = false) {
    const resultArray = [];
    let i = 0;
    while(i < str.length) {
        if (str[i] === '(') {
            const { result, shift } = reverseParantheses(str.slice(i + 1), true);
            resultArray.push(...result);
            i += shift;
        } else if (str[i] === ')') {
            break;
        } else {
            resultArray.push(str[i]);
            i++;
        }
    }
    isReverse && resultArray.reverse();
    return { result: resultArray.join(''), shift: i + 2 };
}
