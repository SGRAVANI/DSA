// // let s = {};

// // function helper(inp, out) {
// //     if (inp.length === 0) {
// //         if (out.length > 0) { // Only add non-empty subsets
// //             s[out.join('')] = 1;
// //         }
// //         return;
// //     }
// //     let o1 = [...out];
// //     let o2 = [...out];
// //     o2.push(inp[0]);
// //     inp.shift();
// //     helper(inp, o1);
// //     helper(inp, o2);
// // }

// // function AllSubsets(arr) {
// //     helper(arr, []);
// //     console.log(Object.keys(s));
// //     return Object.keys(s);
// // }

// // AllSubsets([2, 1, 2]);
// function permutationFind(input, output) {
//     if (input.length === 0) {
//         console.log(output);
//         return;
//     }
//     let out1 = output;
//     let out2 = output + input[0];
//     input = input.substring(1);

//     permutationFind(input, out1);
//     permutationFind(input, out2);
// }

// // Example usage:
// permutationFind("abc", "");
function permutationFind(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }
    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let remainingChars = input.slice(0, i).concat(input.slice(i + 1));
        let newOutput = output.concat(currentChar);
        permutationFind(remainingChars, newOutput);
    }
}

// Example usage:
let inputArray = [1, 2, 3];
permutationFind(inputArray, []);