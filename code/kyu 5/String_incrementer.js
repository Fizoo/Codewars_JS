function incrementString (strng) {
   return  strng.replace(/[\d]*$/, i => String(+i + 1).padStart(i.length, 0));
    // return incrementedString
}

console.log(incrementString('foobar000'))
console.log(incrementString('foo'))
console.log(incrementString('foobar01'))
