// Problem Description
// Given 2 strings S and T containing lowercase and '#' characters. You have to check whether these 2 strings are same or not when typed into an editor('#' being the backspace character).


// Note: Backspacing an empty string remains an empty string only.

// For eg. a#bc means bc, and a##bcd means bcd.

// Input format
// There are 2t+1 lines of input.

// First line contains an integer tests - Number of test cases.

// First line of each test case contains a string S.

// Second line of each test case contains a string T.

// Output format
// Print true if the 2 strings are same otherwise false, for each test case print in a different line.

// Function definition
// You have to complete the given function. It accepts two parameters - the two strings, and returns a boolean value, true if S and T are same and false if not.

// Sample Input 1
// 2

// as#sddff#

// aa#sddf

// a##b

// ab

// Sample Output 1
// true

// false

class Stack{
    constructor()
    {
        this.top=-1;
        this.data=[]
    }
    push(char)
    {
        this.data.push(char)
        this.top++
    }
    pop()
    {  if(!this.isEmpty())
        {
        let char=this.data.pop()
        this.top--;
        return char;
        }
    }
    peep()
    {
        let char=this.data.pop()
        
        return char;
    }
    isEmpty()
    {
        if(this.top==-1)
        {
            return true
        }
        else{
            return false;
        }
    }
}
let s1="a##b"
let s2="ab"
let st1=new Stack();
let st2=new Stack()
for(let i=0;i<s1.length;i++)
{
    if(s1[i]!='#')
    {
        st1.push(s1[i])
    }
    else{
        
        st1.pop();
    }
}
for(let i=0;i<s2.length;i++)
{
    if(s2[i]!='#')
    {
        st2.push(s1[i])
    }
    else{
        st2.pop();
    }
}
let f=0;
while(st1.top>=0 && st2.top>=0)
{
    let c1=st1.pop()
    let c2=st2.pop()
    if(c1!=c2)
    {
        console.log("not matche");
        f=1;
        break;
    }
    

}
if(f==0)
{
    console.log("matched")
}