//return index of item
function binarySearch(sorted, target) {
    let left = 0
    let right = sorted.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        console.log(left, right, mid)

        // if our midpoint matches
        if (sorted[mid] == target) {
            left = mid
            break;
        }

        if (sorted[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return sorted[left] == target ? left : -1
}

let sorted = [0, 1, 2, 3, 4]
let target = 6
console.log(binarySearch(sorted, target))
