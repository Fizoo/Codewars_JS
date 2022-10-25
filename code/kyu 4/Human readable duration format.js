function formatDuration (seconds) {
    const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
    let res=[]

   if(seconds===0) return 'now'

    for (const key in time) {
       if(seconds>=time[key]){
           let val=Math.floor(seconds/time[key])

           res.push(val+=val>1?' '+ key+'s':' '+key)
           seconds=seconds%time[key]
       }
    }

  return res.length>1?res.join(', ').replace(/,([^,]*)$/,' and'+'$1'):res[0]
    // Complete this function
}

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))
