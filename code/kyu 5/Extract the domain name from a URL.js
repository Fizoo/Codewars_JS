function domainName(url){
    const pattern = /^(?:https?:\/\/)?(?:www\.)?([^\/\.]+)/i
    return url.match(pattern)[1]
    //your code here
}
console.log(domainName("http://google.com"))
console.log(domainName("www.xakep.ru"))


/*  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  */


//Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя и возвращает его в виде строки. Например:
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"