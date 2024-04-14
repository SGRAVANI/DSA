function balancedParenthesis(open,close,subr)
{
    if(open==0 && close==0)
    {
       console.log(subr)
       return
    }

    if(open>0)
    {
   balancedParenthesis(open-1,close,subr+"(")
    }
    if(open<close)
    {
balancedParenthesis(open,close-1,subr+")")
    }
}
balancedParenthesis(4,4,"")