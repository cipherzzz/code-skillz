// merge sort
const mrrg = (left: number[], right: number[]): number[] => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mrrg([1, 10, 50], [2, 14, 99, 100]));