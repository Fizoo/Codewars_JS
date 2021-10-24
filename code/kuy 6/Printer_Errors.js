
const f = (s) => {
    const reg = /[n-z]/
    return `${([...s]).reduce((prev,cur)=> reg.test(cur) ? prev + 1 : prev,0)}/${s.length}`
    /*return s.match(reg).length+1 +'/'+s.length*/

}
console.log(f("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmzx"))
