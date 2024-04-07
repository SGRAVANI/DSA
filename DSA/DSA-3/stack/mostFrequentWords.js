// You are given a list of words present in a book. Your younger brother is really curious to know the K most frequent words in the book, you have to find them.


// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order should come first.

// Input format
// There are three lines of input

// The first line contains N, which is the number of input strings.

// The second line contains N space separated input strings (S).

// The third line contains the value of K.

// Output format
// Print the K most frequent words present inside the book, each in a new line. If two words have the same frequency, then the word with the lower alphabetical order should come first.

// Constraints
// 1 <= N <= 1000

// 1 <= Length(S) <= 100000

// 'a' <= S[i] <= 'z'

// 1 <= K <= Number of Unique Strings

// Sample Input 1
// 1

// bus

// 1

// Sample Output 1
// bus

// Explanation 1
// In the given input, the frequency of "bus" is 1 and it is the 1st most frequent word.

// Sample Input 2
// 3

// car bus car

// 2

// Sample Output 2
// car

// bus

// Explanation 2
// In the given input, the frequency of "car" is 2, frequency of “bus” is 1.

// Since K = 2, both words are printed, with "car" being the most frequent, gets printed first.

let words=["car", "bus","car","book","reader","book","exam","pen"]
let m={}
for(let word of words)
{
m[word]=m[word]?m[word]+1:1
}
console.log(m)
let comb=Object.entries(m);
console.log(comb)
function comparator(a,b){
    if(a[1]!=b[1])
    {
       if(a[1]>b[1])
       {
        return -1;
       }
       else{
        return 1;
       }
    }
    return a[0].localeCompare(b[0])<0?-1:1

}
comb.sort(comparator)
console.log(comb)