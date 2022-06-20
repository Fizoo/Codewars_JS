/* with reduce
const dublicate=array=>{
    return array.map(el=>el.category).reduce((acc,item)=>{
        const x=acc.find(el=>el.name===item.name)
        return !x?[...acc,item]:acc
    },[])
}
*/
/*
with Set and filter

const dublicate=array=>{
    const seen = new Set();

    return array.map(el=>el.category).filter(el=>{
        const dublicate=seen.has(el.name)
        seen.add(el.name)
        return !dublicate
    })
}
*/

/*
with Map
*/
const dublicate =arr=> {
   const array= arr.map(el=>el.category)
       return [...new Map(array.map(item => [item.name, item])).values()]
}

const list=[
    {
        id:1,
        name:'Oleg',
        status:false,
        date:Date.now(),
        category:{
            name:'Робота',
            id:1,
            icon:'bi bi-cart3'
        },
        priority:{
            id:1,
            name:'High',

        }
    },
    {
        id:2,
        name:'Sofi',
        status:false,
        date:Date.now(),
        category:{
            name:'Family',
            id:2
        },
        priority:{
            id:1,
            name:'High',

        }
    },
    {
        id:3,
        name:'Katy',
        status:false,
        date:Date.now(),
        category:{
            name:'Family',
            id:2
        },
        priority:{
            id:1,
            name:'High',

        }
    }
]


console.log(dublicate(list))
