let str="bcdcbabb"
console.log(solve(str,0,str.length-1))
function isPali(s)
{
    let start=0;
    let end=s.length-1
    while(start<=end)
    {
        if(s[start]!=s[end])
        {
            return false
        }
        start+=1;
        end-=1;
    }
    return true

}
// function solve(str,i,j)
// {
//     if(i>=j)  // Single character or empty string is already a palindrome with 0 partitions


//     {
//         return 0
//     }
//     let subs=str.substring(i,j+1)
//     if(isPali(subs))
//     {
//         return 0
//     }
//     let min=Infinity
//     for(let k=i;k<j;k++)
//     {
//         let temp=1+solve(str,i,k)+solve(str,k+1,j)
//    //     console.log(temp)
//         if(min>temp)
//         {
//             min=temp
//         }
//     }
//     return min;
// }
function solve(str, i, j) {
    if (i >= j) {
        return 0; // Single character or empty string is already a palindrome with 0 partitions
    }

    let subs = str.substring(i, j + 1);
    if (isPali(subs)) {
        return 0;
    }

    let min = Infinity;
    for (let k = i; k < j; k++) {
        let temp = 1 + solve(str, i, k) + solve(str, k + 1, j);
        if (min > temp) {
            min = temp;
        }
    }
    return min;
}