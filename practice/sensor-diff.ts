
const sensorDiff = (reading1:number[], reading2:number[]): number => {
    const sensors = sensor1.concat(sensor2)

    let diff = 0
    for(let i=0; i<sensors.length/2; i++) {
        const offset = 4
        diff += Math.abs(sensors[i]-sensors[i+offset])
    }
    return diff
}

const sensor1: number[] = [2,3,7,9]
const sensor2: number[] = [2,3,8,8]
console.log(sensorDiff(sensor2, sensor2))

// check if number is palindrome