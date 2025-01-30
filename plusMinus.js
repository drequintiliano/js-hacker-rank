'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let result = []
    const arrLength = arr.length
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    
    for(let i = 0; i < arrLength; i ++) {
        positive += arr[i] > 0 ? 1 : 0;
        negative += arr[i] < 0 ? 1 : 0;
        zeros += arr[i] === 0 ? 1 : 0;                
    }                         
    
    console.log(Number(positive/arrLength).toFixed(6))
    console.log(Number(negative/arrLength).toFixed(6))
    console.log(Number(zeros/arrLength).toFixed(6))                      
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

/*
Input (stdin)
6
-4 3 -9 0 4 1

Expected Output
0.500000
0.333333
0.166667
*/
