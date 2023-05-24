/*String.prototype.toJadenCase = function () {
   return this.split(' ').map(el=>el.substring(0,1).toUpperCase()+el.substring(1)).join(' ')
};*/

String.prototype.toJadenCase = function () {
   return this.replace(/\b\w/g, c => c.toUpperCase())
};
const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())