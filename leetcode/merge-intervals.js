var mergeMark = function(intervals) {
    intervals.sort((a,b)=>{return a[0]-b[0]})
    let currentInterval = intervals[0]
    let results = [currentInterval]
    for(let i=1; i<intervals.length; i++) {
        let current = currentInterval
        let next = intervals[i]
        if(next && next[0] <= current[1]) { //merge condition
            results.push([current[0], Math.max(next[1], current[1])])
            i++
        } else {
            results.push(current)
        }
    }
    return results
};

var merge = function(intervals) {
    if (intervals.length < 2) return intervals
    
    intervals.sort((a, b) => a[0] - b[0])
    
    let i = 0
    
    while (i !== intervals.length-1) {
        const curr = intervals[i]
        const next = intervals[i+1]
        
        if (curr[1] < next[0]) i++
        else {
            if (curr[1] < next[1])
                curr[1] = next[1]
            intervals.splice(i+1, 1)
        }
    }
    
    return intervals
};

console.log(merge([[1,4],[0,2],[3,5]]))