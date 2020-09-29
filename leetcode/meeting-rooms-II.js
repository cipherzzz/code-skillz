var minMeetingRooms = function(intervals) {
    
    if(intervals && intervals.length == 0) {
        return 0
    }
    
    intervals.sort((a,b)=>{return a[0]-b[0]})
    let roomCount = 1
    for(let i=0; i< intervals.length; i++) {
        let currentInterval = intervals[i]
        let nextInterval = intervals[i+1]
        if(nextInterval && nextInterval[0] < currentInterval[1]) {
            roomCount = roomCount+1
        } 
    }
    return roomCount
    
};