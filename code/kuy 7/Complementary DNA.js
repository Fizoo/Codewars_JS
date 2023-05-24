function DNAStrand(dna){
    return [...dna].map(el=>{
        switch (el){
            case 'A':return 'T'
            case 'T':return 'A'
            case 'C':return 'G'
            case 'G':return 'C'
        }
    }).join('')
    //your code here
}

console.log(DNAStrand('AAAA'))
console.log(DNAStrand('ATTGC'))
console.log(DNAStrand('GTAT'))