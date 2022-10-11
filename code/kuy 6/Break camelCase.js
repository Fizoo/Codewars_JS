function solution(string) {
        return [...string].map(el=>el.toUpperCase()===el?' '+el:el).join('');
}

/*
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}*/

console.log(solution('camelCasingTest'))
