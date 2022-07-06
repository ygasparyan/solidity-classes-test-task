function isNeighbour(str1, str2) {
    return [...str1].reduce((acc, char, index) => acc + +(char !== str2[index]), 0) === 1;
}

function createAdjacencyTable(stringArray) {
    return stringArray.reduce((acc, str) => {
        acc.push(stringArray.map(str2 => +isNeighbour(str, str2)));
        return acc;
    }, []);
}

export default function hasHamiltonianPath(stringArray) {
    const adjacencyTable = createAdjacencyTable(stringArray);
    const N = adjacencyTable.length;
    const dp = Array.from(Array(N), ()=> Array(1 << N).fill(0));

    for (let i = 0; i < N; i++) {
        dp[i][(1 << i)] = true;
    }

    for (let i = 0; i < (1 << N); i++) {
        for (let j = 0; j < N; j++) {
            if (i & (1 << j)) {
                for (let k = 0; k < N; k++) {
                    if (i & (1 << k)
                        && adjacencyTable[k][j]
                        && j != k
                        && dp[k][i ^ (1 << j)]) {
                        dp[j][i] = true;
                        break;
                    }
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
         if (dp[i][(1 << N) - 1])
            return true;
    }
     return false;
}
