/*function count(addresses) {
    return addresses.reduce((acc,val)=>{
        acc[val]=(acc[val] || 0) +1
        return acc
    },{})

}*/

const count = addres => {
  const states = addres.reduce((obj, { state }) => {
    obj[state] = (obj[state] || 0) + 1
    return obj
  }, {})
  return Object.keys(states).map(state => ({state, count: states[state]}) )
}

console.log(count([{
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK"
}]))
