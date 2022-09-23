function removeExclamationMarks(s) {
    return [...s].filter(el=>el!=='!').join('')
}

/*function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}*/

/*function removeExclamationMarks(s) {
    return s.split('!').join('');
}*/


console.log(removeExclamationMarks("Hello World!"))
