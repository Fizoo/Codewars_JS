function validBraces(braces){
    const stack = [];

    for (let i = 0; i < braces.length; i++) {
        const brace = braces[i];

        if (brace === '(' || brace === '[' || brace === '{') {
            stack.push(brace);
        } else {
            const last = stack.pop();

            if ((last === '(' && brace !== ')') ||
                (last === '[' && brace !== ']') ||
                (last === '{' && brace !== '}')) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(validBraces("(){}[]" )) //true
//console.log(validBraces("([{}])"  )) //true
//console.log(validBraces("[(])" )) //false
//console.log(validBraces("[(])"    )) //false
//console.log(validBraces("[({})](]" )) //false
