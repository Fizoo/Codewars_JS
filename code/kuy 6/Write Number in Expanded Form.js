function expandedForm(num) {
  return   num
        .toString()
        .split("")
        .reverse()
        .map((a, i) => a * Math.pow(10, i))
        .filter(a => a > 0)
        .reverse()
        .join(" + ");

}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(40402))
