function anagram(a, b) {
    a=a.toLowerCase();
    b=b.toLowerCase();
    
    if (a.length!==b.length) {
        return false;
    }
    let c=a.split('')
    c=c.sort()
    c=c.join('');

    let d = b.split('')
    d=d.sort()
    d=d.join('');
    
    return c==d;
}
console.log(anagram('human', 'nhmua'));
console.log(anagram('apple', 'banana'));