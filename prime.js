function prime(i)
{
    if(i<=1)
    {
        return false;

    }
    for(x=2;x<i;x++)
    {
        if(i%x==0)
        {
            return false;
        }
    }
    return true;
}
console.log(prime(9))
console.log(prime(7))