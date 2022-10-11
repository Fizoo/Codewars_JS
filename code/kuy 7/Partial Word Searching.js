function wordSearch(query, seq) {

    let regex = new RegExp(query, 'i');
    let results = seq.filter(s => regex.test(s));
    return results.length ? results : ["Empty"];
}


/*
wordSearch = (q, a) => (a = a.filter(e => e.match(new RegExp(q,'i'))))[0] ? a : ["Empty"];
*/


console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])) //["ab", "abc", "zab"]
