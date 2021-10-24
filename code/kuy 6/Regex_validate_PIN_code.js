function validatePIN (pin) {
    //return pin.length===4&&pin.match(/\d/g).length===4
    return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("12345"))
console.log(validatePIN("345"))
console.log(validatePIN("a234"))
console.log(validatePIN("1234"))