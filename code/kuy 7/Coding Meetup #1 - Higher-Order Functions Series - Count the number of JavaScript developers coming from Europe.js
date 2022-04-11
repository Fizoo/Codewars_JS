function countDevelopers(list) {
    return list.filter(({language,continent})=>language==='JavaScript'&&continent==='Europe').length;
   // return list.reduce((count,{language,continent})=>(continent === 'Europe' && language === 'JavaScript')?count+1:count,0)

}

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]
console.log(countDevelopers(list1))
