const calculate = (...x) => (...y)=>{
        return [...x,...y].reduce((a,b)=>a+b,0)
};

console.log(calculate(2,4)(3,7,1))
