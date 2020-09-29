var topKFrequent = function(nums, k) {
    nums.sort((a,b)=>{ return a-b})
    let dict = {}
    for(let i=0; i<nums.length; i++) {
        if(dict[nums[i]] == undefined) {
        dict[nums[i]] = [nums[i],1]
        } else {
            dict[nums[i]] = [nums[i], dict[nums[i]][1]+1]
        }
    }
    let kValues = Object.values(dict).sort((a,b)=>{return b[1]-a[1]}).slice(0,k)
    let kFrequent = []
    kValues.forEach((item)=>{
        kFrequent.push(item[0])
    })
    return kFrequent
};