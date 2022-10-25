function generateHashtag (str) {
    return str.trim().length && str.split(/\s+/g).join('').length<140
        ?'#'+str.split(/\s+/g).map(el=>el.substring(0, 1).toUpperCase().concat(el.substring(1))).join('')
        :false


}

console.log(generateHashtag(''))//false
console.log(generateHashtag(' '))//false
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))//false
console.log(generateHashtag('Do We have A Hashtag'))//
console.log(generateHashtag(' Hello there thanks for trying my Kata'))//
console.log(generateHashtag("    Hello     World   " ))//
