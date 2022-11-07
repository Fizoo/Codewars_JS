/*function cakes(recipe, available) {
    let result=Number.MAX_VALUE

    for (const ing in recipe) {
        if(!available[ing]) return 0
        let count=Math.floor(available[ing]/recipe[ing])
         result=Math.min(result,count)
    }
    return result

}*/

function cakes(recipe, available) {
    return Object.keys(recipe).forEach(a=>{
        console.log(available[a])
    })
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

console.log(cakes(recipe,available))
