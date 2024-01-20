class Trie{
    constructor()
    {
        this.isEnd=false;
        this.child=new Array(26).fill(null)
    }
    insert(word)
    {
        let temp=this;
        for(let i=0;i<word.length;i++)
        {
            let id=word[i].charCodeAt(0)-'a'.charCodeAt(0);
            if(temp.child[id]==null)
            {
                temp.child[id]=new Trie();

            }
            temp=temp.child[id];
        }
        temp.isEnd=true
    }
    delete(word)
    {
        let temp=this
        for(let i=0;i<word.length;i++)
        {
            let id=word[i].charCodeAt(0)-'a'.charCodeAt(0);
            // if(i==word.length-1)
            // {
            //     temp.isEnd=false
            // }
            temp=temp.child[id]
            
        }
        temp.isEnd=false
        
    }
    search(word)
    {
        let temp=this
        for(let i=0;i<word.length;i++)
        {
            let id=word[i].charCodeAt(0)-'a'.charCodeAt(0)
            if(temp.child[id]==null)
            {
                return false
            }
            temp=temp.child[id]
        }
        // if(temp.isEnd==true)
        // {
        // return true
        // }
        // else{
        //     return false
        // }
        return temp.isEnd
    }
   
    // replacement(sentance)
    // {
    //     let temp=this;
    //     let words=sentance.split('')
    //     let newWords=[]
    //     for(let i=0;i<words.length;i++)
    //     {

    //         let word=words[i]
    //         let match=''
    //         for(let j=0;j<word.length;j++)
    //         {
    //             let t=this;
    //             let id=word[j].charCodeAt(0)-'a'.charCodeAt(0);
    //             if(temp.child[id]!=null )
    //             {
    //                 match=match+String.fromCharCode(id+'a'.charCodeAt(0))
    //                 temp=temp.child[id]
                    
    //             }
    //             if(temp.isEnd==true)
    //             {
    //                 break;
    //             }
    //         }
    //         if(this.search(word)==false)
    //         {
    //             newWords.push(word)
    //         }

    //     }
    // }
}
function replace(root,word)
{
    if(root==null)
    {
        return word
    }
    let temp=root
    for(let i=0;i<word.length;i++)
    {
        let id=word[i].charCodeAt(0)-'a'.charCodeAt(0);
        if(temp.isEnd)
        {
            return word.substring(0,i)
        }
        if(temp.child[id]!=null)
        {
            temp=temp.child[id]
        }
        else{
            return word;
        }

    }
    //if input word is shorter than root word
    return word
    }
let sentence="the cattle was rattled by the battery"
let words=['cat','bat','rat']
let root =new Trie();
for(let w of words)
{
    root.insert(w)
}
let op=""
let subs=""
for(let i=0;i<sentence.length;i++)
{
if(sentence[i]!=' ')
{
    
    subs+=sentence[i]
  
}
else{
    if(sentence[i+1]!=' ')
    {
   /// console.log(subs)
    let rw=replace(root,subs);
    op+=rw+" "
    subs=""
    }
}
}
//console.log(subs)
let rw=replace(root,subs)
op=op+rw;
console.log(op)
//sentence: the cattle was rattled by the battery
//words: cat bat rat
 //op:the cat was rat by the bat